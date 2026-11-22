import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { SORT_OPTIONS, type SortKey } from "@/lib/catalog";
import { cn } from "@/lib/utils";
import { BrandFilter } from "./BrandFilter";

type Props = {
  brands: string[];
  brandCounts: Record<string, number>;
  selectedBrands: string[];
  onBrandsChange: (brands: string[]) => void;
  onClear: () => void;
  sort: SortKey;
  onSortChange: (sort: SortKey) => void;
  resultCount: number;
};

function toggle(list: string[], value: string) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

export function CatalogToolbar({
  brands,
  brandCounts,
  selectedBrands,
  onBrandsChange,
  onClear,
  sort,
  onSortChange,
  resultCount,
}: Props) {
  const [panelOpen, setPanelOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [draft, setDraft] = useState<string[]>(selectedBrands);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Desktop panel closes on outside click or Escape.
  useEffect(() => {
    if (!panelOpen) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setPanelOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPanelOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [panelOpen]);

  const openSheet = () => {
    setDraft(selectedBrands);
    setSheetOpen(true);
  };

  const count = selectedBrands.length;
  const label = (
    <>
      <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={1.4} />
      <span>Filtros</span>
      {count > 0 && (
        <span className="flex h-4 min-w-4 items-center justify-center bg-accent px-1 text-[10px] font-semibold leading-none text-accent-foreground">
          {count}
        </span>
      )}
    </>
  );

  return (
    <div
      ref={wrapRef}
      className="sticky top-14 z-40 mt-12 border-y border-rule bg-background/90 backdrop-blur-md md:top-16 md:mt-16"
    >
      <div className="frame flex h-14 items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-6">
          {/* Mobile: bottom sheet */}
          <button
            type="button"
            onClick={openSheet}
            className="flex h-10 items-center gap-2 text-[13px] font-medium md:hidden"
          >
            {label}
          </button>
          {/* Desktop: discreet drop-down panel */}
          <button
            type="button"
            aria-expanded={panelOpen}
            aria-controls="brand-panel"
            onClick={() => setPanelOpen((v) => !v)}
            className="hidden h-10 items-center gap-2 text-[13px] font-medium md:flex"
          >
            {label}
            <ChevronDown
              className={cn("h-3.5 w-3.5 transition-transform duration-300", panelOpen && "rotate-180")}
              strokeWidth={1.4}
            />
          </button>
          <span className="hidden truncate text-[13px] text-foreground/55 sm:inline">
            {resultCount} {resultCount === 1 ? "produto" : "produtos"}
          </span>
        </div>

        <label className="relative flex shrink-0 items-center gap-2 text-[13px]">
          <span className="hidden text-foreground/55 sm:inline">Ordenar por</span>
          <span className="sr-only sm:hidden">Ordenar por</span>
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value as SortKey)}
            className="h-10 cursor-pointer appearance-none bg-transparent pr-5 font-medium text-foreground outline-none"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-0 h-3.5 w-3.5"
            strokeWidth={1.4}
            aria-hidden
          />
        </label>
      </div>

      {panelOpen && (
        <div
          id="brand-panel"
          className="absolute inset-x-0 top-full hidden border-b border-rule bg-background animate-in fade-in slide-in-from-top-1 duration-300 md:block"
        >
          <div className="frame grid grid-cols-12 gap-x-10 py-10">
            <div className="col-span-3">
              <p className="kicker text-accent">Marca</p>
              <p className="mt-3 max-w-[16rem] text-[13px] leading-relaxed text-foreground/60">
                Selecione uma ou mais marcas da curadoria.
              </p>
            </div>
            <div className="col-span-7">
              <BrandFilter
                brands={brands}
                counts={brandCounts}
                selected={selectedBrands}
                onToggle={(b) => onBrandsChange(toggle(selectedBrands, b))}
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between gap-6">
              <button
                type="button"
                aria-label="Fechar filtros"
                onClick={() => setPanelOpen(false)}
                className="flex h-8 w-8 items-center justify-center text-foreground/60 hover:text-foreground"
              >
                <X className="h-4 w-4" strokeWidth={1.4} />
              </button>
              <button
                type="button"
                onClick={onClear}
                disabled={count === 0}
                className="link-quiet text-foreground disabled:pointer-events-none disabled:opacity-35"
              >
                Limpar filtros
              </button>
            </div>
          </div>
        </div>
      )}

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="bottom" className="flex max-h-[85vh] flex-col gap-0 p-0 md:hidden">
          <div className="border-b border-rule px-5 pb-5 pt-6">
            <SheetTitle className="display text-3xl font-light">Filtros</SheetTitle>
            <SheetDescription className="mt-1 text-[13px] text-foreground/60">
              Selecione uma ou mais marcas.
            </SheetDescription>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-6">
            <p className="kicker mb-4 text-accent">Marca</p>
            <BrandFilter
              columns="sheet"
              brands={brands}
              counts={brandCounts}
              selected={draft}
              onToggle={(b) => setDraft((d) => toggle(d, b))}
            />
          </div>
          <div className="grid grid-cols-2 items-center gap-4 border-t border-rule px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <button
              type="button"
              onClick={() => setDraft([])}
              className="h-12 text-left text-[14px] font-medium text-foreground/80 underline-offset-4 hover:underline"
            >
              Limpar filtros
            </button>
            <button
              type="button"
              onClick={() => {
                onBrandsChange(draft);
                setSheetOpen(false);
              }}
              className="h-12 bg-foreground text-[14px] font-medium text-background transition-opacity hover:opacity-90"
            >
              Aplicar filtros
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { normalizeText } from "@/lib/catalog";

export function BrandFilter({
  brands,
  counts,
  selected,
  onToggle,
  columns = "panel",
}: {
  brands: string[];
  counts: Record<string, number>;
  selected: string[];
  onToggle: (brand: string) => void;
  columns?: "panel" | "sheet";
}) {
  const [term, setTerm] = useState("");
  const visible = useMemo(() => {
    const t = normalizeText(term);
    return t ? brands.filter((b) => normalizeText(b).includes(t)) : brands;
  }, [brands, term]);

  return (
    <div>
      <div className="flex items-center gap-3 border-b border-foreground/25 pb-2.5 transition-colors focus-within:border-foreground">
        <Search className="h-3.5 w-3.5 shrink-0 text-foreground/55" strokeWidth={1.4} aria-hidden />
        <input
          type="search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Buscar marca"
          aria-label="Buscar marca"
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent text-[14px] outline-none placeholder:text-foreground/45 [&::-webkit-search-cancel-button]:appearance-none"
        />
      </div>

      {visible.length === 0 ? (
        <p className="mt-5 text-[13px] text-foreground/55">Nenhuma marca encontrada.</p>
      ) : (
        <ul
          className={cn(
            "mt-4 grid",
            columns === "panel" ? "grid-cols-2 gap-x-8 lg:grid-cols-3" : "grid-cols-1",
          )}
        >
          {visible.map((brand) => {
            const id = `brand-${columns}-${brand.replace(/\W+/g, "-").toLowerCase()}`;
            const checked = selected.includes(brand);
            return (
              <li key={brand}>
                <label
                  htmlFor={id}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 py-2.5 text-[14px] transition-colors",
                    columns === "sheet" && "border-b border-rule py-3.5",
                    checked ? "text-foreground" : "text-foreground/70 hover:text-foreground",
                  )}
                >
                  <Checkbox
                    id={id}
                    checked={checked}
                    onCheckedChange={() => onToggle(brand)}
                    className="h-4 w-4 border-foreground/40 shadow-none data-[state=checked]:border-foreground [&_svg]:h-3 [&_svg]:w-3"
                  />
                  <span className="min-w-0 flex-1 truncate">{brand}</span>
                  <span className="text-[12px] text-foreground/40">{counts[brand] ?? 0}</span>
                </label>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

import { X } from "lucide-react";

export type ActiveChip = { key: string; label: string; onRemove: () => void };

export function ActiveFilters({ chips, onClear }: { chips: ActiveChip[]; onClear: () => void }) {
  if (chips.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center gap-2">
      {chips.map((c) => (
        <button
          key={c.key}
          type="button"
          onClick={c.onRemove}
          aria-label={`Remover filtro ${c.label}`}
          className="inline-flex max-w-full items-center gap-2 border border-rule px-3 py-1.5 text-[12px] text-foreground/80 transition-colors hover:border-foreground hover:text-foreground"
        >
          <span className="truncate">{c.label}</span>
          <X className="h-3 w-3 shrink-0" strokeWidth={1.4} />
        </button>
      ))}
      <button type="button" onClick={onClear} className="link-quiet ml-2 text-[12px] text-foreground">
        Limpar filtros
      </button>
    </div>
  );
}

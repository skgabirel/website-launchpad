import { Check, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Visual feedback only — the order system comes in a later phase.
export function AddToOrderButton({ productName }: { productName: string }) {
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const t = setTimeout(() => setAdded(false), 1800);
    return () => clearTimeout(t);
  }, [added]);

  return (
    <button
      type="button"
      onClick={() => setAdded(true)}
      aria-label={added ? `${productName} adicionado ao pedido` : `Adicionar ${productName} ao pedido`}
      title="Adicionar ao pedido"
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center border transition-colors duration-300 md:h-8 md:w-8",
        added
          ? "border-foreground bg-foreground text-background"
          : "border-rule text-foreground/70 hover:border-foreground hover:text-foreground",
      )}
    >
      {added ? (
        <Check className="h-3.5 w-3.5 animate-in zoom-in-50" strokeWidth={1.6} />
      ) : (
        <Plus className="h-3.5 w-3.5" strokeWidth={1.4} />
      )}
      <span aria-live="polite" className="sr-only">
        {added ? "Adicionado ao pedido" : ""}
      </span>
    </button>
  );
}

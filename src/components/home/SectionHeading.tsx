import type { ReactNode } from "react";

export function SectionHeading({
  index,
  title,
  action,
}: {
  index: string;
  title: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-end justify-between gap-6 border-t border-rule pt-6">
      <div className="flex items-baseline gap-5 md:gap-8">
        <span className="kicker text-accent">{index}</span>
        <h2 className="display text-[2rem] md:text-5xl">{title}</h2>
      </div>
      {action && <div className="shrink-0 pb-1.5">{action}</div>}
    </div>
  );
}

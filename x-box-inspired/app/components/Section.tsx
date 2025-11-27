import { ReactNode } from "react";
import { Badge } from "./Badge";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "mint" | "sand" | "ink";
  actions?: ReactNode;
  children: ReactNode;
};

export function Section({
  eyebrow,
  title,
  description,
  tone = "mint",
  actions,
  children,
}: SectionProps) {
  return (
    <section className="surface">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          {eyebrow ? <Badge tone={tone}>{eyebrow}</Badge> : null}
          <div>
            <h2 className="text-xl font-semibold text-[#0f1a16] md:text-2xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-2 max-w-2xl text-sm text-[#4a5b55]">
                {description}
              </p>
            ) : null}
          </div>
        </div>
        {actions ? <div className="flex shrink-0 gap-3">{actions}</div> : null}
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

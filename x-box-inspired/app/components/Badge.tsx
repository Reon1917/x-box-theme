import { ReactNode } from "react";

type Tone = "mint" | "sand" | "ink";

type BadgeProps = {
  tone?: Tone;
  children: ReactNode;
};

const toneClass: Record<Tone, string> = {
  mint: "bg-[rgba(66,140,106,0.16)] text-[#1c3b2e] ring-[#a6d8c2]/70",
  sand: "bg-[rgba(214,201,180,0.4)] text-[#5a5042] ring-[#d9cbb5]/80",
  ink: "bg-[rgba(23,31,34,0.6)] text-[#0c1b17] ring-[#1f4033]/70",
};

export function Badge({ tone = "mint", children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ring-1 ring-inset ${toneClass[tone]}`}
    >
      {children}
    </span>
  );
}

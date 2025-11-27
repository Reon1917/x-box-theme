import Link from "next/link";
import { ReactNode } from "react";

type PillButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
};

const variants = {
  primary:
    "bg-gradient-to-r from-[#204734] via-[#245a42] to-[#1f4733] text-[#f3f7f1] shadow-[0_10px_35px_rgba(45,103,78,0.25)] hover:shadow-[0_14px_42px_rgba(45,103,78,0.32)] hover:-translate-y-[1px]",
  ghost:
    "border border-[#d5e3d7] text-[#0f1a16] hover:border-[#2d674e] hover:text-[#1b3b2f] hover:-translate-y-[1px] bg-white/60 backdrop-blur",
};

export function PillButton({
  href,
  children,
  variant = "primary",
}: PillButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}

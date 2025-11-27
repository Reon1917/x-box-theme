type Stat = {
  label: string;
  value: string;
  detail?: string;
};

type StatStackProps = {
  stats: Stat[];
};

export function StatStack({ stats }: StatStackProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-[#e4ece6] bg-white/80 p-4 shadow-[0_12px_26px_rgba(16,46,36,0.08)]"
        >
          <p className="text-xs uppercase tracking-[0.16em] text-[#6a7b73]">
            {stat.label}
          </p>
          <p className="mt-1 text-2xl font-semibold text-[#0f1a16]">
            {stat.value}
          </p>
          {stat.detail ? (
            <p className="text-sm text-[#4a5b55]">{stat.detail}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

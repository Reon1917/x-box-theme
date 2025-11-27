import { Badge } from "./Badge";

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  year: string;
  status: "Live" | "Case Study" | "Concept";
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#e4ece6] bg-white/80 p-5 shadow-[0_18px_40px_rgba(16,46,36,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(16,46,36,0.12)]">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/0 via-white/50 to-white/0 opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="flex items-center justify-between gap-3">
        <Badge tone="sand">{project.status}</Badge>
        <span className="text-xs uppercase tracking-[0.18em] text-[#6a7b73]">
          {project.year}
        </span>
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-semibold text-[#0f1a16]">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-[#4a5b55]">
          {project.summary}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.14em] text-[#3d5148]">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#f2f6f3] px-3 py-1 ring-1 ring-inset ring-[#e0e9e3]"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

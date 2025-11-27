import { Badge } from "./components/Badge";
import { PillButton } from "./components/PillButton";
import { Project, ProjectCard } from "./components/ProjectCard";
import { Section } from "./components/Section";
import { StatStack } from "./components/StatStack";

const stats = [
  { label: "Products shipped", value: "38", detail: "B2C + B2B launches" },
  { label: "Lighthouse", value: "95+", detail: "Performance & accessibility" },
  { label: "Team Rhythm", value: "1–2 weeks", detail: "Design → ship cadence" },
  { label: "Timezone", value: "GMT+1", detail: "Async-friendly handoffs" },
];

const projects: Project[] = [
  {
    title: "Calm Finance OS",
    summary:
      "Portfolio and spend overview with frictionless inputs, meditative gradients, and crisp typography for trust.",
    tags: ["Next.js", "Design System", "Data Viz"],
    year: "2024",
    status: "Live",
  },
  {
    title: "Serenity Health",
    summary:
      "Patient intake flow tuned for clarity and low cognitive load, with adaptive spacing and gentle motion cues.",
    tags: ["UX Research", "Motion", "Accessibility"],
    year: "2023",
    status: "Case Study",
  },
  {
    title: "Drift Notes",
    summary:
      "Minimalist note canvas with keyboard-first navigation, auto layouts, and ambient focus music toggles.",
    tags: ["Web App", "Shortcuts", "System UI"],
    year: "2024",
    status: "Live",
  },
  {
    title: "Atlas Travel",
    summary:
      "Itinerary builder with balanced grids, mirrored cards, and subtle parallax that never competes with content.",
    tags: ["E-commerce", "Interaction Design", "A/B Tested"],
    year: "2022",
    status: "Case Study",
  },
];

const rituals = [
  {
    title: "Precision typography",
    detail: "Baseline grid, optical balance, and line lengths that let people breathe.",
  },
  {
    title: "Shape harmony",
    detail:
      "Symmetric cards, consistent corner radii, and mirrored gutters for calm alignment.",
  },
  {
    title: "Motion with intent",
    detail: "Easing that respects focus: quick feedback, gentle settles, no surprise spins.",
  },
  {
    title: "Clarity over noise",
    detail: "Low-contrast dividers, deliberate white space, restrained palette accents.",
  },
];

const waysOfWorking = [
  {
    name: "Guided walkthroughs",
    body: "Live design reviews with interactive prototypes to align on feel, not just layout.",
  },
  {
    name: "Design tokens first",
    body: "Color, space, and motion tokens ready for engineers; no guesswork when theming.",
  },
  {
    name: "Interaction maps",
    body: "Documented focus states, keyboard paths, and touch targets to keep flow inclusive.",
  },
];

const calmInteractions = [
  "Soft gradient breathing background with imperceptible 24s loop.",
  "Micro-parallax on hero illustration that eases out after movement.",
  "Cards lift 4px with shadow soften; drop instantly on blur for control.",
  "Buttons ripple a faint ring that fades within 280ms; no loud flares.",
];

const playlists = [
  { title: "Zen Sprint", tracks: "Ambient electronica for deep work" },
  { title: "Soft Mornings", tracks: "Acoustic layers for planning calls" },
  { title: "Focus Minimal", tracks: "Sub-bass and hush textures for UI QA" },
];

export default function Home() {
  return (
    <div className="page-shell">
      <div className="background-grid" />
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />
      <main className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-10">
        <header className="surface hero">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-4">
              <Badge>Serene Front-end Studio</Badge>
              <h1 className="text-3xl font-semibold text-[#0f1a16] sm:text-4xl">
                Calm, intentional interfaces that feel effortless.
              </h1>
              <p className="max-w-2xl text-base text-[#4a5b55] sm:text-lg">
                I help products find a relaxed, confident voice—balancing symmetry,
                measured motion, and thoughtful content hierarchy so people stay
                focused. Front-end engineering + design in one place.
              </p>
              <div className="flex flex-wrap gap-3">
                <PillButton href="#contact">Schedule a walkthrough</PillButton>
                <PillButton href="#work" variant="ghost">
                  View live builds
                </PillButton>
              </div>
            </div>
            <div className="rounded-3xl border border-[#e4ece6] bg-white/80 p-5 shadow-[0_18px_46px_rgba(16,46,36,0.08)]">
              <div className="flex items-center justify-between">
                <Badge tone="sand">In Balance</Badge>
                <span className="text-xs uppercase tracking-[0.16em] text-[#6a7b73]">
                  Portfolio Preview
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="stacked-tile">
                  <p className="tile-eyebrow">Focus</p>
                  <p className="tile-value">Product UI</p>
                  <p className="tile-detail">Web & mobile surfaces</p>
                </div>
                <div className="stacked-tile">
                  <p className="tile-eyebrow">Strength</p>
                  <p className="tile-value">Motion Systems</p>
                  <p className="tile-detail">Feel over flash</p>
                </div>
                <div className="stacked-tile">
                  <p className="tile-eyebrow">Clients</p>
                  <p className="tile-value">Health, Finance, Tools</p>
                  <p className="tile-detail">Seed → Series D</p>
                </div>
                <div className="stacked-tile">
                  <p className="tile-eyebrow">Mode</p>
                  <p className="tile-value">Async + Live</p>
                  <p className="tile-detail">Weekly demos</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <StatStack stats={stats} />

        <Section
          eyebrow="Balance First"
          title="Design rituals for calm products"
          description="A concise system that prioritizes restful pacing, clarity in copy, and consistent rhythm across screens."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rituals.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#e4ece6] bg-white/70 p-4 shadow-[0_10px_28px_rgba(16,46,36,0.06)]"
              >
                <p className="text-sm font-semibold text-[#0f1a16]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-[#4a5b55]">{item.detail}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Case Library"
          title="Work that stays quiet while it guides"
          description="Selected projects across finance, health, tools, and travel. Each shipped with structured handoff docs and design tokens."
        >
          <div
            id="work"
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Working Style"
          title="How we move together"
          description="Straightforward collaboration designed to keep pace steady and decisions reversible."
          tone="sand"
          actions={<PillButton href="mailto:hello@studio.com">Start a thread</PillButton>}
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {waysOfWorking.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-[#e4ece6] bg-white/80 p-4 shadow-[0_12px_30px_rgba(16,46,36,0.07)]"
              >
                <p className="text-sm font-semibold text-[#0f1a16]">
                  {item.name}
                </p>
                <p className="mt-2 text-sm text-[#4a5b55]">{item.body}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-[#e4ece6] bg-gradient-to-br from-white via-[#f3f7f4] to-[#e7f0ea] p-5 shadow-[0_14px_32px_rgba(16,46,36,0.08)]">
              <p className="text-xs uppercase tracking-[0.14em] text-[#6a7b73]">
                Content depth
              </p>
              <p className="mt-2 text-lg font-semibold text-[#0f1a16]">
                Each engagement ships with a short field guide: goals, principles,
                motion specs, and how to extend notes.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[#4a5b55]">
                <li>• Tokenized spacing + color scales</li>
                <li>• Component anatomy and do/don&apos;t</li>
                <li>• QA checklist for calm motion</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section
          eyebrow="Calm Interactions"
          title="Micro-movements that guide, not distract"
          description="Animation budgets are set per component; motion obeys hierarchy and pauses on reduced-motion preferences."
          tone="mint"
        >
          <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-[#e4ece6] bg-white/80 p-5 shadow-[0_12px_28px_rgba(16,46,36,0.07)]">
              <p className="text-sm font-semibold text-[#0f1a16]">
                Interaction palette
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[#4a5b55]">
                {calmInteractions.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#e4ece6] bg-gradient-to-br from-white via-[#f6f9f7] to-[#e8f0eb] p-5 shadow-[0_14px_34px_rgba(16,46,36,0.08)]">
              <p className="text-xs uppercase tracking-[0.14em] text-[#6a7b73]">
                Layout studies
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="study-card">
                  <p className="study-title">Symmetry</p>
                  <p className="study-body">
                    Mirrored gutters and paired cards so eyes glide without effort.
                  </p>
                </div>
                <div className="study-card">
                  <p className="study-title">Vertical rhythm</p>
                  <p className="study-body">
                    4pt baseline grid with optically balanced line heights.
                  </p>
                </div>
                <div className="study-card">
                  <p className="study-title">Guided attention</p>
                  <p className="study-body">
                    Quiet dividers, deliberate contrast, and progressive disclosure.
                  </p>
                </div>
                <div className="study-card">
                  <p className="study-title">Touch + keyboard</p>
                  <p className="study-body">
                    Shared focus styles and generous targets across inputs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          eyebrow="Playlists"
          title="Soundtracks for a serene build"
          description="Optional ambient sets to demo motion with the right mood."
          tone="sand"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {playlists.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#e4ece6] bg-white/70 p-4 shadow-[0_10px_26px_rgba(16,46,36,0.06)]"
              >
                <p className="text-sm font-semibold text-[#0f1a16]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-[#4a5b55]">{item.tracks}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Contact"
          title="Let’s build with ease"
          description="Share your brief or a rough notion; I’ll respond with a visual outline and motion notes."
          tone="mint"
          actions={
            <>
              <PillButton href="mailto:hello@studio.com">Email me</PillButton>
              <PillButton href="#work" variant="ghost">
                See work again
              </PillButton>
            </>
          }
        >
          <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
            <div className="rounded-2xl border border-[#e4ece6] bg-white/80 p-5 shadow-[0_12px_30px_rgba(16,46,36,0.07)]">
              <p className="text-sm font-semibold text-[#0f1a16]">
                Quick intro note
              </p>
              <p className="mt-2 text-sm text-[#4a5b55]">
                Tell me about your product, audience, and deadlines. I&apos;ll send a
                one-page plan with timeline, artifacts, and a calm interaction
                sample tailored to your brand.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e4ece6] bg-gradient-to-br from-white via-[#f5f8f6] to-[#e6efe9] p-5 shadow-[0_14px_34px_rgba(16,46,36,0.08)]">
              <p className="text-sm font-semibold text-[#0f1a16]">
                Availability
              </p>
              <ul className="mt-2 space-y-2 text-sm text-[#4a5b55]">
                <li>• Starting new engagement: within 2 weeks</li>
                <li>• Formats: retained, sprint-based, or paired build</li>
                <li>• Location: Remote, EU hours friendly</li>
              </ul>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}

const projects = [
  {
    title: "Adaptive Signal Lab",
    description:
      "A modular analytics system for monitoring model drift with restrained dashboards and clarity-first data surfaces.",
    tags: ["Monitoring", "Data Systems", "Product"]
  },
  {
    title: "Quiet Lattice",
    description:
      "Design system for multi-team AI tooling, aligned to a 12-column grid and rigorous typographic rhythm.",
    tags: ["Design Systems", "UX", "Front-end"]
  },
  {
    title: "Sparse Ground",
    description:
      "Research portal exploring interpretability methods with high-signal visuals and disciplined interaction states.",
    tags: ["Research", "Visualization", "Accessibility"]
  }
];

const notes = [
  {
    title: "On structure as restraint",
    date: "Jan 2026",
    summary:
      "Why strong grids reduce cognitive load and improve collaboration in high-stakes teams."
  },
  {
    title: "Quiet interfaces, loud outcomes",
    date: "Nov 2025",
    summary:
      "Designing for clarity when the stakes are future-facing and technical."
  }
];

const focusAreas = [
  "Human-centered AI",
  "Systems thinking",
  "Swiss typographic rigor",
  "Minimal interaction layers"
];

export default function App() {
  return (
    <div className="min-h-screen bg-offwhite">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:bg-offwhite focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute right-[-10%] top-[-20%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-mutedcyan/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute left-[-10%] top-[30%] h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-indigo/20 via-transparent to-transparent blur-3xl" />
      </div>

      <header className="section-pad pb-8">
        <nav className="flex flex-col gap-6 border-b border-charcoal/10 pb-8 md:flex-row md:items-center md:justify-between">
          <div className="text-sm tracking-[0.32em] text-bluegray/70">
            AI SYSTEMS / PORTFOLIO
          </div>
          <div className="flex flex-wrap gap-6 text-sm uppercase tracking-widest text-charcoal/70">
            <a className="transition duration-300 hover:text-charcoal" href="#about">
              About
            </a>
            <a className="transition duration-300 hover:text-charcoal" href="#work">
              Work
            </a>
            <a className="transition duration-300 hover:text-charcoal" href="#research">
              Research
            </a>
            <a className="transition duration-300 hover:text-charcoal" href="#notes">
              Notes
            </a>
            <a className="transition duration-300 hover:text-charcoal" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="section-pad pt-10">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 lg:col-span-7">
              <p className="eyebrow reveal">Discipline meets future thinking</p>
              <h1 className="mt-6 text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl reveal reveal-1">
                I build calm, rigorous interfaces for AI systems that need clarity,
                trust, and quiet confidence.
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="card reveal reveal-2 rounded-2xl p-6">
                <p className="text-sm uppercase tracking-widest text-bluegray/60">
                  Current focus
                </p>
                <p className="mt-4 text-lg leading-relaxed text-charcoal/80">
                  Designing composable products for research teams, balancing strict
                  information hierarchy with human-first workflows.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-charcoal/20 px-3 py-1 text-xs text-charcoal/70">
                    AI UX
                  </span>
                  <span className="rounded-full border border-charcoal/20 px-3 py-1 text-xs text-charcoal/70">
                    Systems
                  </span>
                  <span className="rounded-full border border-charcoal/20 px-3 py-1 text-xs text-charcoal/70">
                    Research
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 reveal reveal-3">
            <a className="ghost-button" href="#work">
              View Work
            </a>
            <a className="ghost-button" href="#contact">
              Start a Project
            </a>
          </div>
        </section>

        <div className="h-px w-full soft-divider" />

        <section id="about" className="section-pad">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-4">
              <p className="eyebrow">About</p>
              <h2 className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">
                Technical mastery with minimal noise.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <p className="text-lg leading-relaxed text-charcoal/80">
                I partner with AI research and product teams to craft interfaces that
                communicate trust, precision, and forward motion. My process prioritizes
                structure, typographic hierarchy, and calm interaction layers.
              </p>
              <div className="mt-8 grid grid-cols-12 gap-4">
                {focusAreas.map((item) => (
                  <div
                    key={item}
                    className="col-span-12 sm:col-span-6 lg:col-span-3 rounded-2xl border border-charcoal/10 bg-white/60 px-4 py-5 text-sm text-charcoal/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="h-px w-full soft-divider" />

        <section id="work" className="section-pad">
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 lg:col-span-5">
              <p className="eyebrow">Selected Work</p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight">
                Swiss-aligned products with subtle futurist accents.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 text-sm text-charcoal/70">
              Each system is engineered to reduce ambiguity, emphasize decision-ready
              data, and sustain a calm, premium tone.
            </div>
          </div>

          <div className="mt-10 grid grid-cols-12 gap-6">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`card col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(90,107,140,0.12)] ${
                  index === 1 ? "lg:translate-y-4" : ""
                }`}
              >
                <h3 className="text-xl font-medium tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-widest text-bluegray/60">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="research" className="section-pad bg-charcoal text-offwhite">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-5">
              <p className="eyebrow text-offwhite/70">Research</p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight">
                Subtle futurism, grounded in evidence.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 text-offwhite/70">
              <p className="leading-relaxed">
                I explore interaction patterns that make complex model behavior legible.
                The focus is on cognitive calm, measurable outcomes, and a restrained
                visual language.
              </p>
              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl border border-offwhite/20 px-5 py-4">
                  <p className="text-sm uppercase tracking-widest text-offwhite/60">
                    Current exploration
                  </p>
                  <p className="mt-3 text-lg">
                    Context layering for high-stakes model review sessions.
                  </p>
                </div>
                <div className="rounded-2xl border border-offwhite/20 px-5 py-4">
                  <p className="text-sm uppercase tracking-widest text-offwhite/60">
                    Lab partnership
                  </p>
                  <p className="mt-3 text-lg">
                    Co-designing evaluation tools with multidisciplinary research teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="notes" className="section-pad">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-4">
              <p className="eyebrow">Notes</p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight">
                Writing on structure, calm, and AI systems.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="grid gap-6">
                {notes.map((note) => (
                  <article key={note.title} className="card rounded-2xl p-6">
                    <div className="flex items-center justify-between text-xs uppercase tracking-widest text-bluegray/60">
                      <span>{note.date}</span>
                      <span>Essay</span>
                    </div>
                    <h3 className="mt-4 text-xl font-medium tracking-tight">
                      {note.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                      {note.summary}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad bg-white">
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 lg:col-span-7">
              <p className="eyebrow">Contact</p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight">
                Quiet innovation starts with a disciplined brief.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-charcoal/70">
                If your team needs a restrained, high-clarity interface for advanced
                AI systems, I would love to collaborate.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="rounded-2xl border border-charcoal/10 px-6 py-8">
                <p className="text-sm uppercase tracking-widest text-bluegray/60">
                  Availability
                </p>
                <p className="mt-4 text-lg">
                  Open for select research and product engagements.
                </p>
                <div className="mt-6">
                  <a className="ghost-button" href="mailto:hello@quietgrid.ai">
                    hello@quietgrid.ai
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="section-pad pt-8">
        <div className="flex flex-col items-start justify-between gap-4 border-t border-charcoal/10 pt-8 text-xs uppercase tracking-widest text-bluegray/60 md:flex-row">
          <span>Quiet Grid Studio</span>
          <span>Crafted with restraint and intent</span>
        </div>
      </footer>
    </div>
  );
}

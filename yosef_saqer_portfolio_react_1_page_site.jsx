import React from "react";

export default function PortfolioSite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header / Hero */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight text-lg">Yosef Saqer</a>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#journey" className="hover:underline">My Journey</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#future" className="hover:underline">Future Work</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="top" className="mx-auto max-w-5xl px-4 py-14">
        <div className="grid gap-6 md:grid-cols-3 items-center">
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Data & Economics Portfolio
            </h1>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Economics & Management graduate (GPA 91.38) focused on applied analytics, market
              research and decision support. I work end‑to‑end: collecting, cleaning and analyzing
              data, building dashboards, and translating results into business actions.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <a
                className="inline-flex items-center rounded-full border px-4 py-2 hover:bg-gray-50"
                href="mailto:yosefsaqer094@gmail.com"
                target="_blank" rel="noreferrer"
              >📧 yosefsaqer094@gmail.com</a>
              <a
                className="inline-flex items-center rounded-full border px-4 py-2 hover:bg-gray-50"
                href="tel:+972528452264"
              >📱 052‑8452264</a>
              <a
                className="inline-flex items-center rounded-full border px-4 py-2 hover:bg-gray-50"
                href="https://www.linkedin.com/in/yosef-saqer-b8a81820a/"
                target="_blank" rel="noreferrer"
              >🌐 LinkedIn</a>
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="rounded-2xl border p-4">
              <h2 className="font-semibold">At a glance</h2>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                <li>🎓 B.A. Economics & Management — Data Analysis</li>
                <li>📈 Tools: SQL, Python, R, Power BI, Excel</li>
                <li>🌍 Languages: Arabic, English, Hebrew</li>
              </ul>
              <div className="mt-3 text-sm">
                <a className="underline" href="#education">See education & certificates ↓</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-4 py-10 border-t">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          I had a challenging end to high school and didn’t initially qualify for STEM programs. I
          chose to retake several <em>Bagrut</em> exams, improved my results, and achieved a
          psychometric score of <strong>620</strong>. That opened the door to a B.A. in Economics &
          Management and to a new passion: <strong>data analysis</strong>. After three years of hard
          work, I graduated with a <strong>GPA of 91.38</strong> and I’m ready for my first role in
          a professional analytics team.
        </p>
      </section>

      {/* Journey / Education */}
      <section id="journey" className="mx-auto max-w-5xl px-4 py-10 border-t">
        <h2 className="text-2xl font-bold">My Journey</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold">Education</h3>
            <p className="mt-2 text-sm text-gray-700">
              <strong>B.A. in Economics & Management – Data Analysis Specialization</strong><br/>
              Emek Yezreel Academic College · GPA 91.38 · 2025
            </p>
            <ul className="mt-3 text-sm list-disc list-inside text-gray-700">
              <li>Econometrics, Business Data Analysis, AI Applications, Advanced Data Processing</li>
            </ul>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <a className="underline" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1b995Qld812DCLfj3h09x4XI6_Gj-LJSU/view?usp=sharing">Degree Certificate</a>
              <span>•</span>
              <a className="underline" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1sIny9me07BWHNJfEifdeRZlrxtI2-_3Y/view?usp=sharing">Grades Transcript</a>
            </div>
          </div>
          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold">What I’m aiming for</h3>
            <p className="mt-2 text-sm text-gray-700">
              Join a data/economics team to build analytical products that drive strategy. In 5 years:
              <strong> Senior Data Analyst</strong> leading projects across BI, forecasting and
              market analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-5xl px-4 py-10 border-t">
        <h2 className="text-2xl font-bold">Core Skills</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold">Data Tools</h3>
            <ul className="mt-2 text-sm text-gray-700 space-y-1">
              <li>SQL</li>
              <li>Python (Pandas, NumPy)</li>
              <li>R</li>
              <li>Power BI</li>
              <li>Excel (Pivot, Power Query, VBA)</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold">Analysis</h3>
            <ul className="mt-2 text-sm text-gray-700 space-y-1">
              <li>Data cleaning & preprocessing</li>
              <li>Statistical & econometric modeling</li>
              <li>Hypothesis testing</li>
              <li>Dashboarding & KPI design</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold">Business & Economics</h3>
            <ul className="mt-2 text-sm text-gray-700 space-y-1">
              <li>Market research & forecasting</li>
              <li>Business intelligence & decision support</li>
              <li>Event Study analysis</li>
              <li>Cash‑flow & planning (iFunds internship)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-5xl px-4 py-10 border-t">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border p-5">
            <h3 className="font-semibold">Financial Resilience During COVID‑19</h3>
            <p className="mt-2 text-sm text-gray-700">
              Designed a 226‑respondent survey; built composite indices for financial literacy and
              resilience; ran T‑tests, correlations and linear regressions in R to identify drivers of
              household stability. Proposed policy combining government support with financial
              education.
            </p>
            <a className="mt-2 inline-block underline text-sm" target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1tMCFALoSo5yEG9JS82Cq9Vf0p5N3QemO/edit?usp=sharing">View Full Project</a>
          </article>

          <article className="rounded-2xl border p-5">
            <h3 className="font-semibold">Event Study: Tech Announcements & Stock Returns</h3>
            <p className="mt-2 text-sm text-gray-700">
              Curated 100+ launch events; analyzed 330 trading days per company; computed AR/CAAR and
              validated with Wilcoxon, G‑Sign and T‑tests. Observed gradual negative CAAR suggesting
              info leakage or slow adjustment.
            </p>
            <a className="mt-2 inline-block underline text-sm" target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1VVYYli_avW5TKHxlMdnnEm6-HEDELelR/edit?usp=sharing">View Full Project</a>
          </article>

          <article className="rounded-2xl border p-5 md:col-span-2">
            <h3 className="font-semibold">Internship — iFunds Small Business Consulting (2024)</h3>
            <p className="mt-2 text-sm text-gray-700">
              Reviewed SME loan eligibility, prepared business plans and performed cash‑flow analysis
              to support strategic decisions; delivered recommendations that improved financial
              planning and resource allocation.
            </p>
          </article>
        </div>
      </section>

      {/* Future Work */}
      <section id="future" className="mx-auto max-w-5xl px-4 py-10 border-t">
        <h2 className="text-2xl font-bold">Future Work</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border p-5">
            <h3 className="font-semibold">Superstore Customer Analysis Dashboard (Power BI)</h3>
            <p className="mt-2 text-sm text-gray-700">
              End‑to‑end BI project: ingest public Superstore dataset, model data in Power Query,
              design semantic model, build segmentation and retention KPIs, and publish an interactive
              dashboard with business recommendations.
            </p>
          </article>
          <article className="rounded-2xl border p-5">
            <h3 className="font-semibold">TBD — Add Your Next Idea</h3>
            <p className="mt-2 text-sm text-gray-700">
              Placeholder for a forecasting model, econometric policy simulation, or real‑time
              analytics pipeline. We’ll fill this once you pick the theme.
            </p>
          </article>
        </div>
      </section>

      {/* Contact / Links */}
      <section id="contact" className="mx-auto max-w-5xl px-4 py-12 border-t">
        <h2 className="text-2xl font-bold">Links & Contact</h2>
        <ul className="mt-3 text-sm text-gray-700 space-y-2">
          <li>🌐 <a className="underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yosef-saqer-b8a81820a/">LinkedIn Profile</a></li>
          <li>🎓 <a className="underline" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1b995Qld812DCLfj3h09x4XI6_Gj-LJSU/view?usp=sharing">Degree Certificate</a></li>
          <li>📊 <a className="underline" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1sIny9me07BWHNJfEifdeRZlrxtI2-_3Y/view?usp=sharing">Grades Transcript</a></li>
          <li>📑 <a className="underline" target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1tMCFALoSo5yEG9JS82Cq9Vf0p5N3QemO/edit?usp=sharing">COVID‑19 Research Project</a></li>
          <li>📑 <a className="underline" target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1VVYYli_avW5TKHxlMdnnEm6-HEDELelR/edit?usp=sharing">Event Study Research Project</a></li>
        </ul>
        <p className="mt-6 text-sm text-gray-600">© {new Date().getFullYear()} Yosef Saqer</p>
      </section>
    </div>
  );
}

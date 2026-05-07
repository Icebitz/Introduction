import Image from "next/image";

import { CountUpStat } from "./components/CountUpStat";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Viktor Lin home">
          <span className="brand-mark">VL</span>
          <span>Viktor Lin</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#project-history">History</a>
          <a href="#skills">Skills</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-band">
          <div className="hero-copy">
            <p className="eyebrow">Senior Software Engineer</p>
            <h1 className="hero-name">Viktor Lin</h1>
            <h2>Building scalable AI and full-stack products for modern teams.</h2>
            <p className="hero-text">
              7+ years designing and shipping production-grade web applications, AI platforms, and
              data systems with React, Next.js, Python, Node.js, LLM integration, and cloud-native
              architectures.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href="mailto:olaf3915@gmail.com">
                Contact Viktor
              </a>
              <a className="button secondary" href="#project-history">
                Explore Projects
              </a>
              <a className="button secondary" href="/Viktor_Lin.pdf" download="Viktor_Lin_Resume.pdf">
                Download resume
              </a>
            </div>
            <div className="hero-highlights">
              <span>20-40% system performance improvements</span>
              <span>40+ successful production deployments</span>
              <span>Up to 70% workflow automation gains</span>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Professional snapshot">
            <Image
              className="hero-image"
              src="/images/hero-workspace.jpg"
              alt="Modern software engineering workspace with code screens"
              width={1200}
              height={800}
              priority
            />
            <div className="hero-panel-body">
              <div className="availability">
                <span className="status-dot"></span>
                Prague, Czech Republic · Full Remote
              </div>
              <div className="metric-grid">
                <div>
                  <CountUpStat end={7} suffix="+" />
                  <span>Years engineering</span>
                </div>
                <div>
                  <CountUpStat end={40} suffix="+" delayMs={110} />
                  <span>Production deployments</span>
                </div>
                <div>
                  <CountUpStat end={70} suffix="%" delayMs={220} />
                  <span>Workflow efficiency gains</span>
                </div>
                <div>
                  <CountUpStat end={40} suffix="%" delayMs={330} />
                  <span>System performance gains</span>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="summary section-band">
          <div className="summary-layout">
            <p className="section-label">Profile</p>
            <h2>Engineering across product, frontend, backend, and AI infrastructure.</h2>
            <p>
              Strong background in system architecture, performance optimization, API development,
              and scalable cloud deployments. Focused on delivering measurable outcomes in
              reliability, efficiency, and product velocity.
            </p>
            <div className="focus-pills" aria-label="Focus areas">
              <span>Product Engineering</span>
              <span>AI Integration</span>
              <span>RAG Systems</span>
              <span>Data Pipelines</span>
              <span>System Design</span>
              <span>Performance Optimization</span>
            </div>
          </div>
        </section>

        <section className="section-band" id="work">
          <div className="section-heading">
            <p className="section-label">Professional Experience</p>
            <h2>Roles and impact across 7+ years</h2>
          </div>
          <div className="timeline">
            <article className="role">
              <div className="role-meta">
                <span className="role-icon role-icon--ai-stack" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 17.65l-9.17 4.17a2 2 0 0 1-1.66 0L2 17.65M22 12.65l-9.17 4.17a2 2 0 0 1-1.66 0L2 12.65"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>Sep 2023 - Present</span>
                <span>Hong Kong · Remote</span>
              </div>
              <div className="role-body">
                <h3>Senior Software Engineer (AI & Full Stack)</h3>
                <p className="company">Hong Kong Branch of Digital Heroes</p>
                <ul>
                  <li>
                    Architected full-stack applications with integrated AI, improving performance by
                    20-40% and increasing engagement.
                  </li>
                  <li>Designed backend APIs and pipelines supporting 40+ production deployments.</li>
                  <li>
                    Implemented LLM-based automation and decision-support features to improve
                    internal operations.
                  </li>
                  <li>
                    Delivered 5-12 production solutions with cross-functional teams, reducing
                    delivery timelines by 15-30%.
                  </li>
                </ul>
              </div>
            </article>

            <article className="role">
              <div className="role-meta">
                <span className="role-icon role-icon--data" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M3 3v18h18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m7 13 4-4 4 6 6-10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>Feb 2022 - Aug 2023</span>
                <span>Kyiv, Ukraine</span>
              </div>
              <div className="role-body">
                <h3>AI & Data Engineer</h3>
                <p className="company">DataArt</p>
                <ul>
                  <li>Built end-to-end ML pipelines, improving processing efficiency by 35-60%.</li>
                  <li>
                    Integrated enterprise LLM workflows that improved business efficiency by up to
                    70%.
                  </li>
                  <li>
                    Developed robust data workflows for training, inference, and analytics pipelines.
                  </li>
                  <li>
                    Optimized scalable processing architecture, improving platform performance by
                    25-50%.
                  </li>
                </ul>
              </div>
            </article>

            <article className="role">
              <div className="role-meta">
                <span className="role-icon role-icon--frontend" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path
                      d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>Apr 2019 - Jan 2022</span>
                <span>Postbauer-Heng, Germany</span>
              </div>
              <div className="role-body">
                <h3>Frontend Engineer</h3>
                <p className="company">Digital Heroes</p>
                <ul>
                  <li>Built high-performance apps with React, Next.js, and TypeScript.</li>
                  <li>Integrated backend APIs and dynamic features into responsive interfaces.</li>
                  <li>Improved usability, page speed, and frontend maintainability at scale.</li>
                  <li>Contributed to architecture decisions that improved long-term scalability.</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="summary section-band">
          <div className="section-label">Delivery Scope</div>
          <div className="stats-ribbon">
            <article>
              <CountUpStat end={7} suffix="+" />
              <span>Years of engineering experience</span>
            </article>
            <article>
              <CountUpStat end={40} suffix="+" delayMs={120} />
              <span>Production deployments</span>
            </article>
            <article>
              <CountUpStat end={70} suffix="%" delayMs={240} />
              <span>Workflow efficiency improvement</span>
            </article>
            <article>
              <CountUpStat end={50} suffix="%" delayMs={360} />
              <span>Platform performance gains</span>
            </article>
          </div>
        </section>

        <section className="section-band projects" id="projects">
          <div className="section-heading">
            <p className="section-label">Selected Work</p>
            <h2>Modern software systems delivered in production</h2>
          </div>
          <div className="project-grid">
            <article className="project-card accent-green">
              <div className="project-icon">AI</div>
              <h3>LLM Automation Platform</h3>
              <p>Prompt orchestration, API workflows, and human-in-the-loop approval pipelines.</p>
              <span>LLM Integration · Python · Node.js</span>
            </article>
            <article className="project-card accent-blue">
              <div className="project-icon">RAG</div>
              <h3>Enterprise Knowledge Systems</h3>
              <p>Retrieval-augmented applications for secure, fast enterprise knowledge access.</p>
              <span>RAG · FastAPI · PostgreSQL</span>
            </article>
            <article className="project-card accent-rust">
              <div className="project-icon">ETL</div>
              <h3>Data & ML Pipelines</h3>
              <p>End-to-end pipelines for ETL, model training, inference, and analytics.</p>
              <span>PyTorch · Databricks · GCP</span>
            </article>
          </div>
        </section>

        <section className="section-band project-history" id="project-history">
          <div className="section-heading">
            <p className="section-label">Project History</p>
            <h2>Worked projects with visual previews</h2>
          </div>
          <div className="history-list">
            <article className="history-card">
              <Image
                src="/images/project-llm-dashboard.jpg"
                alt="Preview of LLM automation platform dashboard"
                width={1400}
                height={788}
              />
              <div className="history-content">
                <div className="history-meta">
                  <span>2024 - Present</span>
                  <span>AI Platform</span>
                </div>
                <h3>LLM Workflow Orchestration Platform</h3>
                <p>LLM orchestration product connecting agents, APIs, and approval workflows.</p>
                <ul>
                  <li>Reduced manual effort and response latency across operations teams.</li>
                  <li>Introduced modular services for faster releases and safer iterations.</li>
                </ul>
              </div>
            </article>

            <article className="history-card">
              <Image
                src="/images/project-code-terminal.jpg"
                alt="Preview of enterprise knowledge retrieval portal"
                width={1400}
                height={933}
              />
              <div className="history-content">
                <div className="history-meta">
                  <span>2023 - 2024</span>
                  <span>Enterprise Search</span>
                </div>
                <h3>Enterprise RAG Knowledge Portal</h3>
                <p>Secure internal portal for enterprise retrieval and document intelligence.</p>
                <ul>
                  <li>Connected internal docs, tickets, and structured sources into one UX.</li>
                  <li>Improved retrieval quality and answer confidence with tuned indexing.</li>
                </ul>
              </div>
            </article>

            <article className="history-card">
              <Image
                src="/images/project-cloud-data.jpg"
                alt="Preview of machine learning data platform"
                width={1400}
                height={931}
              />
              <div className="history-content">
                <div className="history-meta">
                  <span>2022 - 2023</span>
                  <span>Data Engineering</span>
                </div>
                <h3>Data + ML Pipeline Platform</h3>
                <p>End-to-end training, inference, and analytics workflows for ML delivery.</p>
                <ul>
                  <li>Increased processing efficiency by 35-60% through pipeline redesign.</li>
                  <li>Added reliability checks and scalable orchestration for production use.</li>
                </ul>
              </div>
            </article>

            <article className="history-card">
              <Image
                src="/images/project-laptop-code.jpg"
                alt="Preview of frontend platform architecture"
                width={1400}
                height={933}
              />
              <div className="history-content">
                <div className="history-meta">
                  <span>2019 - 2022</span>
                  <span>Frontend Platform</span>
                </div>
                <h3>High-Performance Web Application Suite</h3>
                <p>React and Next.js product interfaces with modular frontend architecture.</p>
                <ul>
                  <li>Improved UX and page performance on complex, data-heavy web platforms.</li>
                  <li>Strengthened maintainability with reusable patterns and typed components.</li>
                </ul>
              </div>
            </article>

            <article className="history-card">
              <Image
                src="/images/project-laptop-desk.jpg"
                alt="Preview of cloud deployment and API architecture"
                width={1400}
                height={1050}
              />
              <div className="history-content">
                <div className="history-meta">
                  <span>Cross-role</span>
                  <span>Cloud & APIs</span>
                </div>
                <h3>Cloud-Native API and Service Architecture</h3>
                <p>Backend services and deployment architecture built for scale and reliability.</p>
                <ul>
                  <li>Designed modular APIs and service boundaries for faster feature delivery.</li>
                  <li>Improved maintainability through observability and cleaner release flows.</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="section-band skills" id="skills">
          <div className="section-heading">
            <p className="section-label">Core Skills</p>
            <h2>Practical tools for production delivery</h2>
          </div>
          <div className="skill-matrix" aria-label="Skills by category">
            <div className="skill-category">
              <h3 className="skill-category-label">Languages</h3>
              <ul className="skill-capsules">
                <li><span className="skill-capsule">Python</span></li>
                <li><span className="skill-capsule">JavaScript</span></li>
                <li><span className="skill-capsule">TypeScript</span></li>
                <li><span className="skill-capsule">SQL</span></li>
              </ul>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-label">Frontend</h3>
              <ul className="skill-capsules">
                <li><span className="skill-capsule">React</span></li>
                <li><span className="skill-capsule">Next.js</span></li>
                <li><span className="skill-capsule">Vue.js</span></li>
                <li><span className="skill-capsule">Responsive UI</span></li>
              </ul>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-label">Backend</h3>
              <ul className="skill-capsules">
                <li><span className="skill-capsule">Node.js</span></li>
                <li><span className="skill-capsule">Express</span></li>
                <li><span className="skill-capsule">Django</span></li>
                <li><span className="skill-capsule">FastAPI</span></li>
                <li><span className="skill-capsule">Flask</span></li>
                <li><span className="skill-capsule">REST APIs</span></li>
              </ul>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-label">AI / ML</h3>
              <ul className="skill-capsules">
                <li><span className="skill-capsule">LLM integration</span></li>
                <li><span className="skill-capsule">Prompt engineering</span></li>
                <li><span className="skill-capsule">RAG</span></li>
                <li><span className="skill-capsule">LangGraph</span></li>
                <li><span className="skill-capsule">PyTorch</span></li>
              </ul>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-label">Data engineering</h3>
              <ul className="skill-capsules">
                <li><span className="skill-capsule">ETL pipelines</span></li>
                <li><span className="skill-capsule">Model training</span></li>
                <li><span className="skill-capsule">Analytics pipelines</span></li>
              </ul>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-label">Cloud & DevOps</h3>
              <ul className="skill-capsules">
                <li><span className="skill-capsule">GCP</span></li>
                <li><span className="skill-capsule">Databricks</span></li>
                <li><span className="skill-capsule">CI/CD</span></li>
                <li><span className="skill-capsule">Git</span></li>
                <li><span className="skill-capsule">Cloud architecture</span></li>
              </ul>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-label">Databases</h3>
              <ul className="skill-capsules">
                <li><span className="skill-capsule">PostgreSQL</span></li>
                <li><span className="skill-capsule">MongoDB</span></li>
                <li><span className="skill-capsule">MySQL</span></li>
              </ul>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-label">Blockchain</h3>
              <ul className="skill-capsules">
                <li><span className="skill-capsule">Ethereum</span></li>
                <li><span className="skill-capsule">Web3.js</span></li>
                <li><span className="skill-capsule">Smart contracts</span></li>
                <li><span className="skill-capsule">NFT</span></li>
                <li><span className="skill-capsule">DeFi</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-band education" id="education">
          <div className="section-heading">
            <p className="section-label"></p>
            <h2>Academic foundation and continuous learning</h2>
          </div>
          <div className="education-board">
            <div className="education-board__col">
              <p className="education-board__title">Education</p>
              <div className="education-board__cards">
                <article className="education-card education-card--plain">
                  <span>2013 - 2017</span>
                  <h3>Bachelor of Science in Computer Science</h3>
                  <p>
                    National Technical University of Ukraine &apos;Igor Sikorsky Kyiv Polytechnic
                    Institute&apos;
                  </p>
                </article>
              </div>
            </div>
            <div className="education-board__col">
              <p className="education-board__title">Qualifications</p>
              <div className="education-board__cards education-board__cards--qualifications">
                <article className="education-card">
                  <div className="education-card__media">
                    <Image
                      className="education-card__image"
                      src="/images/education-analytics.jpg"
                      alt="Data dashboards and charts representing data science and AI practice coursework"
                      fill
                      sizes="(max-width: 680px) 100vw, (max-width: 920px) 100vw, 45vw"
                    />
                  </div>
                  <div className="education-card__body">
                    <span>2021</span>
                    <h3>Data Science and AI in Practice</h3>
                    <p>Udemy — Applied ML, data pipelines, and enterprise AI integration.</p>
                  </div>
                </article>
                <article className="education-card">
                  <div className="education-card__media">
                    <Image
                      className="education-card__image"
                      src="/images/education-developer.jpg"
                      alt="Full stack web development on a laptop workspace"
                      fill
                      sizes="(max-width: 680px) 100vw, (max-width: 920px) 100vw, 45vw"
                    />
                  </div>
                  <div className="education-card__body">
                    <span>2018</span>
                    <h3>Full Stack Web Development</h3>
                    <p>freeCodeCamp — Scalable frontend and backend development practices.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section-band resume-cta" id="resume" aria-labelledby="resume-heading">
          <div className="resume-cta-inner">
            <div className="resume-cta-copy">
              <p className="section-label">Resume</p>
              <h2 id="resume-heading">Download my CV</h2>
              <p className="hero-text">
                PDF overview of experience, impact metrics, and technical skills. Same file as shared
                with hiring teams.
              </p>
            </div>
            <div className="resume-cta-actions">
              <a className="button primary" href="/Viktor_Lin.pdf" download="Viktor_Lin_Resume.pdf">
                Download PDF
              </a>
              <a className="resume-open" href="/Viktor_Lin.pdf" target="_blank" rel="noreferrer">
                Open in new tab
              </a>
            </div>
          </div>
        </section>

        <section className="contact section-band" id="contact">
          <div className="contact-intro">
            <p className="section-label">Contact</p>
            <h2>Build scalable AI and full-stack systems with Viktor.</h2>
            <p className="contact-details">
              <span>Viktor Lin</span>
              <span aria-hidden="true"> · </span>
              <span>Prague, Czech Republic</span>
              <span aria-hidden="true"> · </span>
              <span>Full remote</span>
            </p>
          </div>
          <div className="contact-methods">
            <p className="contact-methods-heading">Contact methods</p>
            <ul className="contact-links">
              <li>
                <a
                  className="contact-tile contact-tile--accent"
                  href="/Viktor_Lin.pdf"
                  download="Viktor_Lin_Resume.pdf"
                  aria-label="Download resume PDF, Viktor Lin"
                >
                  <span className="contact-tile__iconWrap" aria-hidden="true">
                    <svg
                      className="contact-tile__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 5v11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="m8 12 4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 19h16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                <span className="contact-tile__copy">
                  <span className="contact-tile__label">Resume</span>
                  <span className="contact-tile__detail">Viktor_Lin_Resume.pdf</span>
                </span>
                </a>
              </li>
              <li>
                <a
                  className="contact-tile contact-tile--surface"
                  href="mailto:olaf3915@gmail.com"
                aria-label="Email Viktor at olaf3915@gmail.com"
              >
                <span className="contact-tile__iconWrap contact-tile__iconWrap--surface" aria-hidden="true">
                  <svg className="contact-tile__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M4 7l8 5 8-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="contact-tile__copy">
                  <span className="contact-tile__label">Email</span>
                  <span className="contact-tile__detail">olaf3915@gmail.com</span>
                </span>
                </a>
              </li>
              <li>
                <a
                  className="contact-tile contact-tile--surface"
                  href="https://t.me/icebit_94"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Telegram, username icebit 94"
              >
                <span className="contact-tile__iconWrap contact-tile__iconWrap--telegram" aria-hidden="true">
                  <svg className="contact-tile__icon contact-tile__icon--brand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z"
                    />
                  </svg>
                </span>
                <span className="contact-tile__copy">
                  <span className="contact-tile__label">Telegram</span>
                  <span className="contact-tile__detail">@icebit_94</span>
                </span>
                </a>
              </li>
              <li>
                <a
                  className="contact-tile contact-tile--surface"
                  href="discord://-/users/ice39bit15"
                aria-label="Discord username ice39bit15"
              >
                <span className="contact-tile__iconWrap contact-tile__iconWrap--discord" aria-hidden="true">
                  <svg className="contact-tile__icon contact-tile__icon--brand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 199" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046c-19.692-2.961-39.203-2.961-58.533 0c-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632a108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237a136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848c21.142-6.58 42.646-16.637 64.815-33.213c5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2c.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2c0 14.375-10.148 26.18-23.015 26.18Z"
                    />
                  </svg>
                </span>
                <span className="contact-tile__copy">
                  <span className="contact-tile__label">Discord</span>
                  <span className="contact-tile__detail">ice39bit15</span>
                </span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Viktor Lin</span>
        <span>Prague, Czech Republic</span>
      </footer>
    </>
  );
}

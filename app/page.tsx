import Image from "next/image";

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
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-band">
          <div className="hero-copy">
            <p className="eyebrow">Senior Software Engineer</p>
            <h1>Viktor Lin</h1>
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
            </div>
            <div className="hero-highlights">
              <span>20-40% system performance improvements</span>
              <span>15+ successful production deployments</span>
              <span>Up to 70% workflow automation gains</span>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Professional snapshot">
            <Image
              className="hero-image"
              src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80"
              alt="Modern software engineering workspace with code screens"
              width={1200}
              height={720}
              priority
            />
            <div className="hero-panel-body">
              <div className="availability">
                <span className="status-dot"></span>
                Prague, Czech Republic · Full Remote
              </div>
              <div className="metric-grid">
                <div>
                  <strong>7+</strong>
                  <span>Years engineering</span>
                </div>
                <div>
                  <strong>40+</strong>
                  <span>Production deployments</span>
                </div>
                <div>
                  <strong>70%</strong>
                  <span>Workflow efficiency gains</span>
                </div>
                <div>
                  <strong>40%</strong>
                  <span>System performance gains</span>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="summary section-band">
          <div className="section-label">Profile</div>
          <div className="summary-grid">
            <h2>Engineering across product, frontend, backend, and AI infrastructure.</h2>
            <p>
              Strong background in system architecture, performance optimization, API development,
              and scalable cloud deployments. Focused on delivering measurable outcomes in
              reliability, efficiency, and product velocity.
            </p>
          </div>
          <div className="focus-pills" aria-label="Focus areas">
            <span>Product Engineering</span>
            <span>AI Integration</span>
            <span>RAG Systems</span>
            <span>Data Pipelines</span>
            <span>System Design</span>
            <span>Performance Optimization</span>
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
                  <li>Designed backend APIs and pipelines supporting 15+ production deployments.</li>
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
              <strong>7+</strong>
              <span>Years of engineering experience</span>
            </article>
            <article>
              <strong>15+</strong>
              <span>Production deployments</span>
            </article>
            <article>
              <strong>70%</strong>
              <span>Workflow efficiency improvement</span>
            </article>
            <article>
              <strong>50%</strong>
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
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80"
                alt="Preview of LLM automation platform dashboard"
                width={1400}
                height={900}
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
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1400&q=80"
                alt="Preview of enterprise knowledge retrieval portal"
                width={1400}
                height={900}
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
                src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?auto=format&fit=crop&w=1400&q=80"
                alt="Preview of machine learning data platform"
                width={1400}
                height={900}
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
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80"
                alt="Preview of frontend platform architecture"
                width={1400}
                height={900}
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
                src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1400&q=80"
                alt="Preview of cloud deployment and API architecture"
                width={1400}
                height={900}
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
          <div className="skill-groups">
            <article>
              <h3>Languages</h3>
              <p>Python, JavaScript, TypeScript, SQL</p>
            </article>
            <article>
              <h3>Frontend</h3>
              <p>React, Next.js, Vue.js, responsive UI systems</p>
            </article>
            <article>
              <h3>Backend</h3>
              <p>Node.js, Express, Django, FastAPI, Flask, REST APIs</p>
            </article>
            <article>
              <h3>AI / ML</h3>
              <p>LLM integration, prompt engineering, RAG, LangGraph, PyTorch</p>
            </article>
            <article>
              <h3>Data Engineering</h3>
              <p>ETL pipelines, model training workflows, analytics pipelines</p>
            </article>
            <article>
              <h3>Cloud & DevOps</h3>
              <p>GCP, Databricks, CI/CD, Git, scalable cloud deployments</p>
            </article>
            <article>
              <h3>Databases</h3>
              <p>PostgreSQL, MongoDB, MySQL</p>
            </article>
            <article>
              <h3>Blockchain</h3>
              <p>Ethereum, Web3.js, smart contracts, NFT, DeFi</p>
            </article>
          </div>
        </section>

        <section className="section-band education">
          <div className="section-heading">
            <p className="section-label">Education & Qualifications</p>
            <h2>Academic foundation and continuous learning</h2>
          </div>
          <div className="education-list">
            <article>
              <span>2013 - 2017</span>
              <h3>Bachelor of Science in Computer Science</h3>
              <p>National Technical University of Ukraine &apos;Igor Sikorsky Kyiv Polytechnic Institute&apos;</p>
            </article>
            <article>
              <span>2021</span>
              <h3>Data Science and AI in Practice</h3>
              <p>Udemy - Applied ML, data pipelines, and enterprise AI integration.</p>
            </article>
            <article>
              <span>2018</span>
              <h3>Full Stack Web Development</h3>
              <p>freeCodeCamp - Scalable frontend and backend development practices.</p>
            </article>
          </div>
        </section>

        <section className="contact section-band" id="contact">
          <div>
            <p className="section-label">Contact</p>
            <h2>Build scalable AI and full-stack systems with Viktor.</h2>
          </div>
          <div className="contact-links">
            <a className="contact-link" href="mailto:olaf3915@gmail.com">
              Email: olaf3915@gmail.com
            </a>
            <a
              className="contact-link contact-link-secondary"
              href="https://t.me/icebit_94"
              target="_blank"
              rel="noreferrer noopener"
            >
              Telegram
            </a>
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

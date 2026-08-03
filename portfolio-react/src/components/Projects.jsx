import { figmaPreview, websiteScreenshots, posters, leadershipContent } from '../data/portfolioData';

const FigmaLogo = () => (
  <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6Z" fill="#F24E1E" />
    <path d="M24 6C24 9.31371 21.3137 12 18 12C14.6863 12 12 9.31371 12 6C12 2.68629 14.6863 0 18 0C21.3137 0 24 2.68629 24 6Z" fill="#FF7262" />
    <path d="M12 18C12 21.3137 9.31371 24 6 24C2.68629 24 0 21.3137 0 18C0 14.6863 2.68629 12 6 12C9.31371 12 12 14.6863 12 18Z" fill="#A259FF" />
    <path d="M12 18C12 14.6863 14.6863 12 18 12C21.3137 12 24 14.6863 24 18C24 21.3137 21.3137 24 18 24C14.6863 24 12 21.3137 12 18Z" fill="#1ABCFE" />
    <path d="M0 30C0 26.6863 2.68629 24 6 24C9.31371 24 12 26.6863 12 30C12 33.3137 9.31371 36 6 36C2.68629 36 0 33.3137 0 30Z" fill="#0AC17E" />
  </svg>
);

export default function Projects({ onOpenModal }) {
  return (
    <div className="projbg" id="projects">
      <div className="projin">
        <p className="slbl">Things I've built</p>
        <h2 className="stitle">Projects &amp; highlights</h2>
        <p className="sdesc">Real projects, real outcomes — Figma designs, websites, graphic work, and more.</p>
        <div className="pgrid">

          {/* FIGMA / H&M DELIGHT — spans 2 cols */}
          <div className="pcard fcard rv" style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ flex: 1, minWidth: 220 }}>
                <div className="pnum"><FigmaLogo /></div>
                <h3>H&amp;M's Delight — Figma Design</h3>
                <p>
                  Full UI/UX design for H&amp;M's Delight restaurant — a complete multi-page Figma
                  project covering homepage, menu, team, location, and contact. Click any
                  screenshot to zoom, or open the full Figma file.
                </p>
                <a
                  href="https://www.figma.com/design/0vahk3PzKwub1a9vgRwvWi/first-project?node-id=0-1&t=PoLri67gIK37yKC5-1"
                  target="_blank" rel="noreferrer" className="fbtn"
                >
                  Open in Figma →
                </a>
              </div>
              <div className="fprev" id="fprev">
                {figmaPreview.map((item) => (
                  <img
                    key={item.title}
                    src={item.src}
                    title={item.title}
                    onClick={() => onOpenModal(item.src, item.title, "H&M's Delight — Figma Design Project")}
                  />
                ))}
              </div>
            </div>
            <div className="ptags">
              <span className="tag" style={{ background: 'rgba(255,255,255,.12)', color: '#CFC3B0' }}>Figma</span>
              <span className="tag" style={{ background: 'rgba(255,255,255,.12)', color: '#CFC3B0' }}>UI/UX</span>
              <span className="tag" style={{ background: 'rgba(255,255,255,.12)', color: '#CFC3B0' }}>Restaurant Design</span>
            </div>
          </div>

          {/* RESTAURANT WEBSITE */}
          <div className="pcard rv" style={{ gridColumn: 'span 2' }}>
            <div className="pnum">01</div>
            <h3>H&amp;M's Delight — Live Website</h3>
            <p>
              Full multi-page restaurant website — homepage, menu, team section, location
              with map, and contact form. Built as a complete real-world project. Click
              screenshots to zoom.
            </p>
            <div className="scgrid" id="scgrid">
              {websiteScreenshots.map((item) => (
                <img
                  key={item.title}
                  src={item.src}
                  onClick={() => onOpenModal(item.src, `H&M's Delight — ${item.title}`, 'Restaurant website project')}
                />
              ))}
            </div>
            <div className="ptags">
              <span className="tag">HTML</span><span className="tag">CSS</span>
              <span className="tag">JavaScript</span><span className="tag">Responsive</span>
            </div>
          </div>

          {/* GRAPHIC DESIGN */}
          <div className="pcard rv">
            <div className="pnum">02</div>
            <h3>Graphic Design — Posters</h3>
            <p>Professional promotional posters designed using Adobe Illustrator and Canva. Click to zoom.</p>
            <div className="pgrid2" id="pgrid2">
              {posters.map((item) => (
                <img key={item.title} src={item.src} onClick={() => onOpenModal(item.src, item.title, 'Graphic design project')} />
              ))}
            </div>
            <div className="ptags"><span className="tag">Adobe Illustrator</span><span className="tag">Canva</span></div>
          </div>

          {/* LEADERSHIP CONTENT */}
          <div className="pcard rv">
            <div className="pnum">03</div>
            <h3>Leadership Content — AUCIS</h3>
            <p>Social media content on leadership traits and community growth for AUCIS society events.</p>
            <div className="lgrid" id="lgrid">
              {leadershipContent.map((item) => (
                <img key={item.title} src={item.src} onClick={() => onOpenModal(item.src, item.title, 'AUCIS social media content')} />
              ))}
            </div>
            <div className="ptags"><span className="tag">Content Design</span><span className="tag">Canva</span><span className="tag">Community</span></div>
          </div>

          {/* TATA */}
          <div className="pcard rv">
            <div className="pnum">04</div>
            <h3>AI-Driven Collections Strategy</h3>
            <p>Tata Group GenAI simulation — full agentic AI collections framework from EDA to ethical implementation. Certificate awarded by Forage.</p>
            <div className="ptags"><span className="tag">Data Analytics</span><span className="tag">GenAI</span><span className="tag">Strategy</span></div>
          </div>

          {/* ASPIRE */}
          <div className="pcard rv">
            <div className="pnum">05</div>
            <h3>Aspire Leaders Program</h3>
            <p>Completed all stages of the 2025 Aspire Leaders Program — 40 hours of coursework, mentored by Harvard faculty, covering leadership, ethics, and self-awareness.</p>
            <div className="ptags"><span className="tag">Leadership</span><span className="tag">Harvard</span><span className="tag">Ethics</span></div>
          </div>

        </div>
      </div>
    </div>
  );
}

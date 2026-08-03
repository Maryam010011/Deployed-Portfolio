export default function Contact() {
  return (
    <div className="ctbg" id="contact">
      <div className="ctin">
        <div>
          <p className="slbl">Get in touch</p>
          <h2 className="stitle">Let's talk</h2>
          <div className="clinks">
            <a href="mailto:maryamjahangir010011@gmail.com" className="cl">
              <div className="clico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#EA4335" />
                  <path d="M4 7l8 5 8-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                  <rect x="4" y="7" width="16" height="11" rx="1" stroke="#fff" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
              <div className="clt"><strong>Email</strong><span>maryamjahangir010011@gmail.com</span></div>
            </a>
            <a href="https://www.linkedin.com/in/maryam-jahangir-4428a6332/" target="_blank" rel="noopener noreferrer" className="cl">
              <div className="clico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#0A66C2" />
                  <path d="M7 10v7M7 7v.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                  <path d="M11 17v-3.5c0-1.5 1-2.5 2.5-2.5S16 12 16 13.5V17" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M11 10v7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div className="clt"><strong>LinkedIn</strong><span>linkedin.com/in/maryam-jahangir-4428a6332</span></div>
            </a>
            <a href="https://github.com/Maryam010011" target="_blank" rel="noopener noreferrer" className="cl">
              <div className="clico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#24292F" />
                  <path d="M12 4C7.58 4 4 7.58 4 12c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.37c-2.23.48-2.7-1.07-2.7-1.07-.36-.93-.88-1.17-.88-1.17-.72-.49.06-.48.06-.48.8.06 1.22.82 1.22.82.71 1.21 1.86.86 2.31.66.07-.51.28-.86.5-1.06-1.77-.2-3.63-.89-3.63-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.67 7.67 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38A8.01 8.01 0 0020 12c0-4.42-3.58-8-8-8z" fill="#fff" />
                </svg>
              </div>
              <div className="clt"><strong>GitHub</strong><span>github.com/Maryam010011</span></div>
            </a>
            <a href="tel:+923284075342" className="cl">
              <div className="clico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#2B6666" />
                  <path d="M8 4h2l1.5 4-1.75 1.5a9.5 9.5 0 004.75 4.75L16 12.5l4 1.5v2c0 1.1-.9 2-2 2A14 14 0 016 6c0-1.1.9-2 2-2z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              <div className="clt"><strong>Phone</strong><span>(+92) 328-4075342</span></div>
            </a>
          </div>
        </div>
        <div>
          <p className="cquote">
            "I'm looking for roles where I can keep building things, keep learning, and maybe
            help make tech feel a little more <em>welcoming</em> for the people coming after me."
          </p>
          <p style={{ marginTop: '1.4rem', fontSize: '.85rem', color: 'var(--muted)', fontStyle: 'italic' }}>
            — Maryam Jahangir, Islamabad
          </p>
        </div>
      </div>
    </div>
  );
}

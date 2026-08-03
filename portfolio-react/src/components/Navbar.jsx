import { useEffect, useRef, useState } from 'react';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certs', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // shadow/background once you scroll past the hero
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close the mobile menu on outside click
  useEffect(() => {
    function onClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <nav id="nav" ref={navRef} className={scrolled ? 'up' : ''}>
      <a href="#" className="logo">Maryam Jahangir</a>
      <button
        className={`hamburger${menuOpen ? ' active' : ''}`}
        id="hamburger"
        aria-label="Menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span></span><span></span><span></span>
      </button>
      <ul className={`navul${menuOpen ? ' open' : ''}`} id="navul">
        {LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

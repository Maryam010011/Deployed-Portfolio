import { useEffect, useRef } from 'react';

export default function Bot() {
  const botRef = useRef(null);

  useEffect(() => {
    const bot = botRef.current;
    if (!bot) return;

    const navH = 78;          // stay clear of the nav bar
    const bottomGap = 110;    // stay clear of the very bottom
    const ZIGZAGS = 5;        // how many left↔right sweeps across the whole page
    const MARGIN_MIN = 0.06, MARGIN_MAX = 0.92;

    let targetY = navH, curY = navH;
    let targetX = 0, curX = 0;
    let targetOpacity = 1, curOpacity = 1;
    let curRot = 0, lastScrollY = window.scrollY, lastT = performance.now();
    let rafId;

    function botWidth() {
      return bot.getBoundingClientRect().width || 110;
    }

    function calcTargets() {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;

      const travel = window.innerHeight - navH - bottomGap;
      targetY = navH + pct * travel;

      const usable = Math.max(0, window.innerWidth - botWidth());
      const xPct = MARGIN_MIN + (MARGIN_MAX - MARGIN_MIN) * (0.5 + 0.5 * Math.sin(pct * ZIGZAGS * Math.PI * 2));
      targetX = xPct * usable;

      const centerDist = Math.abs(xPct - 0.5);
      targetOpacity = 0.4 + Math.min(1, centerDist / 0.36) * 0.58;

      document.body.classList.toggle('bot-onleft', xPct < 0.4);
      document.body.classList.toggle('bot-onright', xPct > 0.6);
    }

    const poseSections = [
      { id: 'projects', cls: 'bot-point' },
      { id: 'certs', cls: 'bot-wave' },
      { id: 'contact', cls: 'bot-wave' },
    ];
    function updatePose() {
      let active = null;
      poseSections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.55 && r.bottom > window.innerHeight * 0.15) active = s.cls;
      });
      bot.classList.remove('bot-point', 'bot-wave');
      if (active) bot.classList.add(active);
    }

    function onScroll() { calcTargets(); updatePose(); }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', calcTargets);
    calcTargets();
    updatePose();

    function loop(now) {
      curY += (targetY - curY) * 0.07;
      curX += (targetX - curX) * 0.05;
      curOpacity += (targetOpacity - curOpacity) * 0.06;

      const buzzX = Math.sin(now / 48) * 1.3 + Math.sin(now / 13) * 0.5;
      const buzzY = Math.cos(now / 55) * 1.0 + Math.sin(now / 900) * 4;

      const dt = Math.max(now - lastT, 1);
      const vel = (window.scrollY - lastScrollY) / dt;
      const targetRot = Math.max(-16, Math.min(16, vel * 42));
      curRot += (targetRot - curRot) * 0.12;
      lastScrollY = window.scrollY; lastT = now;

      bot.style.transform = `translate(${curX + buzzX}px, ${curY + buzzY}px) rotate(${curRot}deg)`;
      bot.style.opacity = curOpacity.toFixed(2);
      rafId = requestAnimationFrame(loop);
    }
    rafId = requestAnimationFrame(loop);

    const blinkInterval = setInterval(() => {
      bot.classList.add('bot-blink');
      setTimeout(() => bot.classList.remove('bot-blink'), 150);
    }, 3200);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', calcTargets);
      cancelAnimationFrame(rafId);
      clearInterval(blinkInterval);
      document.body.classList.remove('bot-onleft', 'bot-onright');
    };
  }, []);

  return (
    <div id="bot" ref={botRef} aria-hidden="true">
      <svg viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="botGrad" x1="20" y1="20" x2="80" y2="116" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FAFBFE" />
            <stop offset="1" stopColor="#D9E0EA" />
          </linearGradient>
          <filter id="botGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="botAura" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>

        <ellipse className="bot-shadow" cx="50" cy="124" rx="24" ry="4" fill="#05070C" />
        <circle cx="50" cy="66" r="42" fill="#22D3EE" opacity=".12" filter="url(#botAura)" />

        <g className="bot-body">
          <g className="bot-antenna">
            <line x1="50" y1="24" x2="50" y2="8" stroke="#AEB9C8" strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="6" r="5" fill="#67E8F9" filter="url(#botGlow)" />
          </g>

          <rect x="20" y="20" width="60" height="50" rx="25" fill="url(#botGrad)" />
          <rect x="28" y="38" width="44" height="22" rx="11" fill="#12151C" />

          <g className="bot-eye">
            <circle cx="40" cy="49" r="7" fill="#67E8F9" filter="url(#botGlow)" />
            <circle cx="37.6" cy="46.6" r="1.8" fill="#fff" opacity=".85" />
          </g>
          <g className="bot-eye">
            <circle cx="60" cy="49" r="7" fill="#67E8F9" filter="url(#botGlow)" />
            <circle cx="57.6" cy="46.6" r="1.8" fill="#fff" opacity=".85" />
          </g>

          <path d="M44 63.5q6 4.5 12 0" stroke="#8B96A8" strokeWidth="1.6" strokeLinecap="round" fill="none" />

          <g className="bot-armL">
            <rect x="12" y="76" width="13" height="30" rx="6.5" fill="#12151C" />
          </g>
          <g className="bot-armR">
            <rect x="75" y="76" width="13" height="30" rx="6.5" fill="#12151C" />
          </g>

          <rect x="24" y="72" width="52" height="44" rx="22" fill="url(#botGrad)" />
          <rect x="42" y="86" width="16" height="10" rx="4" fill="#12151C" />
          <circle cx="50" cy="91" r="2" fill="#67E8F9" filter="url(#botGlow)" />

          <ellipse cx="38" cy="122" rx="11" ry="9" fill="#12151C" />
          <ellipse cx="62" cy="122" rx="11" ry="9" fill="#12151C" />
        </g>
      </svg>
    </div>
  );
}

import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const revObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('show');
            revObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.04 }
    );

    function revealAll() {
      document.querySelectorAll('.rv,.rv2').forEach((el) => revObs.observe(el));
    }

    revealAll();
    const t1 = setTimeout(revealAll, 300);
    const t2 = setTimeout(revealAll, 800);
    window.addEventListener('scroll', revealAll, { once: true });

    return () => {
      revObs.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('scroll', revealAll);
    };
  }, []);
}

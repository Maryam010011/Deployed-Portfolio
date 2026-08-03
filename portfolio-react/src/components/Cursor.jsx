import { useEffect, useRef } from 'react';

export default function Cursor() {
  const curRef = useRef(null);
  const cur2Ref = useRef(null);

  useEffect(() => {
    const cur = curRef.current;
    const cur2 = cur2Ref.current;
    if (!cur || !cur2) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let rafId;

    cur.style.opacity = '1';
    cur2.style.opacity = '0.55';

    function onMouseMove(e) {
      mx = e.clientX; my = e.clientY;
      cur.style.left = mx + 'px';
      cur.style.top = my + 'px';
    }

    function loop() {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      cur2.style.left = rx + 'px';
      cur2.style.top = ry + 'px';
      rafId = requestAnimationFrame(loop);
    }

    function bigCursor() {
      cur.style.width = '16px'; cur.style.height = '16px';
      cur2.style.width = '46px'; cur2.style.height = '46px';
    }
    function normCursor() {
      cur.style.width = '10px'; cur.style.height = '10px';
      cur2.style.width = '32px'; cur2.style.height = '32px';
    }
    function onMouseOver(e) {
      if (e.target.closest('a,button,.ccard,.pcard')) bigCursor();
      else normCursor();
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    rafId = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div id="cur" ref={curRef}></div>
      <div id="cur2" ref={cur2Ref}></div>
    </>
  );
}

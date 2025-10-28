import React, { useEffect, useRef } from "react";

const CursorEffect = () => {
  const ref = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // batch DOM writes with rAF to avoid jank
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        el.style.setProperty("--x", `${x}px`);
        el.style.setProperty("--y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[50]"
      style={{
        // the variables --x/--y are updated in JS above
        background:
          "radial-gradient(800px circle at var(--x, 50%) var(--y, 50%), rgba(56,189,248,0.09), transparent 60%)",
      }}
    />
  );    
};

export default CursorEffect;

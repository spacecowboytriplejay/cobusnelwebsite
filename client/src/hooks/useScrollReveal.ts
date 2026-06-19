import { useEffect, useRef } from "react";

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    // Observe the element and all children with cn-fade-in class
    const targets = el.querySelectorAll(".cn-fade-in");
    targets.forEach((t) => observer.observe(t));
    if (el.classList.contains("cn-fade-in")) observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

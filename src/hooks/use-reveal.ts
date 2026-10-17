import { useEffect, useRef } from "react";

/**
 * Menambahkan class `is-visible` ke elemen ber-class `reveal`
 * saat masuk viewport. Sekali saja per elemen.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = root.classList.contains("reveal")
      ? [root]
      : Array.from(root.querySelectorAll<HTMLElement>(".reveal"));

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return ref;
}

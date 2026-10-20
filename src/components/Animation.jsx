import { useEffect, useRef } from "react";
import "../assets/animation.css";

export default function Animation({
  image = "/images/nature.jpg",
  title = "NATURE",
  className = "",
}) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const animations = [
      imageRef.current.animate(
        [
          { opacity: 0, transform: "scale(1.01)" },
          { opacity: 1, transform: "scale(1)" },
        ],
        { duration: 400, easing: "ease-out", fill: "both" },
      ),

      overlayRef.current.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 100,
        delay: 1500,
        easing: "ease-out",
        fill: "both",
      }),

      textRef.current.animate(
        [
          { transform: "scale(40)", offset: 0 },
          { transform: "scale(6)", offset: 0.4 },
          { transform: "scale(1.5)", offset: 0.8 },
          { transform: "scale(1)", offset: 1 },
        ],
        { duration: 3000, delay: 1000, easing: "ease-in-out", fill: "both" },
      ),
    ];

    // Shuru mein sab pause: animation viewport mein aane ka intezar karegi
    animations.forEach((a) => a.pause());

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animations.forEach((a) => a.play());
          observer.disconnect(); // sirf ek baar chalaye
        }
      },
      { threshold: 0.4 }, // 40% section nazar aaye tab start
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      animations.forEach((a) => a.cancel());
    };
  }, [image, title]);

  return (
    <section
      ref={sectionRef}
      className={`nature-reveal ${className}`}
      style={{ "--nature-image": `url("${image}")` }}
      aria-label={title}
    >
      <div ref={imageRef} className="nature-reveal__image" />

      <div ref={overlayRef} className="nature-reveal__overlay">
        <h2 ref={textRef} className="nature-reveal__title">
          {title}
        </h2>
      </div>
    </section>
  );
}


import { useEffect, useRef } from "react";
import "../assets/animation.css";

export default function Animation({
  image = "/podcast-studio.jpg",
  title = "ADILCAST",
  className = "",
}) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    const overlayElement = overlayRef.current;
    const textElement = textRef.current;
    const sectionElement = sectionRef.current;

    if (
      !imageElement ||
      !overlayElement ||
      !textElement ||
      !sectionElement
    ) {
      return;
    }

    const animations = [
      imageElement.animate(
        [
          { opacity: 0, transform: "scale(1.01)" },
          { opacity: 1, transform: "scale(1)" },
        ],
        {
          duration: 400,
          easing: "ease-out",
          fill: "both",
        },
      ),

      overlayElement.animate(
        [{ opacity: 0 }, { opacity: 1 }],
        {
          duration: 100,
          delay: 1500,
          easing: "ease-out",
          fill: "both",
        },
      ),

      textElement.animate(
        [
          { transform: "scale(40)", offset: 0 },
          { transform: "scale(6)", offset: 0.4 },
          { transform: "scale(1.5)", offset: 0.8 },
          { transform: "scale(1)", offset: 1 },
        ],
        {
          duration: 3000,
          delay: 1000,
          easing: "ease-in-out",
          fill: "both",
        },
      ),
    ];

    animations.forEach((animation) => animation.pause());

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animations.forEach((animation) => animation.play());
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, [image, title]);

  return (
    <section
      ref={sectionRef}
      className={`adilcast-reveal ${className}`}
      style={{ "--adilcast-image": `url("${image}")` }}
      aria-label={title}
    >
      <div
        ref={imageRef}
        className="adilcast-reveal__image"
      />

      <div
        ref={overlayRef}
        className="adilcast-reveal__overlay"
      >
        <h2
          ref={textRef}
          className="adilcast-reveal__title"
        >
          {title}
        </h2>
      </div>
    </section>
  );
}
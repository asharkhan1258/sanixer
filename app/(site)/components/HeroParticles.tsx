"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    particlesJS: any;
  }
}

export default function HeroParticles() {
  const particlesInitialized = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !window.particlesJS) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.js";
      script.async = true;
      script.onload = initializeParticles;
      document.body.appendChild(script);
    } else if (typeof window !== "undefined") {
      initializeParticles();
    }

    return () => {
      particlesInitialized.current = false;
    };
  }, []);

  const initializeParticles = () => {
    if (particlesInitialized.current) return;

    try {
      const particlesElement = document.getElementById("particles-js");
      if (!particlesElement) {
        console.error("Particles container not found");
        return;
      }

      if (window.particlesJS) {
        window.particlesJS("particles-js", {
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: { value: "#F26522" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#F26522",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
            },
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100 },
              push: { particles_nb: 4 },
            },
          },
          retina_detect: true,
        });
        particlesInitialized.current = true;
      } else {
        console.error("particles.js not loaded properly");
      }
    } catch (error) {
      console.error("Error initializing particles:", error);
    }
  };

  return (
    <div
      id="particles-js"
      className="absolute inset-0 "
      style={{ height: "100%", width: "100%" }}
    />
  );
}

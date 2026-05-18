// "use client";
// import { useEffect, useState } from "react";

const HeroVideo = () => {
  // Temporarily force image to test performance
  return (
  <video
    src="/3141210-uhd_3840_2160_25fps.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
    width="1920"
    height="1080"
  />
);


  // 👇 This is the original code, commented out for now
  /*
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <img
        src="/hero.jpg"
        alt="hero background"
        className="absolute top-0 left-0 w-full h-full object-cover"
        width="1920"
        height="1080"
      />
    );
  }

  return (
    <video
      className="top-0 left-0 object-cover absolute inset-0 w-full h-full"
      width="1920"
      height="1080"
      muted
      autoPlay
      loop
      playsInline
      preload="metadata"
      poster="/hero.jpg"
    >
      <source src="/hero-sec-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
  */
};

export default HeroVideo;

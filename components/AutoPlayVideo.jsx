"use client";

import { useEffect, useRef } from "react";

export default function AutoPlayVideo({ src, className, alt }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Auto-play was prevented, which is fine
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      className={className}
      aria-label={alt}
    />
  );
}


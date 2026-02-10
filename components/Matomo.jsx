"use client";
import Image from "next/image";
import React from "react";

export default function Matomo() {
  return (
    <div className="hidden">
      <Image
        referrerPolicy="no-referrer-when-downgrade"
        src="https://matomo.zbyneksvoboda.cz/matomo.php?idsite=6&rec=1"
        width={1}
        height={1}
        alt=""
        unoptimized
        loading="lazy"
      />
    </div>
  );
}

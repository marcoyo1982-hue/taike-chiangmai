"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function OpeningCover() {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const played = sessionStorage.getItem("opening-played");

    if (!played) {
      const showTimer = window.setTimeout(() => setShow(true), 0);
      const hideTimer = window.setTimeout(() => {
        setHide(true);
      }, 3800);

      const closeTimer = window.setTimeout(() => {
        setShow(false);
        sessionStorage.setItem("opening-played", "true");
      }, 4800);

      return () => {
        window.clearTimeout(showTimer);
        window.clearTimeout(hideTimer);
        window.clearTimeout(closeTimer);
      };
    }
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-700 ${
        hide ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`transition-all duration-1000 ${
          hide ? "scale-75 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <Image
          src="/images/opening-cover.jpg"
          alt="台客在清邁"
          width={600}
          height={900}
          priority
          className="rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
}

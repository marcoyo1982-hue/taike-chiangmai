"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function OpeningCover() {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const played = sessionStorage.getItem("opening-played");

    if (!played) {
      setShow(true);

      setTimeout(() => {
        setHide(true);
      }, 3800);

      setTimeout(() => {
        setShow(false);
        sessionStorage.setItem("opening-played", "true");
      }, 4800);
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
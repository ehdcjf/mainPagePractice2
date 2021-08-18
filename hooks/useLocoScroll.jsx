import dynamic from "next/dynamic";
import { useEffect } from "react";
const LocomotiveScroll = dynamic(() => import("locomotive-scroll"), {
  ssr: false,
});

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector("#main-container");
    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });
  }, [start]);
}

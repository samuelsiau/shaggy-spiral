import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const imgGroups = document.querySelector(".imgGroups");

gsap.to(imgGroups, {
  scrollTrigger: {
    trigger: imgGroups,
    start: "0 70%",
    end: "0 30%",
    markers: true,
    scrub: true,
    toggleActions: "restart pause reverse pause"
  },
  rotateX: 27,
  rotateZ: 25,
})

gsap.set(imgGroups, {
  transformOrigin: "center center",
  transformPerspective: 500,
  transformStyle: "preserve-3d"
})
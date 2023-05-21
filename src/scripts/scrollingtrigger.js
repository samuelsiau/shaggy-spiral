import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".gsReveal").forEach(function(elem){
  const $section = $(elem);
  const animationChange = gsap.fromTo($section, {
    autoAlpha: 0,
    y: 20
  }, {
    autoAlpha: 1,
    y: 0,
    duration: 1,
    stagger: 0.7
  });

  ScrollTrigger.create({
    trigger: elem,
    animation: animationChange,
    markers: true,
    // toggleActions: "restart pause reverse pause",
    start: "center 80%",
    end: "center 20%",
  })
})
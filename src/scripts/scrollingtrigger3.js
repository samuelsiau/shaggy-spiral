import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// toggleActions: onEnter onLeave onEnterBack onLeaveBack,
// "play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none".

gsap.utils.toArray(".gsReveal").forEach(function(elem){
  const $section = $(elem).find('.gsAni');

  gsap.set($section, {
    transformOrigin: "50% 100% 0",
    transformPerspective: 400,
    transformStyle: "preserve-3d"
  })

  const animationChange = gsap.fromTo($section, {
    rotateX: -27,
    y: 20,
    autoAlpha: 0,
  }, {
    rotateX: 0,
    y: 0,
    autoAlpha: 1,
    duration: 0.4,
    stagger: 0.3,
    ease: "back.out(1.4)",
  });

  ScrollTrigger.create({
    trigger: elem,
    animation: animationChange,
    markers: true,
    toggleActions: "play reverse play reverse",
    start: "center 90%",
    end: "center 10%",
  })
})
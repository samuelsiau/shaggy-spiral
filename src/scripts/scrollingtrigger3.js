import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

// toggleActions: onEnter onLeave onEnterBack onLeaveBack,
// "play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none".

gsap.utils.toArray(".gsReveal").forEach(function(elem){
  const items = elem.querySelectorAll(".gsAni");

  gsap.set(items, {
    transformOrigin: "50% 100% 0",
    transformPerspective: 400,
    transformStyle: "preserve-3d"
  });

  const animationChange = gsap.fromTo(items, {
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
    // markers: true,
    animation: animationChange,
    toggleActions: "play reverse play reverse",
    start: "center 90%",
    end: "center 10%",
  });
})

gsap.utils.toArray(".imagePallaxContainer").forEach(function(elem){
  const imgPallax = elem.querySelectorAll('.imgPallax');

  const pallaxAnimation = gsap.to(imgPallax, {
    y: -100,
  });

  ScrollTrigger.create({
    trigger: elem,
    // markers: true,
    start: "center 90%",
    end: "center 10%",
    scrub: 0.2,
    animation: pallaxAnimation
  })
})

gsap.utils.toArray(".fancy-grid-wrapper").forEach(function(elem){
  const pallaxItems = elem.querySelectorAll('.parallax');

  pallaxItems.forEach(function(item){
    const horizontal = item.dataset.horizontal;
    console.log(horizontal);

    const gl = gsap.to(item, {
      yPercent: horizontal,
      ease: "none",
    })

    ScrollTrigger.create({
      trigger: elem,
      // markers: true,
      start: "center 90%",
      end: "center 10%",
      scrub: 0.2,
      animation: gl
    })
  })

});


// Initial LENIS SMOOTH SCROLL

const lenis = new Lenis()
lenis.on('scroll', (e) => {
  // console.log(e);
  ScrollTrigger.update();
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf);


// BACK TO TOP 
const backtotop = document.getElementById('backtotop');
backtotop.addEventListener("click", function(){
  window.scrollTo({top: 0, behavior: "smooth"});
})
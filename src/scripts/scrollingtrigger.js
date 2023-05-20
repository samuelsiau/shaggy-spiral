import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let targets = gsap.utils.toArray(".reveal-list");

function hide(elem) {
  gsap.set(elem, {
    autoAlpha: 0
  });
}

function show(elem){
  gsap.fromTo(elem, {
    autoAlpha: 0,
    y: 100
  }, {
    autoAlpha: 1,
    y: 0,
    delay: 0.7,
    duration: 1.7,
    ease: "expo", 
    overwrite: "auto"
  })
}

gsap.utils.toArray(".reveal-list").forEach(function(elem){
  hide(elem);
  ScrollTrigger.create({
    trigger: elem,
    markers: true,
    onEnter: function(){show(elem)},
    onEnterBack: function(){show(elem)},
    onLeave: function(){hide(elem)}
  })
})

// gsap.from(".cslisting", {
//   opacity: 0,
//   stagger: 0.5,
//   duration: 2,
//   scrollTrigger: {
//     trigger: ".cslisting",
//     markers: true
//   }
// })
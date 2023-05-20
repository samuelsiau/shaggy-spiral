import gsap from "gsap";
import SplitType from 'split-type';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const text = new SplitType("#textHero"), tl = gsap.timeline(), tl2 = gsap.timeline(), textLines = text.lines, imghero = document.querySelector('.imgHero');

window.addEventListener("resize", reportWindowSize);

function reportWindowSize()  {
  text.split();
}

gsap.set(text.lines, {
  transformOrigin: "50% 100% 0",
  transformPerspective: 400,
  transformStyle: "preserve-3d",
  // rotateX: -27,
  // y: 20,
  // opacity: 0,
})

tl.from(textLines, {
  duration: 0.7,
  rotateX: -27,
  y: 20,
  autoAlpha: 0,
  ease: "back.out(1.4)",
  stagger: 0.17,
});

tl.from(imghero, {
  duration: 0.7,
  opacity: 0,
  ease: "back.out(3)",
});

document.getElementById("animateagain").onclick = function(){
  tl.restart();
  tl2.restart();
};


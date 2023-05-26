import gsap from "gsap";
import SplitType from 'split-type';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const text = new SplitType("#textHero"), 
      tl = gsap.timeline(), 
      tl2 = gsap.timeline(), 
      textLines = text.lines, 
      textHero2 = document.querySelector('#textHero2'),
      text2 = new SplitType(textHero2),
      textLines2 = text2.lines;


function wrapElements() {
  const listItems = document.querySelectorAll("#textHero2 .line");
  listItems.forEach(function(item){
    const wrapper = document.createElement("div");
    wrapper.classList.add("line-overflow");
    item.parentNode.insertBefore(wrapper, item);
    wrapper.appendChild(item);
  })
}

function handleResize()  {
  text2.split();
  text.split();
  wrapElements();
}

window.addEventListener("resize", handleResize);
wrapElements();

gsap.set(textLines, {
  transformOrigin: "50% 100% 0",
  transformPerspective: 400,
  transformStyle: "preserve-3d",
})

tl.fromTo(textLines, {
  rotateX: -27,
  y: 20,
  autoAlpha: 0,
  opacity: 0
}, {
  duration: 0.7,
  rotateX: 0,
  y: 0,
  autoAlpha: 1,
  opacity: 1,
  ease: "back.out(1.4)",
  stagger: 0.17,
  delay: 1
});

gsap.set(textLines2, {
  y: 100,
  autoAlpha: 0,
})

tl2.fromTo(textLines2, {
  autoAlpha: 0,
}, {
  y: 0,
  autoAlpha: 1,
  ease: "back.out(1.4)",
  stagger: 0.17,
  delay: 1
})

document.getElementById("animateagain").onclick = function(){
  tl.restart();
  tl2.restart();
};


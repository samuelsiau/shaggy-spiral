import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const showAnim = gsap.from('.navbar', { 
  yPercent: -100,
  paused: true,
  duration: 0.5
}).progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse();
    // if(self.direction === -1) {
    //   showAnim.play();
    // } else {
    //   showAnim.reverse();
    // }
  },
  toggleClass: {className: 'navbar--scrolled', targets: '.navbar'}
});

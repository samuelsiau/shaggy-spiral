const revealHero = $('.reveal-hero');
const list = $('.reveal-list');

ScrollReveal().reveal(revealHero, {
  delay: 500,
  distance: '50px',
  easing: 'cubic-bezier(0,.69,.48,1.17)',
  duration: 700
});

ScrollReveal().reveal(list, {
  delay: 500,
  distance: '50px',
  easing: 'cubic-bezier(0,.69,.48,1.17)',
  duration: 700,
  interval: 100
});
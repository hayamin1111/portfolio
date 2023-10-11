//loading animation
const body = document.getElementById('js-body');
const intro = document.getElementById('js-intro');
const text = document.getElementById('js-text');
window.onload = function() {
  setTimeout(() => {
    body.classList.remove("loading");
    body.classList.add("loaded");
    setTimeout(() => {
      intro.classList.add("show");
      text.classList.add("show");
    }, 700);
  }, 600);
}

//scroll animation
gsap.registerPlugin(ScrollTrigger);
gsap.set('.heading', {
  opacity: 0,
  y: 60,
  skewX: "-60deg",
})
ScrollTrigger.batch(".heading", {
  onEnter: batch => gsap.to(batch, {
    opacity: 1,
    y: 0,
    skewX: "0",
    ease: Power4.out,
    duration: .4,
  }),
  start: "top 70%",
  once: true
});
gsap.set('.skills__subsection', {
  opacity: 0,
  y: 60,
})
gsap.to('.skills__subsection', {
  opacity: 1,
  y: 0,
  ease: Power4.out,
  duration: .6,
  scrollTrigger: {
    trigger: ".skills__subsection",
    start: "top 60%",
  },
  stagger: {
    from: "start", 
    amount: 0.8,
  },
})
gsap.set('.card', {
  opacity: 0,
  y: 60,
})
gsap.to('.card', {
  opacity: 1,
  y: 0,
  ease: Power4.out,
  duration: .6,
  scrollTrigger: {
    trigger: ".card",
    start: "top 70%",
  },
  stagger: {
    from: "start", 
    amount: 0.6,
  },
})
gsap.set('.profile__content', {
  opacity: 0,
  y: 60,
})
gsap.to('.profile__content', {
  opacity: 1,
  y: 0,
  ease: Power4.out,
  duration: .6,
  scrollTrigger: {
    trigger: ".profile__content",
    start: "top 80%",
  },
})
gsap.set('.works__subtitle', {
  opacity: 0,
  y: 60,
  skewX: "-60deg",
})
gsap.to('.works__subtitle', {
  opacity: 1,
  y: 0,
  skewX: "0",
  ease: Power4.out,
  duration: .6,
  scrollTrigger: {
    trigger: ".works__subtitle",
    start: "top 80%",
  },
})
gsap.set('.skills', {
  backgroundColor: "#ffffff",
  color: '#222222',
})
gsap.to('.skills', {
  backgroundColor: "#222222",
  color: '#ffffff',
  ease: Power4.out,
  duration: 1,
  scrollTrigger: {
    trigger: ".skills",
    start: "top 50%",
  },
})
gsap.set('.profile__image', {
  opacity: 0,
  y: 10,
})
gsap.to('.profile__image', {
  opacity: 1,
  y: 0,
  ease: Power4.out,
  duration: .3,
  scrollTrigger: {
    trigger: ".profile__image",
    start: "top 50%",
  },
})


//smooth scroll
const anchorElems = document.querySelectorAll('a[href^="#"]');
anchorElems.forEach(anchorElem => {
  anchorElem.addEventListener('click', (event) => { 
    event.preventDefault();
    let href = anchorElem.getAttribute('href');
    let targetElem = document.getElementById(href.replace('#',''));
    if(targetElem) {
      const targetOffsetTop = targetElem.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const target = targetOffsetTop + offset;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  });
});

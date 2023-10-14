//loading animation
const body = document.getElementById('js-body');
const mv = document.getElementById('js-mainvisual');
window.onload = function() {
  setTimeout(() => {
    body.classList.remove("loading");
    body.classList.add("loaded");
    setTimeout(() => {
      mv.classList.add("is-active");
    }, 2000);
  }, 600);
}

//scroll animation
gsap.registerPlugin(ScrollTrigger);
gsap.set('.intro__textinner', {
  y: 60,
})
gsap.set(".breadcrumb__item", {
  opacity: 0,
  y: 30,
})
gsap.timeline({
  ease: Power4.out,
  scrollTrigger: {
    trigger: ".intro__textinner",
    start: "top 90%",
  },
})
.to(".intro__textinner", {
  y: 0,
  duration: .6,
  stagger: {
    from: "start", 
    amount: .9,
  },
})
.add(() => document.querySelector('.mainvisual').classList.add('is-inactive'))
.add(() => document.querySelector('.intro__emphasis').classList.add('is-active'))
.to(".breadcrumb__item", {
  opacity: 1,
  y: 0,
  duration: .8,
  stagger: {
    from: "start", 
    amount: .3,
  },
})

gsap.set('.skills', {
  backgroundColor: "#222222",
  color: '#666666',
})
gsap.to('.skills', {
  backgroundColor: "#666666",
  color: '#ffffff',
  ease: Power4.out,
  duration: 1,
  scrollTrigger: {
    trigger: ".skills",
    start: "top 50%",
  },
})

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
gsap.set('.works__link', {
  opacity: 0,
  y: 40,
  skewX: "-30deg",
})
gsap.to('.works__link', {
  opacity: 1,
  y: 0,
  skewX: "0",
  ease: Power4.out,
  duration: .6,
  scrollTrigger: {
    trigger: ".works__link",
    start: "top 80%",
  },
  stagger: {
    from: "start", 
    amount: 0.6,
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


// hover animation
const hoverTargets = document.querySelectorAll('.works__link');
hoverTargets.forEach( target => {
  target.addEventListener('mouseover', (elem) => {
    const data = elem.currentTarget.dataset.type;
    const figures = document.querySelectorAll('.works__figure');
    figures.forEach(figure => {
      figure.classList.remove('is-show');
    })
    document.getElementById(data).classList.add('is-show')
    // console.log(data);
  });
})

//parallax



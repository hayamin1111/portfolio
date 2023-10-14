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
  backgroundColor: "#ffffff",
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

// gsap.set('.card', {
//   opacity: 0,
//   y: 60,
// })
// gsap.to('.card', {
//   opacity: 1,
//   y: 0,
//   ease: Power4.out,
//   duration: .6,
//   scrollTrigger: {
//     trigger: ".card",
//     start: "top 70%",
//   },
//   stagger: {
//     from: "start", 
//     amount: 0.6,
//   },
// })
// gsap.set('.profile__content', {
//   opacity: 0,
//   y: 60,
// })
// gsap.to('.profile__content', {
//   opacity: 1,
//   y: 0,
//   ease: Power4.out,
//   duration: .6,
//   scrollTrigger: {
//     trigger: ".profile__content",
//     start: "top 80%",
//   },
// })
// gsap.set('.works__subtitle', {
//   opacity: 0,
//   y: 60,
//   skewX: "-60deg",
// })
// gsap.to('.works__subtitle', {
//   opacity: 1,
//   y: 0,
//   skewX: "0",
//   ease: Power4.out,
//   duration: .6,
//   scrollTrigger: {
//     trigger: ".works__subtitle",
//     start: "top 80%",
//   },
// })
// gsap.set('.profile__image', {
//   opacity: 0,
//   y: 10,
// })
// gsap.to('.profile__image', {
//   opacity: 1,
//   y: 0,
//   ease: Power4.out,
//   duration: .3,
//   scrollTrigger: {
//     trigger: ".profile__image",
//     start: "top 50%",
//   },
// })


// //smooth scroll
// const anchorElems = document.querySelectorAll('a[href^="#"]');
// anchorElems.forEach(anchorElem => {
//   anchorElem.addEventListener('click', (event) => { 
//     event.preventDefault();
//     let href = anchorElem.getAttribute('href');
//     let targetElem = document.getElementById(href.replace('#',''));
//     if(targetElem) {
//       const targetOffsetTop = targetElem.getBoundingClientRect().top;
//       const offset = window.pageYOffset;
//       const target = targetOffsetTop + offset;
//       window.scrollTo({
//         top: target,
//         behavior: 'smooth',
//       });
//     } else {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//       });
//     }
//   });
// });


//parallax



//three.js
// let scene, camera, mesh, renderer, planeGeometry;
// let initialMeshWidth, initialMeshHeight;
// window. addEventListener('load', init);

// const canvas = document.getElementById('canvas');
// console.log(canvas.innerWidth);
// function init() {
//   initialMeshWidth = window.innerWidth / 2 /  100 * 160 * 0.35;
//   initialMeshHeight = window.innerWidth / 2 / 100 * 90 * 0.35;

//   scene = new THREE.Scene();
  
//   camera = new THREE.PerspectiveCamera(
//     50,
//     window.innerWidth / window.innerHeight,
//     0.1, 
//     1000
//   );
//   camera.position.set(0, 0, +300);

//   renderer = new THREE.WebGLRenderer(
//     {alpha: true}
//   );
//   renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
//   renderer.setPixelRatio(window.devicePixelRatio);
//   canvas.appendChild(renderer.domElement);
//   renderer.render(scene, camera);
  
//   let textures = new THREE.TextureLoader().load("../img/img-website_parallax.jpg");
  
//   planeGeometry = new THREE.PlaneGeometry(initialMeshWidth, initialMeshHeight);
  
//   let boxMaterial = new THREE.MeshBasicMaterial({map: textures, side: THREE.DoubleSide});

//   mesh = new THREE.Mesh(planeGeometry, boxMaterial);
//   scene.add(mesh);
//   mesh.scale.x = initialMeshWidth / (window.innerWidth / 2);
//   mesh.scale.y = initialMeshHeight / (window.innerHeight / 2);

//   animate();
// }

// window.addEventListener('resize', onWindowResize);
// function onWindowResize() {
//   const width = window.innerWidth / 2;
//   const height = window.innerHeight / 2;

//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setSize(width, height);

//   mesh.scale.x = initialMeshWidth / width / 100 * 160;
//   mesh.scale.y = initialMeshHeight / width / 100 * 90;

//   camera.aspect = width / height;
//   camera.updateProjectionMatrix();
// }

// let step = 0;
// function animate() {
//   mesh.rotation.y = step;
//   step += 0.002;
//   renderer.render(scene, camera);
  
//   requestAnimationFrame(animate);
// }

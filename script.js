// const parallax = document.getElementById("banner");
// window.addEventListener("scroll", function() {
//   let offset = window.pageYOffset;
//   parallax.style.backgroundPositionY = offset * 0.8 + "px";
// })

// var image = document.getElementsByClassName('banner__img');
// new simpleParallax(image);
// import { gsap } from "./node_modules/gsap/index.js";

// import { gsap } from 'gsap/all';
// import { gsap } from 'gsap/index';
// import gsap from "gsap";
// gsap.registerPlugin(ScrollTrigger);

function Marquee(selector, speed) {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;
  
  parentSelector.insertAdjacentHTML('beforeend', clone);
//   parentSelector.children[0].insertAdjacentHTML('beforeend', clone);
//   parentSelector.children[0].insertAdjacentHTML('beforeend', clone);

  setInterval(function () {
    firstElement.style.marginLeft = `-${i}px`;
    
    if (i > firstElement.clientWidth) {
      i = 0;
    }
    // console.log(i, firstElement.clientWidth);
    i = i + speed;
  }, 0);
}

// window.addEventListener('load', Marquee('.marquee', 0.2));


// gsap.to(".banner__subtitle", {
//     x: -1300,
//     backgroundPosition: '1300px 0',
//     scrollTrigger: {
//       trigger: "body",
//       start: 'top top',
//       scrub: true,
//     }
//   });
  
//   gsap.to(".banner__subtitle", {
//     x: 80,
//     scrollTrigger: {
//       trigger: "body",
//       start: 'top top',
//       end: 'bottom top',
//       scrub: true,
//     }
//   });

  gsap.to(".marquee", {
    duration: 5,
    ease: "none",
    x: "-=500", //move each box 500px to right
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % 500) //force x value to be between 0 and 500 using modulus
    },
    repeat: -1
  });



//   banner animations
function logoHide() {
  const bannerTitle = document.getElementById('js-banner-logo');
  const bannerImg = document.getElementById('js-banner-img');
  
  if(window.scrollY > (bannerImg.clientHeight / 2)) {
      bannerTitle.style.display = 'none';
  } else {
      bannerTitle.style.display = 'block';
  }
}

document.addEventListener('scroll', () => {
  logoHide();
});

window.onload = () => {
  logoHide();  
};

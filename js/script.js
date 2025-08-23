//DROPDOWN MENU
const dropdownMenu = document.getElementById("dropdown-item");
const menuItem = document.getElementById("menu-item");

menuItem.addEventListener("mouseenter", () => {
  dropdownMenu.classList.add("active-dropdown-menu");
});

menuItem.addEventListener("mouseleave", () => {
  dropdownMenu.classList.remove("active-dropdown-menu");
});

// MENU MOBILE

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active-menu-mobile");
      toggle.classList.toggle("active-bx");
    });
  }
};

showMenu("bx", "menu-mobile");

// SCROLL HEADER

function scrollHeader() {
  const nav = document.getElementById("header");

  if (this.scrollY >= 50) nav.classList.add("active-header");
  else nav.classList.remove("active-header");
}

window.addEventListener("scroll", scrollHeader);

// GSAP ANIMATIONS

gsap.registerPlugin(ScrollTrigger);

gsap.from(".navbar-desktop", {
  y: -50,
  opacity: 0,
  delay: 1,
  duration: 1,
  ease: "power1.out",
});

gsap.from("#hero-title", {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power1.out",
});

gsap.from("#hero-text", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power1.out",
});

gsap.fromTo(
  ".btn-hero",
  {
    opacity: 0,
    duration: 1,
    delay: 1.5,
    ease: "power1.out",
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power1.out",
  }
);

gsap.fromTo(".container-title", {
  y: -50,
  opacity: 0,
},{
  y: 0,
  opacity: 1,
  scrollTrigger:{
    trigger: ".container-title",
    start: "top 70%",
    end: "bottom 20%",
    scrub: true,

  }
})

gsap.fromTo("#mcco", {
  x: -50,
  opacity: 0,
},{
  x: 0,
  opacity: 1,
  scrollTrigger:{
    trigger: "#mcco",
    start: "top 90%",
    end: "bottom 10%",
    scrub: true,
    markers: true,
  }
})

gsap.fromTo("#mariana-solano", {
  x: 50,
  opacity: 0,
},{
  x: 0,
  opacity: 1,
  scrollTrigger:{
    trigger: "#mariana-solano",
    start: "top 90%",
    end: "bottom 100%",
    scrub: true,
    markers: true,
  }
})

gsap.fromTo("#gelcamp-engenharia", {
  x: -50,
  opacity: 0,
},{
  x: 0,
  opacity: 1,
  scrollTrigger:{
    trigger: "#gelcamp-engenharia",
    start: "top 90%",
    end: "bottom 100%",
    scrub: true,
    markers: true,
  }
})



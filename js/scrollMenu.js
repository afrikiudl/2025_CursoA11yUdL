gsap.registerPlugin(ScrollTrigger);

const menu = document.getElementById("menuprincipal");
const menuTitle = document.getElementById("menuTitle");

ScrollTrigger.create({
  trigger: menu,
  start: "top top",
  onEnter: () => {
    menu.classList.add("fixed");
    
    // Mostrar título con animación
    gsap.set(menuTitle, { display: "block" });
    gsap.fromTo(menuTitle, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
  },
  onLeaveBack: () => {
    gsap.to(menuTitle, { y: -20, opacity: 0, duration: 0.3, ease: "power2.in", onComplete: () => {
      gsap.set(menuTitle, { display: "none" });
    }});
    
    gsap.to(menu, { y: -60, opacity: 0, duration: 0.3, ease: "power2.in", onComplete: () => {
      menu.classList.remove("fixed");
      gsap.set(menu, { clearProps: "all" });
    }});
  }
});

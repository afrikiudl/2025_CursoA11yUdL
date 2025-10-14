const menu = document.getElementById("menuprincipal");
const menuTitle = document.getElementById("menuTitle");

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: menu,
  start: "top top",
  onEnter: () => {
    menu.classList.add("fixed");
    
    // Mostrar título con animación
    gsap.set(menuTitle, { display: "block" });        // primero mostrar en el DOM
    gsap.fromTo(menuTitle, { y: -20, opacity: 0 }, 
                          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
  },
  onLeaveBack: () => {
    // Ocultar título suavemente
    gsap.to(menuTitle, { y: -20, opacity: 0, duration: 0.3, ease: "power2.in", onComplete: () => {
      gsap.set(menuTitle, { display: "none" });       // luego ocultar para que no ocupe espacio
    }});

    gsap.to(menu, { y: -60, opacity: 0, duration: 0.3, ease: "power2.in", onComplete: () => {
      menu.classList.remove("fixed");
      gsap.set(menu, { clearProps: "all" });
    }});
  }
});

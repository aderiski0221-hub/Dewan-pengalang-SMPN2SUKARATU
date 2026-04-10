gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
    const tl = gsap.timeline();
    
    // Curtain Anim
    tl.from(".curtain-logo", { scale: 0.5, opacity: 0, duration: 1, ease: "back.out(1.7)" })
      .to(".curtain", { yPercent: -100, duration: 1.2, ease: "expo.inOut", delay: 0.5 });

    // Hero Anim
    tl.from(".anim-hero", { y: 30, opacity: 0, duration: 1, stagger: 0.2, ease: "power4.out" }, "-=0.5");

    // Scroll Reveal
    document.querySelectorAll('.animate-scroll').forEach(el => {
        gsap.from(el, {
            scrollTrigger: { trigger: el, start: "top 92%" },
            y: 30, opacity: 0, duration: 0.8, ease: "power2.out"
        });
    });
});
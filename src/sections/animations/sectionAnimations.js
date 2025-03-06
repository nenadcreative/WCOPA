// src/utils/sectionAnimations.js
import { gsap } from "gsap";
import { fadeInOnScroll, staggerElementsOnScroll } from "@/utils/animations.js";


export function initGlobalAnimations() {
    // Headings scroll effect
    fadeInOnScroll("h2", {
        duration: 0.6,
        delay: 0.4,
    });
    fadeInOnScroll("p", {
        duration: 0.8,
        delay: 0.4,
        stagger: 0.4,
    });

    // Any other global animations
}

export function initHeroAnimations() {
    // Hero-specific animations
    gsap.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
    });

    gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.4,
    });
}



export function initFeatureAnimations() {
    // Animate feature cards
    staggerElementsOnScroll(".features-section", ".feature-card", {
        stagger: 0.15,
        start: "top 70%",
    });
}
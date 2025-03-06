// src/utils/animations.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

// Common animation settings
const defaults = {
    duration: 0.8,
    ease: "power2.out",
    y: 20,
};

// Initialize animations that should run on every page


// Reusable animation functions
export function fadeInOnScroll(elements, options = {}) {
    const elements_array = gsap.utils.toArray(elements);

    elements_array.forEach((element) => {
        gsap.set(element, { opacity: 0, y: options.y || defaults.y });
        gsap.to(element, {
            opacity: 100,
            y: 0,
            duration: options.duration || defaults.duration,
            ease: options.ease || defaults.ease,
            scrollTrigger: {
                trigger: element,
                start: options.start || "top 80%",
                toggleActions: options.toggleActions || "play none none none",
                markers: process.env.NODE_ENV === 'development' && options.markers,
            },
        });
    });
}

// Add more reusable animations as needed
export function staggerElementsOnScroll(container, elements, options = {}) {
    gsap.from(elements, {
        opacity: 0,
        y: 30,
        stagger: options.stagger || 0.1,
        duration: options.duration || defaults.duration,
        ease: options.ease || defaults.ease,
        scrollTrigger: {
            trigger: container,
            start: options.start || "top 80%",
            toggleActions: options.toggleActions || "play none none none",
            markers: process.env.NODE_ENV === 'development' && options.markers,
        },
    });
}

// Function to kill all ScrollTriggers (useful for page transitions)
export function killAllScrollTriggers() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}
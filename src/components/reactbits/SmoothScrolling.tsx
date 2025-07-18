import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollingProps {
  children: React.ReactNode;
}

const SmoothScrolling: React.FC<SmoothScrollingProps> = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 2.2, // Slower duration for super smooth scrolling
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      smoothWheel: true,
      touchMultiplier: 2,
      wheelMultiplier: 1.2,
      infinite: false,
      lerp: 0.05, // Very low lerp for ultra smooth
      syncTouch: true,
      syncTouchLerp: 0.02, // Ultra smooth touch lerp
      gestureOrientation: 'vertical',
    });

    lenisRef.current = lenis;

    // Ultra smooth animation frame with throttling
    let frameId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    // Update ScrollTrigger when Lenis scrolls
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    let ctx = gsap.context(() => {
      // Ultra smooth section fade-in animations
      const sections = document.querySelectorAll('section');
      sections.forEach((section, i) => {
        gsap.fromTo(section, 
          {
            opacity: 0,
            y: 60,
            scale: 0.99,
            rotationX: 2,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 2.0,
            ease: "power4.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "top 10%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
              fastScrollEnd: true,
              preventOverlaps: true
            }
          }
        );
      });



      // Ultra smooth parallax effects
      const parallaxElements = document.querySelectorAll('[data-speed]');
      parallaxElements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || '0.5');
        gsap.to(el, {
          y: () => -window.innerHeight * speed,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.05, // Ultra smooth parallax scrubbing
            invalidateOnRefresh: true,
            fastScrollEnd: true
          }
        });
      });

      // Refresh ScrollTrigger on window resize
      const handleResize = () => {
        ScrollTrigger.refresh();
        lenis.resize();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };

    });

    // Cleanup function
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div ref={wrapperRef} className="relative">
        <div ref={contentRef} className="will-change-transform">
          {children}
        </div>
      </div>
    </>
  );
};

export default SmoothScrolling; 
/**
 * Shiplet Landing Page - Main JavaScript
 * Handles scroll animations, mobile navigation, and interactions
 */

(function () {
    'use strict';

    // ===================================
    // Scroll-Triggered Animations
    // ===================================

    /**
     * Initialize Intersection Observer for scroll animations
     * Elements with .scroll-animate class will fade in when visible
     */
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.scroll-animate');

        if (!animatedElements.length) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Unobserve after animation triggers (one-time)
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach((el) => {
            observer.observe(el);
        });
    }

    // ===================================
    // Mobile Navigation
    // ===================================

    /**
     * Initialize mobile menu toggle functionality
     */
    function initMobileNav() {
        const menuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeButton = document.getElementById('mobile-menu-close');
        const menuLinks = document.querySelectorAll('.mobile-menu-link');

        if (!menuButton || !mobileMenu) return;

        function openMenu() {
            mobileMenu.classList.add('open');
            document.body.style.overflow = 'hidden';
            menuButton.setAttribute('aria-expanded', 'true');
        }

        function closeMenu() {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
            menuButton.setAttribute('aria-expanded', 'false');
        }

        menuButton.addEventListener('click', openMenu);

        if (closeButton) {
            closeButton.addEventListener('click', closeMenu);
        }

        // Close menu when clicking a link
        menuLinks.forEach((link) => {
            link.addEventListener('click', closeMenu);
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
                closeMenu();
            }
        });
    }

    // ===================================
    // Smooth Scroll for Anchor Links
    // ===================================

    /**
     * Add smooth scrolling behavior to anchor links
     */
    function initSmoothScroll() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');

        anchorLinks.forEach((link) => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');

                if (href === '#') return;

                const target = document.querySelector(href);

                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // ===================================
    // Header Scroll Effect
    // ===================================

    /**
     * Add shadow to header when scrolled
     */
    function initHeaderScrollEffect() {
        const header = document.getElementById('header');

        if (!header) return;

        let lastScroll = 0;

        function handleScroll() {
            const currentScroll = window.scrollY;

            if (currentScroll > 10) {
                header.classList.add('shadow-md');
                header.classList.remove('shadow-none');
            } else {
                header.classList.remove('shadow-md');
                header.classList.add('shadow-none');
            }

            lastScroll = currentScroll;
        }

        // Use passive listener for scroll performance
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Initial check
        handleScroll();
    }

    // ===================================
    // Feature Card Stagger Animation
    // ===================================

    /**
     * Add staggered animation delays to feature cards
     */
    function initFeatureCardAnimations() {
        const featureCards = document.querySelectorAll('.feature-card');

        featureCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 100}ms`;
        });
    }

    // ===================================
    // App Store Badge Click Tracking
    // ===================================

    /**
     * Track App Store badge clicks (placeholder for analytics)
     */
    function initAppStoreBadgeTracking() {
        const badge = document.querySelector('.app-store-badge');

        if (!badge) return;

        badge.addEventListener('click', () => {
            // Placeholder for analytics tracking
            console.log('App Store badge clicked');

            // If analytics is loaded
            if (typeof gtag === 'function') {
                gtag('event', 'click', {
                    event_category: 'CTA',
                    event_label: 'App Store Download'
                });
            }
        });
    }

    // ===================================
    // Reduced Motion Support
    // ===================================

    /**
     * Respect user's reduced motion preference
     */
    function checkReducedMotion() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            document.documentElement.classList.add('reduce-motion');

            // Disable CSS animations
            const style = document.createElement('style');
            style.textContent = `
        .reduce-motion *,
        .reduce-motion *::before,
        .reduce-motion *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
            document.head.appendChild(style);
        }
    }

    // ===================================
    // Initialize Everything
    // ===================================

    function init() {
        checkReducedMotion();
        initScrollAnimations();
        initMobileNav();
        initSmoothScroll();
        initHeaderScrollEffect();
        initFeatureCardAnimations();
        initAppStoreBadgeTracking();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();

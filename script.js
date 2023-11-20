(function () {
  document.addEventListener("DOMContentLoaded", function () {
    function setupIntersectionObserver(targetSelector, animations) {
      let hasBeenInView = false;

      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      };

      const observeTarget = document.querySelector(targetSelector);
      const animatedElements = document.querySelectorAll(animations.elements);
      const headingText = document.querySelector(animations.headingText);

      const handleIntersection = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (hasBeenInView) {
              animatedElements.forEach((element) => {
                element.classList.remove(animations.remove);
              });

              setTimeout(() => {
                animatedElements.forEach((element) => {
                  element.classList.add(animations.add);
                });
                headingText.classList.add(animations.headingAdd);
              }, 100);
            } else {
              hasBeenInView = true;
            }
          }
        });
      };

      const observer = new IntersectionObserver(
        handleIntersection,
        observerOptions
      );
      observer.observe(observeTarget);
    }

    setupIntersectionObserver("#select", {
      elements: ".reanimate-section",
      remove: "slideInDown",
      add: "slideInDown",
    });

    setupIntersectionObserver("#revolutionize", {
      elements: ".hero-heading",
      remove: "slideInLeft",
      add: "slideInLeft",
    });

    setupIntersectionObserver("#revolutionize", {
      elements: ".hero-heading",
      remove: "slideInLeft",
      add: "slideInLeft",
    });

    setupIntersectionObserver("#select", {
      elements: ".select-txt",
      remove: "slideInLeft",
      add: "slideInLeft",
    });

    setupIntersectionObserver("#skills", {
      elements: ".select-txt",
      remove: "slideInLeft",
      add: "slideInLeft",
    });
    setupIntersectionObserver("#skills", {
      elements: ".select-second-text",
      remove: "slideInUp",
      add: "slideInUp",
    });
    setupIntersectionObserver("#the-way-we-work-container", {
      elements: ".the-way-we-work",
      remove: "slideInLeft",
      add: "slideInLeft",
    });

    setupIntersectionObserver("#we-kick-brands", {
      elements: ".kick-brans-txt",
      remove: "slideInLeft",
      add: "slideInLeft",
    });
  });
})();

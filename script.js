//  Scroll Infinite
new Swiper(".product-card-wrapper", {
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    481: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// Cool Numbers

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute("data-target"));
    let current = 0;
    const speed = target < 100 ? 1 : Math.ceil(target / 100);

    const suffix = el.textContent.includes("%") ? "%" : "+";

    const update = () => {
      current += speed;
      if (current >= target) {
        el.textContent = target + suffix;
      } else {
        el.textContent = current + suffix;
        requestAnimationFrame(update);
      }
    };

    update();
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  counters.forEach((el) => {
    observer.observe(el);
  });
});

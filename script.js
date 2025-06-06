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
      slidesPerView: 3,
    },
  },
});

// Cool Numbers

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute("data-target"));
    const suffix = el.getAttribute("data-suffix") || "";
    let current = 0;
    const speed = target < 100 ? 1 : Math.ceil(target / 100);

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

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter-sec");

  const formatWithCommas = (num) => {
    return num.toLocaleString("en-IN");
  };

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute("data-target"));
    let current = 0;
    const speed = Math.max(1, Math.floor(target / 100));

    const update = () => {
      current += speed;
      if (current >= target) {
        el.textContent = formatWithCommas(target);
      } else {
        el.textContent = formatWithCommas(current);
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

  counters.forEach((counter) => observer.observe(counter));
});

// FAQs - Accordion

document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const currentlyOpen = document.querySelector(".accordion-content.open");
      const iconOpen = document.querySelector(".accordion-header .icon.open");

      const content = header.nextElementSibling;
      const icon = header.querySelector(".icon");

      // Close currently open if not the same one
      if (currentlyOpen && currentlyOpen !== content) {
        currentlyOpen.style.maxHeight = null;
        currentlyOpen.classList.remove("open");

        if (iconOpen) {
          iconOpen.textContent = "+";
          iconOpen.classList.remove("open");
        }
      }

      // Toggle current
      content.classList.toggle("open");
      icon.classList.toggle("open");

      if (content.classList.contains("open")) {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.textContent = "−";
      } else {
        content.style.maxHeight = null;
        icon.textContent = "+";
      }
    });
  });
});

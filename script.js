//  Counter Animation Script

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".ag-counter");

  const animateCounter = (counter) => {
    const max =
      parseInt(counter.getAttribute("data-max")) ||
      Math.floor(Math.random() * 1000) + 100;
    let count = 0;
    const speed = Math.floor(max / 100);

    const updateCounter = () => {
      if (count < max) {
        count += speed;
        counter.textContent = count > max ? max : count;
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = max;
      }
    };

    updateCounter();
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          animateCounter(counter);
          observer.unobserve(counter);
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});

//  Review Animation Script

const track = document.querySelector(".ag-reviews-track");
const cards = document.querySelectorAll(".ag-review-card");
const total = cards.length;

cards.forEach((card) => {
  const clone = card.cloneNode(true);
  track.appendChild(clone);
});

let index = 0;
const cardWidth = cards[0].offsetWidth + 20;

const scrollReviews = () => {
  index++;
  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(-${index * cardWidth}px)`;

  if (index >= total) {
    setTimeout(() => {
      track.style.transition = "none";
      track.style.transform = "translateX(0)";
      index = 0;
    }, 500);
  }
};

setInterval(scrollReviews, 2000);

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

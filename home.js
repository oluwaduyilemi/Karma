document.addEventListener("DOMContentLoaded", function () {
  const shoreContainers = document.querySelectorAll(".shore-cont");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  let currentIndex = 0;

  // Hide all shore-conts initially
  function updateVisibility() {
    shoreContainers.forEach((cont, index) => {
      cont.style.display = index === currentIndex ? "flex" : "none";
    });
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % shoreContainers.length;
    updateVisibility();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + shoreContainers.length) % shoreContainers.length;
    updateVisibility();
  });

  updateVisibility(); // initial setup
});


  // Set your countdown target date
  const countDownDate = new Date("2025-08-31T23:59:59").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    if (distance < 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  // Update every second
  setInterval(updateCountdown, 1000);
  updateCountdown(); // Call once on load


const sneakerImages = [
  "./images/e-p1.png.webp",
  "./images/e-p2.png.webp",
  "./images/e-p3.png.webp",
  "./images/e-p4.png.webp"
];


  let currentIndex = 0;

  const sneakerImg = document.getElementById("exclusive-sneaker");
  const prevBtn = document.getElementById("exclusive-prev");
  const nextBtn = document.getElementById("exclusive-next");

  function updateSneakerImage() {
    sneakerImg.src = sneakerImages[currentIndex];
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + sneakerImages.length) % sneakerImages.length;
    updateSneakerImage();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % sneakerImages.length;
    updateSneakerImage();
  });


  document.addEventListener("DOMContentLoaded", () => {
    const serviceSection = document.querySelector(".service");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            serviceSection.classList.add("animate-in");
            observer.unobserve(serviceSection); // Animate only once
          }
        });
      },
      { threshold: 0.3 }
    );

    if (serviceSection) {
      observer.observe(serviceSection);
    }
  });



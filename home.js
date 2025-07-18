// window.addEventListener('wheel', function(e) {
//     if(e.deltaY !== 0) {
//         document.querySelector('.nike-new').scrollLeft += e.deltaY;
//           e.preventDefault();
//     }
// }, { passive: false });

  const slides = document.querySelectorAll('.shore-cont');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  document.getElementById('nextBtn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  document.getElementById('prevBtn').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });




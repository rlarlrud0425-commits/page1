document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-inner");
  const slides = document.querySelectorAll(".carousel-inner .main");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  let index = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateCarousel();
  });

  prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  });
});



 document.addEventListener("DOMContentLoaded", () => {
  const tourSections = document.querySelectorAll(".tour-wrap");

  tourSections.forEach(section => {
    const list = section.querySelector(
      ".tour-list"
    );
    const btn = section.querySelector(".next-btn");

    if (list && btn) {
      btn.addEventListener("click", () => {
        const scrollAmount = 150; 
        const maxScrollLeft = list.scrollWidth - list.clientWidth;

        if (list.scrollLeft + scrollAmount >= maxScrollLeft) {
          list.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          list.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      });
    }
  });
});
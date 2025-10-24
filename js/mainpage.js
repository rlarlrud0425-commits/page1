document.addEventListener("DOMContentLoaded", () => {
  const videoWrap = document.querySelector(".sect5 .video-wrap");
  if (!videoWrap) return;

  const videoList = videoWrap.querySelector(".video-list");
  const prevBtn = videoWrap.querySelector(".prev-btn");
  const nextBtn = videoWrap.querySelector(".next-btn");

  if (videoList && prevBtn && nextBtn) {
    function getScrollAmount() {
      if (window.innerWidth <= 360) {
        return 80;
      } else if (window.innerWidth <= 1024) {
        return 218; 
      } else {
        return 200; 
      }
    }

    function scrollNext() {
      const scrollAmount = getScrollAmount();
      const maxScrollLeft = videoList.scrollWidth - videoList.clientWidth;
      if (videoList.scrollLeft + scrollAmount >= maxScrollLeft) {
        videoList.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        videoList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }

    function scrollPrev() {
      const scrollAmount = getScrollAmount();
      if (videoList.scrollLeft - scrollAmount <= 0) {
        videoList.scrollTo({ left: videoList.scrollWidth, behavior: "smooth" });
      } else {
        videoList.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }

    nextBtn.addEventListener("click", scrollNext);
    prevBtn.addEventListener("click", scrollPrev);

    window.addEventListener("resize", () => {
  
    });
  }
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
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".pages");
    
    images.forEach((image, index) => {
      image.style.zIndex = images.length - index;
    });
  });
  
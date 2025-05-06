document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
  
    const imageLinks = [
      "https://images.unsplash.com/photo-1741290726567-a1aaaa43f625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400",
      "https://images.unsplash.com/photo-1617646131890-163a0e9e6658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400",
      "https://images.unsplash.com/photo-1569240651738-2c9ec2f50f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400",
      "https://images.unsplash.com/photo-1549925862-990ac5b34e35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400",
      "https://images.unsplash.com/photo-1569240651738-2c9ec2f50f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400",
      "https://images.unsplash.com/photo-1594950164100-dc9142cbfb24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400",
      "https://images.unsplash.com/photo-1586375103528-8bc247aa8110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400",
      "https://images.unsplash.com/photo-1618165613382-647167f59565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400",
      "https://images.unsplash.com/photo-1618849888041-fe81e92b733e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400"
    ];
  
    const renderImages = (container, sources) => {
      sources.forEach(link => {
        const img = document.createElement("img");
        img.src = link;
        img.alt = "Carousel image";
        container.appendChild(img);
      });
    };
  
    const scrollCarousel = (offset) => {
      carousel.scrollBy({
        left: offset,
        behavior: "smooth"
      });
    };
  
    // Initialization
    renderImages(carousel, imageLinks);
    prevBtn.addEventListener("click", () => scrollCarousel(-300));
    nextBtn.addEventListener("click", () => scrollCarousel(300));
  });
  
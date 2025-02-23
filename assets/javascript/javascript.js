if (document.querySelector(".mySwiper")) {
  var swiper = new Swiper(".mySwiper", {
    autoplay: true,
    loop: true,
  });
}

// testmonails
if (document.querySelector(".myTestmonials")) {
  var swiper = new Swiper(".myTestmonials", {
    spaceBetween: 20,
    autoplay: true,
    loop: true,
    pagination: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}

// testmonails


document.addEventListener("DOMContentLoaded", function() {
  const rewards = document.querySelectorAll(".reward-item");
  const descriptionBox = document.querySelector(".reward-description p");

  rewards.forEach(reward => {
      reward.addEventListener("mouseenter", function() {
          descriptionBox.textContent = this.getAttribute("data-description");
      });

      reward.addEventListener("mouseleave", function() {
          descriptionBox.textContent = "Hover over a reward to see details.";
      });
  });
});



      // Set the offer deadline (YYYY, MM (0-based), DD, HH, MM, SS)
      const deadline = new Date("2025-03-01T23:59:59").getTime();

      function updateCountdown() {
          const now = new Date().getTime();
          const timeLeft = deadline - now;

          if (timeLeft <= 0) {
              document.getElementById("countdown").innerHTML = "Offer Expired!";
              return;
          }

          // Convert time to days, hours, minutes, and seconds
          const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

          // Display countdown
          document.getElementById("countdown").innerHTML = 
              `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }

      // Update countdown every second
      setInterval(updateCountdown, 1000);

      // Initial call to prevent 1-second delay
      updateCountdown();



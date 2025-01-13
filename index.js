// <script>
//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//       e.preventDefault();
//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//         behavior: 'smooth'
//       });
//     });
//   });
// </script> 


//   const aboutSection = document.querySelector('#about');
//   const fadeInElements = document.querySelectorAll('.fade-in');

//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('visible');
//       }
//     });
//   }, { threshold: 0.5 });

//   fadeInElements.forEach(element => {
//     observer.observe(element);
//   });


//   new TypeIt("#about1", {
//     strings: "About SufiMart!",
//     speed: 75,
//     loop: true,
//   }).go();



// const cards = document.querySelectorAll('.card');

// const observer1 = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');
//     }
//   });
// }, { threshold: 0.5 });

// cards.forEach(card => {
//   observer1.observe(card);
// });


// const productCards = document.querySelectorAll('.product-card');

// const observer3 = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');
//     }
//   });
// }, { threshold: 0.2 });

// productCards.forEach(card => observer3.observe(card));


// // JavaScript to handle category switching
// function showCategory(category) {
//   // Update the category title
//   const title = {
//     health: "Health & Beauty",
//     kitchen: "Kitchen & Home",
//     fashion: "Fashion & Clothing",
//     electronics: "Electronic Devices",
//     recommendation: "Recommendation"
//   };
//   document.getElementById("category-title").innerText = title[category];

//   // Load new content for the selected category
//   const content = {
//     health: `
//       <div class="products-grid">
//         <div class="product-card">
//           <img src="handycreamset-image.jpg" alt="Product 1">
//           <h3>Combination Hand Cream Set Hydrating</h3>
//           <p>₦2,500.00</p>
//           <div class="rating">⭐⭐⭐⭐✰ (2 reviews)</div>
//         </div>
//         <div class="product-card">
//           <img src="healthylaundry-image.jpg" alt="Product 2">
//           <h3>Healthy Laundry Detergent</h3>
//           <p>₦2,000.00</p>
//           <div class="rating">⭐⭐⭐✰✰ (1 review)</div>
//         </div>
//       </div>
//     `,
//     kitchen: `
//       <div class="products-grid">
//         <div class="product-card">
//           <img src="media/kitchen1.jpg" alt="Product 1">
//           <h3>Kitchen Knife Set</h3>
//           <p>₦10,000.00</p>
//           <div class="rating">⭐⭐⭐⭐⭐ (5 reviews)</div>
//         </div>
//         <div class="product-card">
//           <img src="media/kitchen2.jpg" alt="Product 2">
//           <h3>Cooking Pot</h3>
//           <p>₦7,000.00</p>
//           <div class="rating">⭐⭐⭐⭐✰ (3 reviews)</div>
//         </div>
//       </div>
//     `,
//     fashion: `
//       <div class="products-grid">
//         <div class="product-card">
//           <img src="media/fashion1.jpg" alt="Product 1">
//           <h3>Men's T-shirt</h3>
//           <p>₦3,500.00</p>
//           <div class="rating">⭐⭐⭐⭐✰ (2 reviews)</div>
//         </div>
//         <div class="product-card">
//           <img src="media/fashion2.jpg" alt="Product 2">
//           <h3>Ladies Handbag</h3>
//           <p>₦8,000.00</p>
//           <div class="rating">⭐⭐⭐⭐⭐ (4 reviews)</div>
//         </div>
//       </div>
//     `,
//     electronics: `
//       <div class="products-grid">
//         <div class="product-card">
//           <img src="media/electronics1.jpg" alt="Product 1">
//           <h3>Smartphone</h3>
//           <p>₦50,000.00</p>
//           <div class="rating">⭐⭐⭐⭐✰ (8 reviews)</div>
//         </div>
//         <div class="product-card">
//           <img src="media/electronics2.jpg" alt="Product 2">
//           <h3>Bluetooth Speaker</h3>
//           <p>₦12,000.00</p>
//           <div class="rating">⭐⭐⭐⭐⭐ (6 reviews)</div>
//         </div>
//       </div>
//     `,
//     recommendation: `
//       <div class="products-grid">
//         <div class="product-card">
//           <img src="media/recommendation1.jpg" alt="Product 1">
//           <h3>Daily Essentials Combo</h3>
//           <p>₦15,000.00</p>
//           <div class="rating">⭐⭐⭐⭐⭐ (12 reviews)</div>
//         </div>
//         <div class="product-card">
//           <img src="media/recommendation2.jpg" alt="Product 2">
//           <h3>Special Promo Pack</h3>
//           <p>₦20,000.00</p>
//           <div class="rating">⭐⭐⭐⭐✰ (9 reviews)</div>
//         </div>
//       </div>
//     `
//   };

//   document.getElementById("category-content").innerHTML = content[category];

//   // Update active tab styling
//   const tabs = document.querySelectorAll(".category-tabs button");
//   tabs.forEach(tab => tab.classList.remove("active"));
//   document.querySelector(`[onclick="showCategory('${category}')"]`).classList.add("active");
// }


// {/* <script> */}
// document.addEventListener( 'DOMContentLoaded', function() {
//   var splide = new Splide( '.splide' );
//   splide.mount();
// } );
// // </script>

// new Splide( '#slider1' ).mount();


// new Splide( '#slider2' ).mount();


// new Splide( '#slider3' ).mount();
// new Splide( '.splide' ).mount();



// AOS.init();



// const categories = document.querySelectorAll('.category');
// let currentIndex = 0;

// function showNextCategory() {
//   // Hide the current category
//   categories[currentIndex].classList.remove('active');
  
//   // Move to the next category
//   currentIndex = (currentIndex + 1) % categories.length;
  
//   // Show the next category
//   categories[currentIndex].classList.add('active');
// }

// // Start the slider
// categories[currentIndex].classList.add('active');
// setInterval(showNextCategory, 3000); // Change every 3 seconds

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active', 'prev');
      if (i === index) {
        slide.classList.add('active');
      } else if (i === (index - 1 + slides.length) % slides.length) {
        slide.classList.add('prev');
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // Initialize the first slide
  showSlide(currentIndex);

  // Set interval for automatic sliding
  setInterval(nextSlide, 3000); // Change slide every 3 seconds
});


new TypeIt("#about1", {
  strings: "About Yan-albarka!",
  speed: 300,
  loop: true,
}).go();

new TypeIt("#about2", {
  strings: "Our Vission!",
  speed: 300,
  loop: true,
}).go();




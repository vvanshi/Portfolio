
// // script.js

// // Add a scroll event listener
// window.addEventListener("scroll", () => {
//     const sections = document.querySelectorAll(".project");
//     const scrollPosition = window.scrollY; // Get the current scroll position
//     const windowHeight = window.innerHeight; // Get the height of the viewport

//     sections.forEach((section) => {
//         // Get the distance of the element from the top of the document
//         const sectionTop = section.offsetTop;

//         // Calculate opacity based on scroll position
//         const distance = Math.max(0, sectionTop - scrollPosition);
//         const fadePoint = 200; // Distance in pixels where fade starts

//         if (distance < windowHeight) {
//             // Fade out the content as it scrolls out
//             const opacity = Math.max(0, 1 - (windowHeight - distance) / fadePoint);
//             section.style.opacity = opacity.toFixed(2);
//         } else {
//             // Reset opacity for sections far from the viewport
//             section.style.opacity = 1;
//         }
//     });
// });

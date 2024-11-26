
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior

            const sectionId = this.getAttribute('href'); // Get the section ID (e.g., #about)
            const section = document.querySelector(sectionId); // Select the section

            // Scroll to the section smoothly
            section.scrollIntoView({ behavior: 'smooth' });

            // Add the glow effect class
            section.classList.add('glow-effect');

            // Remove the glow effect after the animation completes
            setTimeout(() => {
                section.classList.remove('glow-effect');
            }, 1500); // Match the duration of the animation
        });
    });



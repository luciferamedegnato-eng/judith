// JavaScript for Portfolio Website
// This file handles animations, tooltips, and interactivity

// Orbiting animation for the floating icons around MySQL
// To modify: Change radius, speed, or center coordinates for different animation behavior
document.addEventListener('DOMContentLoaded', function() {
    const orbitContainer = document.querySelector('.orbit-container');
    const orbitingIcons = document.querySelectorAll('.orbiting-icon');
    const centerX = 100; // Center of the 200x200 container (modify for different positioning)
    const centerY = 100;
    const radius = 70; // Distance from center (increase/decrease for larger/smaller orbit)
    const speed = 0.01; // Rotation speed (radians per frame) - higher = faster

    let angle = 0;

    function animate() {
        orbitingIcons.forEach((icon, index) => {
            const iconAngle = angle + (index * (2 * Math.PI) / orbitingIcons.length);
            const x = centerX + radius * Math.cos(iconAngle) - 15; // -15 to center the icon (assuming 30px icon)
            const y = centerY + radius * Math.sin(iconAngle) - 15;

            icon.style.left = x + 'px';
            icon.style.top = y + 'px';
        });

        angle += speed;
        requestAnimationFrame(animate);
    }

    animate();
});

// Tooltip functionality for orbiting icons
// Shows real technology images on hover
// To modify: Update data-tooltip and data-image attributes in HTML for different content
document.addEventListener('DOMContentLoaded', function() {
    const tooltip = document.getElementById('tech-tooltip');
    const orbitingIcons = document.querySelectorAll('.orbiting-icon');

    orbitingIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function(e) {
            const tooltipText = this.getAttribute('data-tooltip');
            const imageUrl = this.getAttribute('data-image');

            tooltip.innerHTML = `<img src="${imageUrl}" alt="${tooltipText}" style="width: 50px; height: 50px;"><br>${tooltipText}`;
            tooltip.style.display = 'block';
            tooltip.style.left = (e.clientX + 10) + 'px';
            tooltip.style.top = (e.clientY + 10) + 'px';
        });

        icon.addEventListener('mousemove', function(e) {
            tooltip.style.left = (e.clientX + 10) + 'px';
            tooltip.style.top = (e.clientY + 10) + 'px';
        });

        icon.addEventListener('mouseleave', function() {
            tooltip.style.display = 'none';
        });
    });
});

// Smooth scrolling for navigation links (if you add navigation menu)
// To modify: Add navigation links with href="#section-id" for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hover effects for skills in the skills grid
// To modify: Change scale factor or add more effects
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)'; // Change 1.1 to adjust hover scale
    });
    skill.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

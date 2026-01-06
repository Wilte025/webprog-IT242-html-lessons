// Get all tab buttons and content sections
const tabButtons = document.querySelectorAll('.tab-button');
const contentSections = document.querySelectorAll('.content-section');

// Add click event listener to each tab button
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the tab name from data attribute
        const targetTab = button.getAttribute('data-tab');
        
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Hide all content sections
        contentSections.forEach(section => section.classList.remove('active'));
        
        // Show the target content section
        const targetSection = document.getElementById(targetTab);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});

// Optional: Add smooth scroll to top when switching tabs
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
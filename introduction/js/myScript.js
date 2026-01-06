function showSection(sectionId) {
    // 1. Hide all sections
    const sections = document.querySelectorAll('.tab-content');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 2. Remove 'active' class from all buttons
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Show the clicked section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // 4. Highlight the clicked button
    const clickedBtn = event.currentTarget;
    clickedBtn.classList.add('active');
}
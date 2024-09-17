// Select the toggle button and the skills section
var toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
var skillsSection = document.getElementById('skills');
// Add an event listener to the button
toggleSkillsBtn.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleSkillsBtn.textContent = 'Hide Skills'; // Change button text
    }
    else {
        skillsSection.style.display = 'none';
        toggleSkillsBtn.textContent = 'Show Skills'; // Change button text
    }
});

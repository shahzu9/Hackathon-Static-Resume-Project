// Select the toggle button and the skills section
const toggleSkillsBtn = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

// Add an event listener to the button
toggleSkillsBtn.addEventListener('click', () => {
  if (skillsSection.style.display === 'none') {
    skillsSection.style.display = 'block';
    toggleSkillsBtn.textContent = 'Hide Skills'; // Change button text
  } else {
    skillsSection.style.display = 'none';
    toggleSkillsBtn.textContent = 'Show Skills'; // Change button text
  }
});


const toggleThemeButton = document.createElement('button');
toggleThemeButton.textContent = 'Toggle Theme';
document.body.appendChild(toggleThemeButton);

toggleThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

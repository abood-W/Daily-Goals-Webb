function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle('darkmode');
  localStorage.setItem('darkmode', isDark ? 'enabled' : 'disabled');
}

window.addEventListener('DOMContentLoaded', () => {
  const darkModeSetting = localStorage.getItem('darkmode');
  if (darkModeSetting === 'enabled') {
    document.documentElement.classList.add('darkmode');
  } else {
    document.documentElement.classList.remove('darkmode');
  }
});

const nav = document.getElementById('navbar');
const header = document.getElementById('header');
const hero = document.getElementById('hero');
const about = document.getElementById('about');
const contact = document.getElementById('contact');
const toggleSwitch = document.querySelector('input[type="checkbox"]');


// Switch theme dynamically
function switchThem(event) {
  // console.log(event.target.checked);
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    lightMode();
  }
}


// Event Listener
toggleSwitch.addEventListener('change', switchThem);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    darkMode();
  }
}

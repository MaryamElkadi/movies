
let header = document.querySelector("header");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
  document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const logoIcon = document.querySelector('.logo i');
    const logoText = document.querySelector('.logo span');
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelectorAll('.navbar a');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        // When scrolled down
        header.classList.add('bg-white', 'shadow-md');
        header.classList.remove('bg-transparent');
        
        // Change logo icon and text color
        logoIcon.classList.add('text-gray-900');
        logoIcon.classList.remove('text-white');
        logoText.classList.add('text-gray-900');
        logoText.classList.remove('text-white');
        
        // Change menu icon color
        menuIcon.classList.add('text-gray-900');
        menuIcon.classList.remove('text-white');
        
        // Change nav links color
        navLinks.forEach(link => {
          link.classList.add('text-gray-900');
          link.classList.remove('text-red-500');
        });
      } else {
        // When at top of page
        header.classList.add('bg-transparent');
        header.classList.remove('bg-white', 'shadow-md');
        
        // Reset logo icon and text color
        logoIcon.classList.add('text-white');
        logoIcon.classList.remove('text-gray-900');
        logoText.classList.add('text-white');
        logoText.classList.remove('text-gray-900');
        
        // Reset menu icon color
        menuIcon.classList.add('text-white');
        menuIcon.classList.remove('text-gray-900');
        
        // Reset nav links color
        navLinks.forEach(link => {
          link.classList.add('text-red-500');
          link.classList.remove('text-gray-900');
        });
      }
    });
  });



menuIcon.onclick = () => {
  navbar.classList.toggle("active");
}
window.onscroll = () => {
  navbar.classList.remove("active");
}
window.addEventListener('scroll', () => {
    header.classList.toggle("shadow" , window.scrollY > 0);
});


document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const close = document.getElementById('close');
  const mobileMenu = document.getElementById('mobile-menu');


  const openMobileMenu = () => {
    // mobileMenu.style.display = 'block';
    mobileMenu.classList.add("is-open");
  };

  const closeMobileMenu = () => {
    // mobileMenu.style.display = 'none';
    mobileMenu.classList.remove("is-open");
  };

  // Nasłuchiwanie kliknięć na ikonę hamburgera
  hamburger.addEventListener('click', openMobileMenu);

  // Nasłuchiwanie kliknięć na ikonę zamykania menu
  close.addEventListener('click', closeMobileMenu);
});
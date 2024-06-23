document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const close = document.getElementById('close');
  const mobileMenu = document.getElementById('mobile-menu');


  const openMobileMenu = () => {
    hamburger.style.display = 'none';
    mobileMenu.classList.add("is-open");
    close.style.display = 'block';
  };

  const closeMobileMenu = () => {
    close.style.display = 'none';
    mobileMenu.classList.remove("is-open");
    hamburger.style.display = 'block';
  };

  // Nasłuchiwanie kliknięć na ikonę hamburgera
  hamburger.addEventListener('click', openMobileMenu);

  // Nasłuchiwanie kliknięć na ikonę zamykania menu
  close.addEventListener('click', closeMobileMenu);
});


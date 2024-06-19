document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-button');
    const close = document.getElementById('thank-you-button');
    const modalThankYou = document.getElementById('thank-you');
  
  
    const openModal = () => {
      // mobileMenu.style.display = 'block';
      modalThankYou.classList.add("thank-you-is-on");
    };
  
    const closeModal = () => {
      // mobileMenu.style.display = 'none';
      modalThankYou.classList.remove("thank-you-is-on");
    };
  
    // Nasłuchiwanie kliknięć na ikonę hamburgera
    submitButton.addEventListener('click', openModal);
  
    // Nasłuchiwanie kliknięć na ikonę zamykania menu
    close.addEventListener('click', closeModal);
  });
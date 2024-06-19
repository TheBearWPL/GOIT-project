document.addEventListener('DOMContentLoaded', function () {
    const orderButton = document.getElementById('button-order');
    const close = document.getElementById('modal-button');
    const modal = document.getElementById('modal-one');
  
  
    const openModal = () => {
      // mobileMenu.style.display = 'block';
      modal.classList.add("modal-one-is-on");
      modal.classList.remove("modal-one");
    };
  
    const closeModal = () => {
      // mobileMenu.style.display = 'none';
      modal.classList.remove("modal-one-is-on");
      modal.classList.add("modal-one");
    };
  
    // Nasłuchiwanie kliknięć na ikonę hamburgera
    orderButton.addEventListener('click', openModal);
  
    // Nasłuchiwanie kliknięć na ikonę zamykania menu
    close.addEventListener('click', closeModal);
  });
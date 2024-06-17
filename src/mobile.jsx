<script>
  const OPEN_CLASS = "is-open";
  const mobileNav = document.querySelector("#mobile-menu");
  const openMobileNav = () => mobileNav.classList.add(OPEN_CLASS);
  const closeMobileNav = () => mobileNav.classList.remove(OPEN_CLASS);
  document.querySelector("#hamburger").addEventListener("click", openMobileNav);
  document.querySelector("#close").addEventListener("click", closeMobileNav);
</script>
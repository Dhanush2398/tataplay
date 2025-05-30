
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebarMenu");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("sidebarCloseBtn");

  if (toggleBtn && sidebar && overlay) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      overlay.classList.toggle("show");
    });

    overlay.addEventListener("click", () => {
      sidebar.classList.remove("open");
      overlay.classList.remove("show");
    });
  }

  if (closeBtn && sidebar && overlay) {
    closeBtn.addEventListener("click", () => {
      sidebar.classList.remove("open");
      overlay.classList.remove("show");
    });
  }
});

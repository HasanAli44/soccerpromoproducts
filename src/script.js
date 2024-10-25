document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".navbar");
  const stickyNavTop = nav.offsetTop;

  const stickyNav = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > stickyNavTop) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  };

  stickyNav();
  window.addEventListener("scroll", stickyNav);
});
// Close all dropdowns when clicking outside
document.addEventListener("click", (event) => {
  if (!event.target.closest("details[data-dropdown]")) {
    dropdowns.forEach((dropdown) => {
      dropdown.open = false;
    });
  }
});

// Close all dropdowns when clicking outside
document.addEventListener("click", (event) => {
  if (!event.target.closest("details[data-dropdown]")) {
    dropdowns.forEach((dropdown) => {
      dropdown.open = false;
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll("details[data-dropdown]");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("toggle", (event) => {
      if (dropdown.open) {
        dropdowns.forEach((otherDropdown) => {
          if (otherDropdown !== dropdown) {
            otherDropdown.open = false;
          }
        });
      }
    });
  });

  // Close all dropdowns when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest("details[data-dropdown]")) {
      dropdowns.forEach((dropdown) => {
        dropdown.open = false;
      });
    }
  });
});

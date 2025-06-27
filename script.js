// Contact form alert
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! We'll contact you soon.");
});

// Menu filter
const filterButtons = document.querySelectorAll(".filter-buttons button");
const menuItems = document.querySelectorAll(".menu-items .item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add 'active' to current button
    button.classList.add("active");

    const category = button.getAttribute("data-category");

    menuItems.forEach((item) => {
      const itemCategory = item.getAttribute("data-category");

      if (category === "all" || itemCategory === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

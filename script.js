// Handle Toggle Faq
function toggleFaq(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector("svg");

  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    icon.style.transform = "rotate(180deg)";
  } else {
    content.classList.add("hidden");
    icon.style.transform = "rotate(0deg)";
  }
}

// Hamburger Button
const menu = document.querySelector(".mobile-nav");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

[...document.querySelector(".mobile-nav-menu").children].map((item) =>
  item.addEventListener("click", () => {
    hamburger.classList.contains("active") && hamburger.click();
  })
);

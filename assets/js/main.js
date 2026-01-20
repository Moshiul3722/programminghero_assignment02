// show menu

const navToggle = document.getElementById("nav_toggle");
const menu = document.getElementById("menu");
const subscribe_btn = document.getElementById("subscribe_btn");

navToggle.addEventListener("click", () => {
  //   console.log("hello-----");
  menu.classList.toggle("active");
  subscribe_btn.classList.toggle("active");
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    subscribe_btn.classList.remove("active");
  });
});

// Add click event to subscribe_btn separately
subscribe_btn.addEventListener("click", () => {
  menu.classList.remove("active");
  subscribe_btn.classList.remove("active");
});

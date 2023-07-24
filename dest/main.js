const tops = document.querySelector(".top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    tops.classList.add("active");
  } else {
    tops.classList.remove("active");
  }
});
tops.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

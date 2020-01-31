const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const text = document.querySelector(".floatingText")

img1.addEventListener("mouseover", function() {
  img1.style.width = "350px";
  img1.style.height = "475px";
  text.style.opacity = "0";
});

img2.addEventListener("mouseover", function() {
  img2.style.width = "350px";
  img2.style.height = "475px";
  text.style.opacity = "0";
});

img1.addEventListener("mouseout", function() {
  img1.style.width = "50px";
  img1.style.height = "50px";
  text.style.opacity = "1";
});

img2.addEventListener("mouseout", function() {
  img2.style.width = "50px";
  img2.style.height = "50px";
  text.style.opacity = "1";
});

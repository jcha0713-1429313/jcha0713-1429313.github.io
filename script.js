const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

img1.addEventListener("mouseover", function() {
  img1.style.width = "350px";
  img1.style.height = "475px";
});

img2.addEventListener("mouseover", function() {
  img2.style.width = "350px";
  img2.style.height = "475px";
});

img1.addEventListener("mouseout", function() {
  img1.style.width = "50px";
  img1.style.height = "50px";
});

img2.addEventListener("mouseout", function() {
  img2.style.width = "50px";
  img2.style.height = "50px";
});

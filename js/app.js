let navbar = document.getElementById("navbar"),
  blend = document.querySelector(".gar"),
  menu = document.querySelector(".menu");

// navbar button
menu.addEventListener("click", () => {
  menu.classList.add("active");
  navbar.classList.add("active");
  blend.classList.add("active");
  blend.onclick = () => {
    navbar.classList.remove("active");
    blend.classList.remove("active");
    menu.classList.remove("active");
  };
});

// creating images for the main img
let main_pic_par = document.querySelector(".main-pic");
let toggle = document.querySelector(".toggles");
let main_img = ["black-clover.jpg", "demon-slayer.jpg", "one-piece.jpg"],
  folder = "main-pic/";

for (i = 0; i < main_img.length; i++) {
  let image = document.createElement("img");
  image.src = `${folder}${main_img[i]}`;
  main_pic_par.appendChild(image);
  let tog = document.createElement("li");
  toggle.appendChild(tog);
}
let imgs = document.querySelectorAll(".main-pic img");
imgs[0].classList.add("active");
let circles = document.querySelectorAll(".toggles li");
circles[0].classList.add("active");

console.log(imgs);
let num = 0;
setInterval(() => {
  removeClasses(imgs);
  removeClasses(circles);
  imgs[num].classList.add("active");
  circles[num].classList.add("active");
  if (num < imgs.length - 1) {
    num++;
  } else {
    num = 0;
  }
}, 3000);

// removeing the class
function removeClasses(el) {
  el.forEach((e) => {
    e.classList.remove("active");
  });
}

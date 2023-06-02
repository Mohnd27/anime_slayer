let head = document.querySelector("header"),
  footer = document.querySelector("footer");

// creating header content
function creation() {
  // main text
  let title = document.createElement("a");
  title.classList.add("title");
  let title_text = document.createTextNode("anime");
  title.appendChild(title_text);
  head.appendChild(title);
  let span = document.createElement("span");
  let span_text = document.createTextNode(" world");
  span.appendChild(span_text);
  title.appendChild(span);
  // navbar
  let navbar = document.createElement("nav");
  navbar.classList.add("navbar");
  navbar.setAttribute("id", "navbar");
  let ul = document.createElement("ul");
  let li_text = [
    "home",
    "top rated",
    "last updates",
    "most popular",
    "coming soon",
    "my list",
  ];
  let li_id = [
    "home",
    "top-rated",
    "last-updates",
    "most-popular",
    "coming soon",
    "my-list",
  ];
  for (i = 0; i < li_text.length; i++) {
    let li = document.createElement("li");
    let li_content = document.createTextNode(li_text[i]);
    li.setAttribute("id", li_id[i]);
    li.appendChild(li_content);
    ul.appendChild(li);
    navbar.appendChild(ul);
  }
  head.appendChild(navbar);
  // creating pic icon

  let img_div = document.createElement("div");
  img_div.classList.add("pro-pic");
  let image_icon = document.createElement("img");
  image_icon.src = "main-pic/demon-slayer.jpg";
  img_div.appendChild(image_icon);
  navbar.appendChild(img_div);
  // creating gar
  let gar = document.createElement("div");
  gar.classList.add("gar");
  head.appendChild(gar);
  // creating menu icon
  let menu_icon = document.createElement("div");
  menu_icon.classList.add("menu");
  let menu_number = ["one", "two", "three"];
  for (i = 0; i < menu_number.length; i++) {
    let menu_span = document.createElement("span");
    menu_span.classList.add(menu_number[i]);
    menu_icon.appendChild(menu_span);
    head.appendChild(menu_icon);
  }
}

creation();

let anime_ep = [
  {
    id: 1,
    img: "black-clover.jpg",
    name: "black clover",
    type: ["action", "magic", "shonin"],
    number_stars: 4,
    stars: "fa-solid fa-star",
    rate: "7.3",
    episodes: 148,
  },
];

// anime episode image

let ep_image = document.querySelector(".ep-pic"),
  ep_name = document.querySelector(".ep_name_anime"),
  ep_type = document.querySelector(".anime-type"),
  num_stars = document.querySelector(".stars"),
  out_of = document.querySelector(".out_of"),
  ep_num = document.querySelector(".ep-scroll");

anime_ep.map((ep) => {
  ep_image.src = `small-pic/${ep.img}`;
  ep_name.innerHTML = ep.name;
  // creating el for type
  for (i = 0; i < ep.type.length; i++) {
    let type_li = document.createElement("li");
    type_li.innerHTML = ep.type[i];
    ep_type.appendChild(type_li);
  }
  // creating stars
  for (i = 0; i < 5; i++) {
    let st = document.createElement("i");
    if (i < ep.number_stars) {
      st.setAttribute("class", `${ep.stars} gold`);
    } else {
      st.setAttribute("class", `${ep.stars}`);
    }
    num_stars.appendChild(st);
  }
  out_of.innerHTML = ep.rate;
  // episode
  for (i = 1; i <= ep.episodes; i++) {
    let episode = document.createElement("li");
    episode.classList.add("ep-num");
    episode.innerHTML = i;
    ep_num.appendChild(episode);
  }
  document.querySelectorAll(".ep-num")[0].classList.add("active");
});

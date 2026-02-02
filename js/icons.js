// Define your icons here
const icons = [
  {
    label: "Newsletter",
    url: "http://samantha-leong.com/newsletter",
    normal: "images/icon1.png",
    hover: "images/icon1-hover.png"
  },
  {
    label: "Art",
    url: "https://samantha-leong.com/",
    normal: "images/icon2.png",
    hover: "images/icon2-hover.png"
  },
  {
    label: "About me",
    url: "http://samantha-leong.com/about",
    normal: "images/icon3.png",
    hover: "images/icon3-hover.png"
  }
];

const desktop = document.getElementById("desktop");

// Generate icons
icons.forEach(icon => {
  const a = document.createElement("a");
  a.href = icon.url;
  a.className = "icon";
  a.target = "_blank"; // open in new tab

  const imgContainer = document.createElement("div");
  imgContainer.className = "icon-image";

  const normalImg = document.createElement("img");
  normalImg.src = icon.normal;
  normalImg.alt = icon.label;
  normalImg.className = "normal";

  const hoverImg = document.createElement("img");
  hoverImg.src = icon.hover;
  hoverImg.alt = icon.label + " Hover";
  hoverImg.className = "hover";

  imgContainer.appendChild(normalImg);
  imgContainer.appendChild(hoverImg);

  const span = document.createElement("span");
  span.textContent = icon.label;

  a.appendChild(imgContainer);
  a.appendChild(span);

  desktop.appendChild(a);
});

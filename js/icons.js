let draggedIcon = null;
let offsetX = 0;
let offsetY = 0;
let isDragging = false;
let startX = 0;
let startY = 0;




// Define your icons here
const icons = [
  {
    label: "Newsletter",
    url: "https://samantha-leong.com/newsletter",
    normal: "images/icon1.png",
    hover: "images/icon1-hover.png",
    x: 100,
    y: 120
  },
  {
    label: "Art",
    url: "https://samantha-leong.com/",
    normal: "images/icon2.png",
    hover: "images/icon2-hover.png",
    x: 280,
    y: 140
  },
  {
    label: "About me",
    url: "https://samantha-leong.com/about",
    normal: "images/icon3.png",
    hover: "images/icon3-hover.png",
    x: 460,
    y: 160
  },
  {
    label: "",
    url: "https://samantha-leong.com",
    normal: "images/icon4.png",
    hover: "images/icon4-hover.png",
    size: 300,
    x: 320,
    y: 320
  }
];


// Generate icons
const desktop = document.getElementById("desktop");

icons.forEach(icon => {
  const a = document.createElement("a");
  a.href = icon.url;
  a.className = "icon";
  a.style.left = icon.x + "px";
  a.style.top = icon.y + "px";


  if (icon.center) {
    a.classList.add("center-icon");
  }

  const imgContainer = document.createElement("div");
  imgContainer.className = "icon-image";

  if (icon.size) {
    imgContainer.style.width = icon.size + "px";
    imgContainer.style.height = icon.size + "px";
  }

  const normalImg = document.createElement("img");
  normalImg.src = icon.normal;
  normalImg.className = "normal";

  const hoverImg = document.createElement("img");
  hoverImg.src = icon.hover;
  hoverImg.className = "hover";

  imgContainer.appendChild(normalImg);
  imgContainer.appendChild(hoverImg);

  const span = document.createElement("span");
  span.textContent = icon.label;

  a.appendChild(imgContainer);
  if (icon.label) a.appendChild(span);

  desktop.appendChild(a);
});



document.addEventListener("mousedown", e => {
  const icon = e.target.closest(".icon");
  if (!icon) return;

  draggedIcon = icon;
  const rect = icon.getBoundingClientRect();

  startX = e.clientX;
  startY = e.clientY;

  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

  isDragging = false;
  icon.style.zIndex = 999;
});

document.addEventListener("mousemove", e => {
  if (!draggedIcon) return;

  const dx = Math.abs(e.clientX - startX);
  const dy = Math.abs(e.clientY - startY);

  if (dx > 5 || dy > 5) {
    isDragging = true;
  }

  if (isDragging) {
    draggedIcon.style.left = e.clientX - offsetX + "px";
    draggedIcon.style.top = e.clientY - offsetY + "px";
  }
});


document.addEventListener("mouseup", () => {
  if (!draggedIcon) return;

  draggedIcon.style.zIndex = "";
  draggedIcon = null;
});


document.addEventListener("click", e => {
  const icon = e.target.closest(".icon");
  if (!icon) return;

  if (isDragging) {
    e.preventDefault();
    e.stopPropagation();
    isDragging = false;
  }
});



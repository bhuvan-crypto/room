const queryClassFunc = function (className) {
  return document.querySelector(`.${className}`);
};

const home = document.querySelector(".home");
const list = document.querySelector(".list");
const listItem = document.querySelector(".listitem");
let tabValue = document.querySelector(".tabValue");
const loginBtn = queryClassFunc("login");
const loginBox = queryClassFunc("loginBox");
const blurBackground = queryClassFunc("blurBackground");
const topbar = queryClassFunc("topbar");
const searchSection = queryClassFunc("searchSection");

// hiding tab

const removeTab = function (hovertab, itemContainer) {
  hovertabParent = hovertab.parentElement;
  hovertabParent.addEventListener("mouseleave", function (e) {
    itemContainer.classList.remove("showitemContainer");
  });
};

// displayning tab

const displayTab = function (hovertab) {
  const itemContainer = hovertab.nextElementSibling;
  itemContainer.classList.add("showitemContainer");
  removeTab(hovertab, itemContainer);
};

// Checking through list

list.addEventListener("mouseover", function (e) {
  const hovertab = e.target;
  hoverClass = e.target.classList[0];
  if (
    hoverClass === "home" ||
    hoverClass === "Services" ||
    hoverClass === "About" ||
    hoverClass === "Query" ||
    hoverClass === "Contact"
  ) {
    displayTab(hovertab);
  }
});

// handling clicks on the loginbtn

loginBtn.addEventListener("click", () => {
  loginBox.classList.remove("hidden");
  blurBackground.classList.remove("hidden");
});

blurBackground.addEventListener("click", () => {
  blurBackground.classList.add("hidden");
  loginBox.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    blurBackground.classList.add("hidden");
    loginBox.classList.add("hidden");
  }
});

// sticky navigation

const stickytopbar = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) topbar.classList.add("sticky");
  else topbar.classList.remove("sticky");
};

const topbarObserver = new IntersectionObserver(stickytopbar, {
  root: null,
  threshold: 0,
});

topbarObserver.observe(searchSection);

// section feature

const displaySection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(displaySection, {
  root: null,
  threshold: 0,
});

const allSections = document.querySelectorAll(".section");
allSections.forEach((section) => {
  section.classList.add("section-hidden");
  sectionObserver.observe(section);
});

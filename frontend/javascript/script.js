const queryClassFunc = function (className) {
  return document.querySelector(`.${className}`);
};

const home = document.querySelector(".home");
const list = document.querySelector(".list");
const listItem = document.querySelector(".listitem");
const tabValue = document.querySelector(".tabValue");
const loginBtn = queryClassFunc("login");
const loginBox = queryClassFunc("loginBox");
const blurBackground = queryClassFunc("blurBackground");

// hiding tab

const removeTab = function (hovertab, itemContainer) {
  hovertab.addEventListener("mouseout", function (e) {
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

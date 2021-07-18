const home = document.querySelector(".home");
const list = document.querySelector(".list");
const listItem = document.querySelector(".listitem");
const tabValue = document.querySelector(".tabValue");

const displayTab = function (hovertab) {
  const itemContainer = hovertab.nextElementSibling;
  itemContainer.style.opacity = 1;
  hovertab.addEventListener("mouseout", function (e) {
    itemContainer.style.opacity = 0;
  });
};

list.addEventListener("mouseover", function (e) {
  const hovertab = e.target;
  console.log(hovertab.classList);
  if (hovertab.classList.contains("home")) {
    displayTab(hovertab);
  }
  if (hovertab.classList.contains("Services")) {
    displayTab(hovertab);
  }
  if (hovertab.classList.contains("About")) {
    displayTab(hovertab);
  }
  if (hovertab.classList.contains("Contact")) {
    displayTab(hovertab);
  }
  if (hovertab.classList.contains("Query")) {
    displayTab(hovertab);
  }
});

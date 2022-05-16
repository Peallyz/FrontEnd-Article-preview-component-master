const share = document.getElementById("share-btn");
const popup = document.querySelector(".popup");
const img = document.querySelector("#share__arrow");
const icon = document.querySelector(".icon");

share.addEventListener("click", activePopup);
share.addEventListener("click", colorChanging);

function activePopup() {
  popup.classList.toggle("active");
}

function colorChanging() {
  img.classList.toggle("active");
  icon.classList.toggle("active");
}

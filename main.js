const btn = document.getElementById("btn");
const closeButton = document.getElementById("close");
const nav = document.querySelector(".desk-head");
const list = document.querySelectorAll(".common-li");

const portfolioLink = document.querySelector("#portfolio");
const portfolio = document.querySelector(".work-section");
const aboutLink = document.querySelector("#about");
const about = document.querySelector(".about-me");
const contactLink = document.querySelector("#contact");
const contact = document.querySelector(".last-contact");


// function closeBtn() {
//   nav.classList.remove("desk-li-menu");
//   nav.style.display = "none";
// }

function openPortfolio() {
  portfolio.scrollIntoView();
}

function openAbout() {
  about.scrollIntoView();
}

function openContact() {
  contact.scrollIntoView();
}

function navList() {
  nav.classList.add("desk-li-menu");
  nav.style.display = "block";
}

function openDeskDialog() {
  deskDialog.style.display = "block";
}

function closeDeskDialog() {
  deskDialog.style.display = "none";
}

list.forEach((element) => {
  element.addEventListener("click", closeBtn);
});

btn.addEventListener("click", navList);
closeButton.addEventListener("click", closeBtn);
portfolioLink.addEventListener("click", openPortfolio);
aboutLink.addEventListener("click", openAbout);
contactLink.addEventListener("click", openContact);

seeProjectOne.addEventListener("click", openDeskDialog);
closeDeskDialogBtn.addEventListener("click", closeDeskDialog);

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

const seeProjectsButton = document.querySelector(".invite-one");
const popUp = document.querySelector(".desk-popup");
const closeButton2 = document.querySelector(".close-popup");
const professionalArtDiv = document.querySelector(".professional-art");

const error = document.getElementById("error");
const submitForm = document.getElementById("form");
const submitBtn = document.getElementById("btn__submit");
// projects data

const projects = [
  {
    id: "one",
    name: "Data Dashboard Healthcare",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "icons/ImgPlaceholder6.png",
    technologies: ["html", "bootstrap", "Ruby"],
    liveLink: "www.google.com",
    sourceLink: "www.facebook.com",
    invite: "See Project",
  },

  {
    id: "two",
    name: "Data Dashboard Healthcare",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "icons/ImgPlaceholder6.png",
    technologies: ["html", "bootstrap", "Ruby"],
    liveLink: "www.google.com",
    sourceLink: "www.facebook.com",
    invite: "See Project",
  },

  {
    id: "three",
    name: "Website Portfolio",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "icons/ImgPlaceholder6.png",
    technologies: ["html", "bootstrap", "Ruby"],
    liveLink: "www.google.com",
    sourceLink: "www.facebook.com",
    invite: "See Project",
  },

  {
    id: "four",
    name: "Website Portfolio",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "icons/ImgPlaceholder6.png",
    technologies: ["html", "bootstrap", "Ruby"],
    liveLink: "www.google.com",
    sourceLink: "www.facebook.com",
    invite: "See Project",
  },
];

projects.map((project) => {
  const artContainerDiv = document.createElement("div");
  artContainerDiv.classList.add("art-container");
  artContainerDiv.classList.add(project.id);
  const artItemDiv = document.createElement("div");
  artItemDiv.classList.add("art-item");
  const h2Data = document.createElement("h2");
  h2Data.classList.add("data");
  const h2Node = document.createTextNode(project.name);
  const pSelection = document.createElement("p");
  pSelection.classList.add("selections");
  const pNode = document.createTextNode(project.description);
  const ulValue = document.createElement("ul");
  ulValue.classList.add("buttons");
  const li1 = document.createElement("li");
  const li1Node = document.createTextNode(project.technologies[0]);
  const li2 = document.createElement("li");
  const li2Node = document.createTextNode(project.technologies[1]);
  const li3 = document.createElement("li");
  const li3Node = document.createTextNode(project.technologies[2]);
  const button = document.createElement("button");
  button.classList.add("invite");
  const buttonEvent = () => {
    popUp.style.display = "block";
  };
  button.addEventListener("click", buttonEvent);
  const buttonNode = document.createTextNode(project.invite);

  artContainerDiv.appendChild(artItemDiv);
  h2Data.appendChild(h2Node);
  pSelection.appendChild(pNode);
  li1.appendChild(li1Node);
  li2.appendChild(li2Node);
  li3.appendChild(li3Node);
  ulValue.appendChild(li1);
  ulValue.appendChild(li2);
  ulValue.appendChild(li3);
  artItemDiv.appendChild(h2Data);
  artItemDiv.appendChild(pSelection);
  artItemDiv.appendChild(ulValue);
  button.appendChild(buttonNode);

  artContainerDiv.appendChild(artItemDiv);

  artContainerDiv.appendChild(button);

  professionalArtDiv.appendChild(artContainerDiv);
});

function closeBtn() {
  nav.classList.remove("desk-li-menu");
  nav.style.display = "none";
}

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

function inviteButton() {
  popUp.style.display = "block";
  portfolio.style.filter = "blur(5px)";
}

function closePopUp() {
  popUp.style.display = "none";
  portfolio.style.filter = "none";
}

function submitBtnFunction() {
  let emailValue = document.getElementById("email").value;
  let splittedEmail = emailValue.split("@")[0];
  let isLowerCase = true;

  for (let char of splittedEmail) {
    if (char === char.toUpperCase()) {
      isLowerCase = false;
    }
  }

  submitBtn.type = "button";

  if (!isLowerCase) {
    const errorParagraph = document.createElement("span");
    const errorNode = document.createTextNode(
      "All the email should be in Lower Case!!"
    );

    errorParagraph.appendChild(errorNode);

    error.appendChild(errorParagraph);
  } else {
    submitBtn.type = "submit";
    submitForm.action = "https://formspree.io/f/xnqwjqwy";
    submitForm.method = "post";
  }
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
seeProjectsButton.addEventListener("click", inviteButton);
closeButton2.addEventListener("click", closePopUp);

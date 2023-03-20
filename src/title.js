import { deleteContent } from "./empty";
import { createHome } from "./home";
import { createMenu } from "./menu";
import { createHours } from "./hours";
import { createFooter } from "./footer";

export function createTitle(content) {
  let header = document.createElement("header");
  content.appendChild(header);

  let name = document.createElement("h1");
  name.classList.add("name");
  let aname = document.createElement("a");
  aname.id = "aname";
  aname.textContent = "Seed Cafe";
  aname.addEventListener("click", eventHandler.bind(null, content), false);
  name.appendChild(aname);
  header.appendChild(name);

  let navbar = document.createElement("nav");
  header.appendChild(navbar);

  let navbarList = document.createElement("ul");
  navbar.appendChild(navbarList);

  let li1 = document.createElement("li");
  let ali1 = document.createElement("a");
  ali1.id = "ali1";
  ali1.classList.add("selectable");
  ali1.textContent = "Menu";
  ali1.addEventListener("click", eventHandler.bind(null, content), false);
  li1.appendChild(ali1);
  navbarList.appendChild(li1);

  // let li2 = document.createElement("li");
  // let ali2 = document.createElement("a");
  // ali2.id = "ali2";
  // ali2.classList.add("selectable");
  // ali2.textContent = "Reservations";
  // ali2.addEventListener("click", eventHandler.bind(null, content), false);
  // li2.appendChild(ali2);
  // navbarList.appendChild(li2);

  let li3 = document.createElement("li");
  let ali3 = document.createElement("a");
  ali3.id = "ali3";
  ali3.classList.add("selectable");
  ali3.textContent = "Hours & Location";
  ali3.addEventListener("click", eventHandler.bind(null, content), false);
  li3.appendChild(ali3);
  navbarList.appendChild(li3);

  // let li4 = document.createElement("li");
  // let ali4 = document.createElement("a");
  // ali4.id = "ali4";
  // ali4.classList.add("selectable");
  // ali4.textContent = "Contact";
  // ali4.addEventListener("click", eventHandler.bind(null, content), false);
  // li4.appendChild(ali4);
  // navbarList.appendChild(li4);
}

function eventHandler(content, event) {
  deleteContent(content);
  window.scrollTo(0, 0);
  createTitle(content);

  let clickedElement = document.getElementById(event.target.id);
  clickedElement.classList.remove("selectable");
  if (event.target.id !== "aname") {
    clickedElement.classList.add("selected");
    switch (event.target.id) {
      case "ali1":
        createMenu(content);
        break;
      case "ali3":
        createHours(content);
        break;
    }
  } else {
    createHome(content);
    createFooter(content);
  }
}

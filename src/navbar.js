export function createNavbar() {
  let content = document.getElementById("content");

  let navbar = document.createElement("nav");
  content.appendChild(navbar);

  let navbarList = document.createElement("ul");
  navbar.appendChild(navbarList);

  let li1 = document.createElement("li");
  li1.textContent = "Menu";
  navbarList.appendChild(li1);

  let li2 = document.createElement("li");
  li2.textContent = "Reservations";
  navbarList.appendChild(li2);

  let li3 = document.createElement("li");
  li3.textContent = "Hours and Locations";
  navbarList.appendChild(li3);

  let li4 = document.createElement("li");
  li4.textContent = "Contact";
  navbarList.appendChild(li4);
}

import cafeImgSrc from "./cafe.jpg";

export function createHome(content) {
  let text = document.createElement("p");
  text.id = "hometext";
  text.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

  const cafeImg = new Image();
  cafeImg.id = "cafe-img";
  cafeImg.src = cafeImgSrc;

  content.appendChild(text);
  content.appendChild(cafeImg);
}

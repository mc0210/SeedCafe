export function createMenu(content) {
  let menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  content.appendChild(menuContainer);
  let imgList = importAll(
    // eslint-disable-next-line no-undef
    require.context("./menuImgs", false, /\.(png|jpe?g|svg)$/)
  );

  let menuObjects = {
    item1: {
      imgSrc: imgList["coffee.jpg"],
      name: "Coffee",
      description: "Dark roasted with a hint of vanilla",
    },
    item2: {
      imgSrc: imgList["pizza.jpg"],
      name: "Pizza",
      description: "Cheesy and delicious",
    },
    item3: {
      imgSrc: imgList["plant.jpg"],
      name: "Plant",
      description: "Leafy green vegetable",
    },
  };

  for (const prop in menuObjects) {
    createMenuItem(
      menuObjects[prop]["imgSrc"],
      menuObjects[prop]["name"],
      menuObjects[prop]["description"],
      menuContainer
    );
  }
}

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function createMenuItem(img, name, description, container) {
  let item = document.createElement("div");
  item.classList.add("item");
  container.appendChild(item);

  const menuImg = new Image();
  menuImg.src = img;

  let itemName = document.createElement("div");
  itemName.classList.add("item-name");
  itemName.textContent = name;

  let menuDescription = document.createElement("div");
  menuDescription.textContent = description;

  item.appendChild(menuImg);
  item.appendChild(itemName);
  item.appendChild(menuDescription);
}

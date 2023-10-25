const gameListTabsItems = document.getElementsByClassName("tab");
const menuBtn = document.getElementById("menu-btn");
const searchBar = document.getElementById("search-bar__input");
const menuUl = document.getElementById("menu-ul");
const nav = document.getElementById("nav");
const gameListContainer = document.getElementById("game-list-container__games");

const gameListElems = document.getElementsByClassName(
  "game-list-container__games"
);

const games = [
  {
    name: "FarCry 6",
    genre: "Horror - First Person",
    img: "FarCry6.webp",
    link: "farcry6",
    price: "29,99€",
    op: ["Windows.svg", "Linux.svg", "Apple.svg"],
  },
  {
    name: "Darkest Dungeon",
    genre: "Horror - First Person",
    img: "Darkest Dungeon.webp",
    link: "darkestdungeons",
    price: "19,99€",
    op: ["Windows.svg", "Apple.svg"],
  },
  {
    name: "Crusader Kings 3",
    genre: "Historical - RGB",
    img: "Crusader.webp",
    link: "crusader",
    price: "39,99€",
    op: ["Windows.svg", "Linux.svg"],
  },
  {
    name: "Days Gone",
    genre: "Survival - Third Person",
    img: "Days_gone.webp",
    link: "daysgone",
    price: "49,99€",
    op: ["Windows.svg", "Apple.svg"],
  },
  {
    name: "Stellaris",
    genre: "Sci-fi - Strategy",
    img: "Stellaris.webp",
    link: "stellaris",
    price: "15,45€",
    op: ["Windows.svg"],
  },
];

const gameList = [
  // New
  [
    { game: games[0] },
    { game: games[3] },
    { game: games[2] },
    { game: games[1] },
    { game: games[4] },
  ],
  // Top
  [
    { game: games[3] },
    { game: games[2] },
    { game: games[1] },
    { game: games[4] },
    { game: games[0] },
  ],
  // Upcoming
  [
    { game: games[2] },
    { game: games[0] },
    { game: games[4] },
    { game: games[1] },
    { game: games[3] },
  ],
  // Trending
  [
    { game: games[4] },
    { game: games[2] },
    { game: games[0] },
    { game: games[1] },
    { game: games[3] },
  ],
];

for (elem of gameListTabsItems) {
  elem.addEventListener("click", function (e) {
    e.preventDefault();
    for (elem of gameListTabsItems) {
      elem.classList.remove("selected");
    }
    this.classList.add("selected");
    switch (this.id) {
      case "tab-1":
        getGame(gameList[0], "New");
        break;
      case "tab-2":
        getGame(gameList[1], "Top");
        break;
      case "tab-3":
        getGame(gameList[2], "Upcoming");
        break;
      case "tab-4":
        getGame(gameList[3], "Trending");
        break;
      default:
        getGame(gameList[0], "New");
    }
  });
}

const getGame = (games) => {
  //clear previously created game cards
  for (item of gameListElems) {
    item.innerHTML = "";
  }

  //create game cards
  for (elem of games) {
    const gameCard = document.createElement("article");
    gameCard.classList.add("game-list__card");
    gameCard.setAttribute("role", "article");
    gameCard.setAttribute("tabindex", "0");

    const gameImg = document.createElement("img");
    gameImg.classList.add("game-list__card__img");
    gameImg.src = `/images/${elem.game.img}`;
    gameImg.alt = `${elem.game.name} Cover Image`;

    const gameCardContent = document.createElement("div");
    gameCardContent.classList.add("game-list__card-container");

    const titleGenreContainer = document.createElement("div");
    titleGenreContainer.classList.add("game-list__card-title-genre-container");

    const gameTitle = document.createElement("h3");
    gameTitle.classList.add("game-list__card__title");
    gameTitle.textContent = elem.game.name;

    const gameGenre = document.createElement("h4");
    gameGenre.classList.add("game-list__card__genre");
    gameGenre.textContent = elem.game.genre;

    titleGenreContainer.appendChild(gameTitle);
    titleGenreContainer.appendChild(gameGenre);

    const osPriceContainer = document.createElement("div");
    osPriceContainer.classList.add("game-list__card__os__price-container");

    const osContainer = document.createElement("div");
    osContainer.classList.add("game-list__card__os-container");

    for (let op of elem.game.op) {
      if (op) {
        const osImg = document.createElement("img");
        osImg.classList.add("game-list__card__os");
        osImg.src = `/icons/${op}`;
        osContainer.appendChild(osImg);
      }
    }

    const priceContainer = document.createElement("div");
    priceContainer.classList.add("game-list__card__price-container");

    const gamePrice = document.createElement("h3");
    gamePrice.textContent = elem.game.price;

    priceContainer.appendChild(gamePrice);

    osPriceContainer.appendChild(osContainer);
    osPriceContainer.appendChild(priceContainer);

    gameCardContent.appendChild(titleGenreContainer);
    gameCardContent.appendChild(osPriceContainer);

    gameCard.appendChild(gameImg);
    gameCard.appendChild(gameCardContent);

    gameListContainer.appendChild(gameCard);
  }
};

getGame(gameList[0]);

/////////////////////////
menuBtn.addEventListener("click", function () {
  nav.classList.add("show");
  menuBtn.classList.add("hide");
  menuBtn.focus();
  menuUl.setAttribute("aria-expanded", true);
  menuUl.setAttribute("aria-hidden", false);
  menuBtn.setAttribute("aria-expanded", true);
});

window.addEventListener("click", function (e) {
  if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
    nav.classList.remove("show");
    menuBtn.classList.remove("hide");
    menuBtn.focus();
    menuUl.setAttribute("aria-expanded", false);
    menuUl.setAttribute("aria-hidden", true);
    menuBtn.setAttribute("aria-expanded", false);
  }
  // Set focus to search bar if the click event did not occur on the menu button or navigation
  if (searchBar.contains(e.target)) {
    searchBar.focus();
  }
});

// select from gamelist

// Your JavaScript code here
const tabs = document.querySelectorAll("[role='tab']");
let defaultSelectedTab = tabs[0];

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    selectTab(tab);
  });

  tab.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectTab(tab);
    }
  });
});

function selectTab(selectedTab) {
  tabs.forEach((tab) => {
    tab.setAttribute("aria-selected", "false");
    tab.classList.remove("selected");
    tab.setAttribute("tabindex", "0");
  });

  selectedTab.setAttribute("aria-selected", "true");
  selectedTab.classList.add("selected");
  selectedTab.setAttribute("tabindex", "0");

  if (defaultSelectedTab !== selectedTab) {
    defaultSelectedTab.classList.remove("selected");
  }
}

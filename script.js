const gameListTabsItems = document.getElementsByClassName("tab");
// const closeBtn = document.getElementById("close-btn");
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");
const gameListContainer = document.getElementById("game-list-container__games");

const gameListElems = document.getElementsByClassName(
  "game-list-container__games"
);

const games = [
  {
    name: "FarCry 6",
    genre: "Horror - First Person",
    img: "FarCry6.PNG",
    link: "farcry6",
    price: "49,99€",
    op: ["Windows.svg", "Linux.svg", "Apple.svg"],
  },
  {
    name: "Darkest Dungeon",
    genre: "Horror - First Person",
    img: "Darkest Dungeon.PNG",
    link: "darkestdungeons",
    price: "49,99€",
    op: ["Windows.svg", "Linux.svg", "Apple.svg"],
  },
  {
    name: "Crusader Kings 3",
    genre: "Historical - RGB",
    img: "Crusader.PNG",
    link: "crusader",
    price: "49,99€",
    op: ["Windows.svg", "Linux.svg", "Apple.svg"],
  },
  {
    name: "Days Gone",
    genre: "Survival - Third Person",
    img: "Days_gone.PNG",
    link: "daysgone",
    price: "49,99€",
    op: ["Windows.svg", "Linux.svg", "Apple.svg"],
  },
  {
    name: "Stellaris",
    genre: "Sci-fi - Strategy",
    img: "Stellaris.PNG",
    link: "stellaris",
    price: "49,99€",
    op: ["Windows.svg", "Linux.svg", "Apple.svg"],
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
  elem.addEventListener("click", function () {
    for (elem of gameListTabsItems) {
      elem.classList.remove("selected");
    }
    this.classList.add("selected");
    switch (this.id) {
      case "tab-1":
        getGame(gameList[0]);
        break;
      case "tab-2":
        getGame(gameList[1]);
        break;
      case "tab-3":
        getGame(gameList[2]);
        break;
      case "tab-4":
        getGame(gameList[3]);
        break;
      default:
        getGame(gameList[0]);
    }
  });
}

menuBtn.addEventListener("click", function (e) {
  nav.classList.add("show");
  menuBtn.classList.add("hide");
});

window.addEventListener("click", function (e) {
  if (
    !document.getElementById("nav").contains(e.target) &&
    !document.getElementById("menu-btn").contains(e.target)
  ) {
    nav.classList.remove("show");
    menuBtn.classList.remove("hide");
  }
});

const getGame = (games) => {
  //remove old game cards
  var doubled = games.map(function (game) {
    console.log(game.game.op[0]);
    // return game.game.op;
    return game.game.op[0];
  });

  for (item of gameListElems) {
    // console.log("item", item);
    item.innerHTML = "";
  }

  for (elem of games) {
    let gameCardContent = `
    <div class="game-list__card">
    <img class="game-list__card__img" src="/images/${elem.game.img}">
    <div class="game-list__card-container">
        <div class="game-list__card-title-genre-container">
          <h3 class="game-list__card__title">${elem.game.name}</h3>
          <h4 class="game-list__card__genre">${elem.game.genre}</h4>
        </div>
        <div class="game-list__card__os__price-container">
            <div class="game-list__card__os-container" id="game-list__card__os-container">
            <img class="game-list__card__os" src="/icons/${
              elem.game.op[0] && elem.game.op[0]
            }"  />
            <img class="game-list__card__os" src="/icons/${
              elem.game.op[1] && elem.game.op[1]
            }" />
            <img class="game-list__card__os" src="/icons/${
              elem.game.op[2] && elem.game.op[2]
            }" />
            </div>
            <div class="game-list__card__price-container">
                <h3 class="game-list__card__price highlight-color">${
                  elem.game.price
                }</h3>
            </div>
        </div>
        </div>
        </div>`;

    const gameCard = document.createElement("div");
    gameListContainer.appendChild(gameCard);
    gameCard.innerHTML = gameCardContent;
  }
};

getGame(gameList[0]);

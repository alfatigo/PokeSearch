const API_URL = "https://pokeapi.co/api/v2/pokemon";
let inptSearch = document.querySelector("#search");
let searchBtn = document.querySelector("#searchBtn");

window.addEventListener("load", () => {

  searchBtn.addEventListener("click", (e) => {
    Render(getData(API_URL, inptSearch.value));
    console.log(Render(getData(API_URL, inptSearch.value)))
  });

  Render(getData(API_URL));
});

async function getData(url, query) {
  if(inptSearch.value = ''){
          const response = await fetch(`${url/query}`);
          const results = await response.json();
          return results;
  }

  const response = await fetch(url);
  const results = await response.json();
  return results["results"];
}

async function Render(data) {
  let pokemons = [];
  pokemons = await data;
  let container = document.querySelector(".cards");

  pokemons.map((pokemon) => {
    let url = new URL(`${pokemon["url"]}`);
    id = url.pathname.split("/")[4];

    let cards = document.querySelector(".cards");
    let card = document.createElement("div");
    card.classList = "card";

    let card__img = document.createElement("div");
    card__img.classList = "card__img";

    let img = document.createElement("img");
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    img.alt = `${pokemon["name"]}.png`;
    card__img.appendChild(img);

    let card__content = document.createElement("div");
    card__content.classList = "card__content";

    let card__text = document.createElement("p");
    card__text.classList = "card__text text--title";
    card__text.textContent = pokemon["name"];

    let card__info = document.createElement("div");
    card__info.classList = "ard__info";

    let card__id = document.createElement("p");
    card__id.classList = "card__id";
    card__id.textContent = id;

    card__img.appendChild(img);
    card__content.appendChild(card__text);
    card__content.appendChild(card__id);

    card.append(card__img);
    card.append(card__content);

    container.append(card);
  });
}

async function findPokemon(quey) {}

/* <div class="card">
<div class="card__img">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
    alt="charmeleon.png">
</div>
<div class="card__content">
  <p class="card__text text--title">Charmeleon</p>
  <div class="card__info">
    <p class="card__id">5</p>
    <div class="card__type">
      <h5 class="card-type">fire</h5>
    </div>            
  </div>
</div>
</div> */

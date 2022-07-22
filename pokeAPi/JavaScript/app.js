// document.addEventListener("DOMContentLoaded", init, false);

// let data;
// const pageSize = 4;
// let curPage = 1;
// let pokeName = document.querySelector("#pokeName");
// async function init() {
//   const res = await fetch(
//     "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10000"
//   );

//   data = await res.json();
//   allPokemonsRender();

//   document.querySelector("#nextBtn").addEventListener("click", nextPage, false);
//   document.querySelector("#prevBtn").addEventListener("click", previosPage, false);
// }

// function allPokemonsRender() {
//   let pokemons = "";
//     let pokeCard = document.createElement('div');
    
//   data["results"]
//     .filter((item, index) => {
//       let start = (curPage - 1) * pageSize;
//       let end = curPage * pageSize;
//       console.log(start);
//       if (index >= start && index < end) return true;
//     })
//     .forEach((poke) => {
//       let url = poke.url;
//       let str = url.split("/");
//       const id = str.at(-2);
//       pokemons += `
//       <li >${poke.name}</li>
//         <img src ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png'> 
//       `;
//     });
//   //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
//   pokeName.innerHTML = pokemons;
// }

// function previosPage() {
//   if (curPage > 1) curPage--;
//   allPokemonsRender();
// }

// function nextPage() {
//   if (curPage * pageSize < data["results"].length) curPage++;
//   allPokemonsRender();
// }

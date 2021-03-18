// Skapar ny variabel som tar query från urlen (det som står efter frågetecknet)
const urlParams = new URLSearchParams(window.location.search);
//använder metoden get() med parametern url för att komma åt det som står i queriet för url
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get förklarar bra
let uri = urlParams.get("url");
// console.log(uri);
// console.log(urlParams);

//Gör sedan en ny fetch på den nya urlen som tagits fram för att få aktuell data
// från API:t som matchar den data som användaren tryckt på i sökningen
fetch(uri)
  // Gör om data till json
  .then((response) => response.json())
  // LÄgger datan i en variabel
  .then((y) => {
    detailed = y;
    // console.log(detailed);
    // Skickar denna data som parameter till funktionen detailedPage
    detailedPage(detailed);
  });

// Funktion för att skriva ut ny data på detaljsidan
// I och med att det bara är en film som ska visas på detaljsidan behövs ingen loop.
// Funktionen får data från fetch ovan som den skriver ut med hjälp av DOM
// i de element som redan skapats i html-filen. Hittar element med hjälp av html-id.
function detailedPage(detailed) {
  // console.log(detailed);
  document.getElementById("title").innerHTML = `${detailed.title}`;
  document.getElementById(
    "episode-id"
  ).innerHTML = `<span>Episode ID: </span>${detailed.episode_id}`;
  document.getElementById(
    "opening-crawl"
  ).innerHTML = `<span>Opening Crawl: </span>${detailed.opening_crawl}`;
  document.getElementById(
    "director"
  ).innerHTML = `<span>Director: </span>${detailed.director}`;
  document.getElementById(
    "producer"
  ).innerHTML = `<span>Producer: </span>${detailed.producer}`;
  document.getElementById(
    "release-date"
  ).innerHTML = `<span>Release Date: </span>${detailed.release_date}`;
  document.getElementById(
    "characters"
  ).innerHTML = `<span>Characters: </span>${detailed.characters.length}`;
  document.getElementById(
    "planets"
  ).innerHTML = `<span>Planets: </span>${detailed.planets.length}`;
  document.getElementById(
    "starships"
  ).innerHTML = `<span>Starships: </span>${detailed.starships.length}`;
  document.getElementById(
    "vehicles"
  ).innerHTML = `<span>Vehicles: </span>${detailed.vehicles.length}`;
  document.getElementById(
    "species"
  ).innerHTML = `<span>Species: </span>${detailed.species.length}`;
}

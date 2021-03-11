// Funktion för att skriva ut detaljer
const urlParams = new URLSearchParams(window.location.search);
let uri = urlParams.get("url");
console.log(uri);

fetch(uri)
  .then((response) => response.json())
  .then((y) => {
    detailed = y;
    console.log(detailed);
    detailedPage(detailed);
  });

// Till denna output av data har jag inspirerats av kod från YT-videon om star wars api:t
// samt även väderapplikationen

function detailedPage(detailed) {
  console.log(detailed);
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

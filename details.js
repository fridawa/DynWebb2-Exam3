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
  ).innerHTML = `Episode ID: ${detailed.episode_id}`;
  document.getElementById(
    "opening-crawl"
  ).innerHTML = `Opening Crawl: ${detailed.opening_crawl}`;
  document.getElementById(
    "director"
  ).innerHTML = `Director: ${detailed.director}`;
  document.getElementById(
    "producer"
  ).innerHTML = `Producer: ${detailed.producer}`;
  document.getElementById(
    "release-date"
  ).innerHTML = `Release Date: ${detailed.release_date}`;
  document.getElementById(
    "characters"
  ).innerHTML = `Characters: ${detailed.characters.length}`;
  document.getElementById(
    "planets"
  ).innerHTML = `Planets: ${detailed.planets.length}`;
  document.getElementById(
    "starships"
  ).innerHTML = `Starships: ${detailed.starships.length}`;
  document.getElementById(
    "vehicles"
  ).innerHTML = `Vehicles: ${detailed.vehicles.length}`;
  document.getElementById(
    "species"
  ).innerHTML = `Species: ${detailed.species.length}`;
}

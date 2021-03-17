// Hämtar data från API för att skriva ut på detaljsidan
const urlParams = new URLSearchParams(window.location.search);
let uri = urlParams.get("url");
console.log(uri);

fetch(uri)
  // Gör om data till json
  .then((response) => response.json())
  .then((y) => {
    detailed = y;
    console.log(detailed);
    // Skickar även denna data som parameter till funktionen detailedPage
    detailedPage(detailed);
  });

// Funktion för att skriva ut ny data på detaljsidan
// Till denna output av data har jag inspirerats av kod från
// YouTube-videon https://www.youtube.com/watch?v=Y6fhfs6nBww som även den behandlar SW-API:t
// Jag har även hämtat inspirtion från väderapplikationen i exam 2 som även den skriver ut data från ett API.
// Koden nedan är alltså en blanding av mitt egna och de två källorna.
// Funktionen får data från fetch ovan som den skriver ut med hjälp av DOM
// i de element som redan skapats i html-filen. Hittar element med hjälp av html-id.
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

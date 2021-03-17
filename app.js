// Skapar arrayen där datan ska sparas
let filmArray = [];

// sätter variabeln URL till API-adressen
const url = "https://swapi.dev/api/films/";

// En vanlig fetch som tar variabeln url som paramteter(argument?)
fetch(url)
  // .then som OM responsen är ok tar responsen och översätter den till json.format
  // om det inte är så så ska ett felmeddelande visas
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something went wrong");
    }
  })

  // .then som lägger datan från API i en mer semantisk variabel
  .then((x) => {
    // vill bara ha .results för det är där i som all data som ska anävndas finns
    filmArray = x.results;
    console.log(filmArray);
  })

  //om fel visas error
  .catch((error) => {
    alert(error);
  });

// Funktion som kollar om imputen från sökningen matchar någon av titlarna i API:t
// Kod hämtad från Johans väderapplikation
// title och input anges som paramterar
// title är filmtiteln och input är söksträngen från inputen
// Funktionen använder  substr samt localeCompare
// Substr startar på index 0 i den aktuella strängen (input) och fortsätter så långt som strängen är
// localecompare jämför sedan strängen med titeln för att se om det matchar.
// Det är alltså bara början av orden som kan matchas
// Returnerar true om det matchar
function matchSubstring(title, input) {
  return (
    title.substr(0, input.length).localeCompare(input, "en", {
      sensitivity: "base",
    }) === 0
  );
}

// SÖK EFTER FILM
// först sökknappen som kopplas till en eventlistener vid klick som triggar funktionen searchFilm
document.getElementById("btn-login").addEventListener("click", searchFilm);

// Funktionen inpirerad av Johans väderapplikation blandat med föreläsningar i kursen
function searchFilm() {
  // Lägger olika html-element i variabler
  const inputElement = document.getElementById("search-input");
  const searchResultsElement = document.getElementById("search-result");
  const templateFilm = document.getElementById("template-film");
  // trim() på query för att enklare kunna hantera strängen
  // trim tar bort om det skulle vara space i början och slutet av en sträng
  // påvekrar alltså inte tex mellanslag mitt i en mening
  const query = inputElement.value.trim();

  if (query.length === 0) return; // Stoppar funktionen här (alltså söker ej) om inget angetts i sökfältet

  // anger en variabel movies. Den får innehållet från den söksträng som matchas i funktionen
  // filtrerar filmarrayen och returnerar det som finns i funtkionen matchsubstring
  let movies = filmArray.filter(function (film) {
    return matchSubstring(film.title, query);
  });

  searchResultsElement.innerHTML = ""; // Tömmer sökresultaten mellan varje klick på sök-knappen

  // Med det värde som nu ligger i variabeln movies görs en forEach loop
  // som itererar över innehållet i aktuell film och skriver ut detta mha DOM
  // Inehållet skrivs ut i templaten som sedan appensas med appendChild på searchResultsElement
  movies.forEach((film) => {
    let element = document.importNode(templateFilm.content, true);
    element.querySelector(".title").innerHTML = `${film.title}`;
    element.querySelector(
      ".director"
    ).innerHTML = `<span> Director: </span>${film.director}`;
    element.querySelector(
      ".opening-crawl"
    ).innerHTML = `<span>Opening Crawl: </span>${film.opening_crawl}`;

    element.querySelector(
      ".link-to-details"
    ).href = `details.html?url=${film.url.replace("http", "https")}`; //Safari funkade inte med http

    searchResultsElement.appendChild(element);
  });
}

// Global variabel
let modal = document.getElementById("modal");

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

// Funktion som kollar om inputen från sökningen matchar någon av titlarna i API:t
// Kod inpirerad av Johans väderapplikation
// title och input anges som paramterar
// title är filmtiteln och input är söksträngen från inputen
// Substr startar på index 0 i den aktuella strängen (input) och fortsätter strängens längd
// Localecompare jämför sedan strängen med titeln för att se om det matchar.
// Det är alltså bara början av orden som kan matchas
// Returnerar true om det matchar
function matchInput(title, input) {
  return (
    title.substr(0, input.length).localeCompare(input, "en", {
      sensitivity: "base",
    }) === 0
  );
}

// SÖK EFTER FILM
// först sökknappen som kopplas till en eventlistener vid klick som triggar funktionen searchFilm
document.getElementById("btn-search").addEventListener("click", searchFilm);

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

  // Felmeddelande i modal samt konsollen om inputfältet är tomt
  // läst på om felmeddelanden hos:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
  try {
    if (query.length === 0)
      throw "You have to write a movie name in the input field"; // kollar om fältet är tomt
  } catch (err) {
    //annars visas felmeddelande
    console.error(err); // i konsollen
    modal.style.display = "block"; // och som en modal för användaren
    return; // Stoppar funktionen här om inget angetts i sökfältet
  }

  // anger en variabel movies. Den får innehållet från den söksträng som matchas i funktionen
  // filtrerar filmarrayen och returnerar det som finns i funtkionen matchInput
  let movies = filmArray.filter(function (film) {
    return matchInput(film.title, query);
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
    ).href = `details.html?url=${film.url.replace("http", "https")}`; //replace pga Safari funkade inte med http

    searchResultsElement.appendChild(element);
  });
}

// Stänger modalen med felmeddelande
// vid klick på krysset
function closeModal() {
  modal.style.display = "none";
}

// eller klick utanför boxen
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

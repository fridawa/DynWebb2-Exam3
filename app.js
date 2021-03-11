// Skapar arrayen där datan ska sparas
let filmArray = [];

// URL till API
const url = "https://swapi.dev/api/films/";

// Fetch
fetch(url)
  // Översätter datan till json-format
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something went wrong");
    }
  })

  // Lägger datan från API i en variabel
  .then((x) => {
    filmArray = x.results;
    console.log(filmArray);
  })

  .catch((error) => {
    alert(error);
  });

// kod från johans väderapplikation
// förstå detta bättre innan inlämning!!!
function matchSubstring(main, sub) {
  return (
    main.substr(0, sub.length).localeCompare(sub, "sv", {
      sensitivity: "base",
    }) === 0
  );
}

// SÖK EFTER FILM
// Vid tid över: Fixa så att även tryck på keyup: enter funkar
document.getElementById("btn-login").addEventListener("click", searchFilm);

// kod från johans väderapplikation
function searchFilm() {
  const inputElement = document.getElementById("search-input");
  const searchResultsElement = document.getElementById("search-result");
  const templateFilm = document.getElementById("template-film");
  const query = inputElement.value.trim();

  if (query.length === 0) return; // Stoppar funktionen här (alltså söker ej) om inget angetts i sökfältet

  let selection = filmArray.filter((film) => matchSubstring(film.title, query));

  searchResultsElement.innerHTML = ""; // Tömmer sökresultaten mellan varje klick på sök-knappen

  selection.forEach((film) => {
    let element = document.importNode(templateFilm.content, true);
    element.querySelector(".title").textContent = `${film.title}`;
    element.querySelector(
      ".director"
    ).textContent = `Director: ${film.director}`;
    element.querySelector(
      ".opening-crawl"
    ).textContent = `Opening Crawl: ${film.opening_crawl}`;

    element.querySelector(
      ".link-to-details"
    ).href = `details.html?url=${film.url}`;

    searchResultsElement.appendChild(element);
  });

  console.log(query);
}

// // FETCH DATA
// // Denna del av koden är till stor del hämtad från föreläsningen om fetch
// // Men anpassats för att funka ihop med resterande delar av min egen kod

// // Skapar arrayen där datan ska sparas
// let filmArray = [];

// // URL till API
// // const url = "http://webbred2.utb.hb.se/~fewe/api/api.php?data=courses";
// const url = "https://swapi.dev/api/films/";

// // Fetch
// fetch(url)
//   // Översätter datan till json-format
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//   })
//   // Lägger datan från API i en variabel
//   .then((x) => {
//     filmArray = x;
//     console.log(filmArray);
//   });

// FETCH DATA
// Denna del av koden är till stor del hämtad från föreläsningen om fetch
// Men anpassats för att funka ihop med resterande delar av min egen kod

// Skapar arrayen där datan ska sparas
let coursesArray = [];

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
    coursesArray = x;
    console.log(coursesArray);
    createTable(coursesArray); // Kallar på funktionen så att kurserna visas
  })

  .catch((error) => {
    alert(error);
  });

//TEMPLATE FÖR KURSERNA
function createTable(courses) {
  // Sätter HTML-templaten till en egen variabel för att smidigare kunna ange denna
  let template = document.getElementById("courses-card-template");

  for (let i = 0; i < courses; i++) {
    let clone = template.content.cloneNode(true);
    clone.querySelector("#courseName").textContent += courses[i].count;
    console.log(courses[i]);
    document.getElementById("course-cards").appendChild(clone);
  }
  // Funktion som skapar templaten
  // Itererar över alla element inuti coursesArray
  // courses.forEach(function (c) {
  //   // Gör en clone av templaten som innehåll sedan kan läggas i
  //   let clone = template.content.cloneNode(true);

  //   // Hämtar element från den klonade templaten och sätter i dessa olika data från APIt
  //   clone.querySelector("#courseName").textContent = c.count;
  //   clone.querySelector("#courseId").innerHTML = c.count;

  //   // Appendar clonen till diven med ID course-cards i HTML-dokumentet
  //   document.getElementById("course-cards").appendChild(clone);
  // });
}

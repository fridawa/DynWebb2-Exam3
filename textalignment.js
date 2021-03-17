function init() {
  document.getElementById("centered").addEventListener("click", function () {
    document
      .querySelectorAll(".details-div, #search-result")
      .forEach(function (el) {
        el.style.textAlign = "center";
      });
  });
  document
    .getElementById("left-aligned")
    .addEventListener("click", function () {
      document
        .querySelectorAll(".details-div, #search-result")
        .forEach(function (el) {
          el.style.textAlign = "left";
        });
    });
}

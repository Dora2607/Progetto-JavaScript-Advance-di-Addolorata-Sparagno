import "./css/style.css";
const _ = require('lodash');

const subjects = require("./js/subjects");

const showSuggestions = require("./js/showSuggestions");

const searchBar = document.getElementById("searchBar");
if (searchBar != null) {
  // Add event listener for the input field
  searchBar.addEventListener("input", function () {
    const value = this.value;
    // Show suggestions when there are characters in the input field and hide them otherwise
    showSuggestions(value, subjects);
  });
}

const createObj = require("./js/createObj");
const createPreview = require("./js/createPreview");
const showDescription = require("./js/showDescription");
const fetchImage = require("./js/showDescription");

const searchButton = document.querySelector(".searchButton");
searchButton.addEventListener("click", async () => {
  const searchBar = document.getElementById("searchBar");
  let newUserInput = searchBar.value;
  if (newUserInput === "") {
    alert("Inserire un testo per effettuare la ricerca");
    return false;
  } else {
    let userInput = newUserInput.toLowerCase();
    userInput = userInput.replace(/ /g, "");
    await createPreview(userInput);
    searchBar.value = "";
    const linkDescription = document.querySelectorAll(".linkDescription");
    linkDescription.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        let key = link.id;
        showDescription(key);

      });
    });
  }
});

import "./css/style.css";

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

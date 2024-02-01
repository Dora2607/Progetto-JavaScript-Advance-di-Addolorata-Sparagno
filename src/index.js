// Import necessary modules and libraries
import "./css/style.css";
import "./asset/img/iconsX.png";

// Import functions for creating book objects, previews, and getting book info
import { subjects } from "./js/subjects";
import { showSuggestions } from "./js/showSuggestions";
import { createPreview } from "./js/createPreview";
import { getInfoBook } from "./js/getInfoBook";
import { showModal } from "./js/showModal";

// Import images
const coverContext = require.context("./asset/img", false, /cover[1-3]\.jpg$/);
coverContext.keys().map(coverContext);
const logoContext = require.context(
  "./asset/logo",
  false,
  /\.(png|jpe?g|svg)$/,
);
logoContext.keys().map(logoContext);

// Add an event listener to the search bar for input events
const searchBar = document.getElementById("searchBar");
if (searchBar != null) {
  searchBar.addEventListener("input", function () {
    const value = this.value;
    showSuggestions(value, subjects);
  });
}

// Add a click event listener to the search button
const searchButton = document.querySelector(".searchButton");
searchButton.addEventListener("click", async () => {
  const searchBar = document.getElementById("searchBar");
  const newUserInput = searchBar.value;
  if (newUserInput === "") {
    alert("Enter text to search");
    return false;
  } else {
    let userInput = newUserInput.toLowerCase();
    userInput = userInput.replace(/ /g, "");
    await createPreview(userInput);
    searchBar.value = "";
    const linkDescription = document.querySelectorAll(".linkDescription");
    linkDescription.forEach((link) => {
      link.addEventListener("click", async (e) => {
        e.preventDefault();
        const bookCardId = link.parentNode.parentNode;
        const coverKey = bookCardId.id;
        const key = link.id;
        const showInfoBook = await getInfoBook(key, coverKey);
        showModal(link, showInfoBook[0].description, showInfoBook[0].coverBook);
        const modalBook = document.getElementById("modalBook");
        modalBook.style.display = "flex";
        const results = document.getElementById("results");
        results.style.display = "none";
      });
    });
  }
});

// Add a click event listener to the searchBar
searchBar.addEventListener("click", function () {
  const modalBook = document.getElementById("modalBook");
  modalBook.style.display = "none";
  const results = document.getElementById("results");
  results.style.display = "flex";
});

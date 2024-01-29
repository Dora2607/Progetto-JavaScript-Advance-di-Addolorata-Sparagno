// Import necessary modules and libraries
import "./css/style.css";
const _ = require("lodash");

// Import images 
const coverContext = require.context('./asset/img', false, /cover[1-3]\.jpg$/);
const covers = coverContext.keys().map(coverContext);
import iconsX from "./asset/img/iconsX.png";
const logoContext = require.context('./asset/logo', false, /\.(png|jpe?g|svg)$/);
const logos = logoContext.keys().map(logoContext);
const demoContext = require.context('./asset/demo', false, /\.(png|jpe?g|svg)$/);
const demo = logoContext.keys().map(demoContext);

// Import functions for creating book objects, previews, and getting book info
const subjects = require("./js/subjects");
const showSuggestions = require("./js/showSuggestions");
const createObj = require("./js/createObj");
const createPreview = require("./js/createPreview");
const getInfoBook = require("./js/getInfoBook");
const showModal = require("./js/showModal");




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
  let newUserInput = searchBar.value;
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
        let  bookCardId = link.parentNode.parentNode;
        let coverKey = bookCardId.id;
        let key = link.id;
        let showInfoBook = await getInfoBook(key,coverKey);
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
searchBar.addEventListener("click", function() {
  modalBook.style.display = "none";
  const results = document.getElementById("results");
  results.style.display = "flex";
});



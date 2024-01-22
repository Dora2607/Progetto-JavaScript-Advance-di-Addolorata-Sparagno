import "./css/style.css";
const _ = require("lodash");
import cover1 from "./asset/img/cover1.jpg";
import cover2 from "./asset/img/cover2.jpg";
import cover3 from "./asset/img/cover3.jpg";
import iconsX from "./asset/img/iconsX.png";
const logoContext = require.context('./asset/logo', false, /\.(png|jpe?g|svg)$/);
const logos = logoContext.keys().map(logoContext);

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
const getInfoBook = require("./js/getInfoBook");
const showModal = require("./js/showModal");

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
      link.addEventListener("click", async (e) => {
        e.preventDefault();
        let key = link.id;
        let showInfoBook = await getInfoBook(key);
        showModal(link, showInfoBook[0].description, showInfoBook[0].coverBook);
        const modalBook = document.getElementById("modalBook");
        modalBook.style.display = "flex";
        const results = document.getElementById("results");
        results.style.display = "none";
      });
    });
  }
});
searchBar.addEventListener("click", function() {
  modalBook.style.display = "none";
  const results = document.getElementById("results");
  results.style.display = "flex";
});
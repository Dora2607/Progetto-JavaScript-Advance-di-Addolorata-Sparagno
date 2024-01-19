// quando l'utente clicca sul titolo del libro, si apre un modal in cui viene presentata una card con copertina libro, titolo, autori e descrizione del libro
// la descrizione del libro si ottiene effettuando una chiamata axios che ha come url: "https://openlibrary.org/subjects/" + key+ ".json" dove key deve essere reperito da objArray
// e deve corrispondere al libro selezionato. anche la copertina va presa una chiamata api
// per prendere le informazioni del libro, ma non posso fare l'http request in
// un costruttore di componenti. Così faccio una funzione che viene rich
// chiamata quando il componente è pronto.

const { default: axios } = require("axios");
const createObj = require("./createObj");
const _ = require("lodash");



// Make a GET request to the Open Library API to retrieve information about the book
async function getInfoBook(id) {

  let arrayInfo = [];
  let objInfo = {};
  
   // Extract the book description from the response data
  const response = await axios.get("https://openlibrary.org" + id + ".json");
  let info = response.data;
  let description = _.get(info, "description");
  if (typeof description === "object") {
    description = _.get(description, "value");
  }
  objInfo["description"] = description;


  // Extract the cover edition information from the response data 
  //If the cover edition object does not exist, use a random book cover image
  let coverEdition = response.data.cover_edition;
  if (coverEdition) {
    let coverData = coverEdition.key;
    const cover = await axios.get(
      "https://openlibrary.org" + coverData + ".json"
    );
    let resultCover = cover.data;
    console.log(resultCover);
    let isbn =
      _.get(resultCover, "isbn_13[0]") || _.get(resultCover, "isbn_10[0]");
    console.log(isbn);
    coverBook = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;

  } else {
    let images = [
      "asset/img/cover1.jpg",
      "asset/img/cover2.jpg",
      "asset/img/cover3.jpg",
    ];

    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage = images[randomIndex];
    coverBook = randomImage;
  }
  objInfo["coverBook"] = coverBook;
  
  // Push the object into an array and return it
  arrayInfo.push(objInfo);
  return arrayInfo;
}

module.exports = getInfoBook;


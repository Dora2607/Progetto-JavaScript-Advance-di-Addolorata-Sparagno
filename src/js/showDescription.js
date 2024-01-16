// quando l'utente clicca sul titolo del libro, si apre un modal in cui viene presentata una card con copertina libro, titolo, autori e descrizione del libro
// la descrizione del libro si ottiene effettuando una chiamata axios che ha come url: "https://openlibrary.org/subjects/" + key+ ".json" dove key deve essere reperito da objArray
// e deve corrispondere al libro selezionato. anche la copertina va presa una chiamata api
// per prendere le informazioni del libro, ma non posso fare l'http request in
// un costruttore di componenti. Così faccio una funzione che viene rich
// chiamata quando il componente è pronto.

const { default: axios } = require("axios");
const { default: _, forEach } = require("lodash");
const createObj = require("./createObj");


async function getBookInfo(id) {
  const response = await axios.get("https://openlibrary.org" + id + ".json");
  let description = response.data.description;
  let coverDati = response.data.cover_edition.key;
  const cover = await axios.get("https://openlibrary.org" + coverDati + ".json");
  let resultCover = cover.data;
  console.log(resultCover)


//   console.log(description);
//   console.log(title);
//   console.log(dati);
//   console.log(cover_dati);
  if (!description) {
    description = "Non è presente alcuna descrizione per questo titolo";
  }
}

module.exports = getBookInfo;

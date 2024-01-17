// quando l'utente clicca sul titolo del libro, si apre un modal in cui viene presentata una card con copertina libro, titolo, autori e descrizione del libro
// la descrizione del libro si ottiene effettuando una chiamata axios che ha come url: "https://openlibrary.org/subjects/" + key+ ".json" dove key deve essere reperito da objArray
// e deve corrispondere al libro selezionato. anche la copertina va presa una chiamata api
// per prendere le informazioni del libro, ma non posso fare l'http request in
// un costruttore di componenti. Così faccio una funzione che viene rich
// chiamata quando il componente è pronto.

const { default: axios } = require("axios");
const createObj = require("./createObj");
const _ = require("lodash");

async function showDescription(id) {
  const response = await axios.get("https://openlibrary.org" + id + ".json");
  let info = response.data;
  console.log(info);
  let description = _.get(info, "description");
  if (typeof description === "object") {
    description = _.get(description, "value");
  }

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
    console.log(coverBook);
  }

  return { description, coverBook };
}

module.exports = showDescription;
// module.exports = fetchImage;

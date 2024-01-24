const { default: axios } = require("axios");
const createObj = require("./createObj");
const _ = require("lodash");

async function getInfoBook(id1, id2) {
  let arrayInfo = [];
  let objInfo = {};
  let coverBook;

  // Extract the book description from the response data
  const response = await axios.get("https://openlibrary.org" + id1 + ".json");
  let info = response.data;
  let description = _.get(info, "description");
  if (typeof description === "string") {
  } else if (
    typeof description === "object" &&
    description !== null &&
    "value" in description
  ) {
    description = description.value;
  } else {
    description = "There is no 'description' for this book.";
  }
  objInfo["description"] = description;

  // Extract the cover edition information from the response data
  let coverEdition = response.data.cover_edition;
  if (coverEdition) {
    let coverData = coverEdition.key;
    const cover = await axios.get(
      "https://openlibrary.org" + coverData + ".json"
    );
    let resultCover = cover.data;
    let isbn =
      _.get(resultCover, "isbn_13[0]") || _.get(resultCover, "isbn_10[0]");
    coverBook = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
  } else if (id2 !== "null") {
    // Second method to get the ISBN
    const coverApi = await axios.get(
      "https://openlibrary.org/books/" + id2 + ".json"
    );
    const coverDati = coverApi.data;
    let isbn = _.get(coverDati, "isbn_13[0]") || _.get(coverDati, "isbn_10[0]");
    if (isbn) {
      coverBook = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
    }
  }

  // If no coverBook is found, use a random book cover image
  if (!coverBook) {
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
  arrayInfo.push(objInfo);

  return arrayInfo;
}

module.exports = getInfoBook;

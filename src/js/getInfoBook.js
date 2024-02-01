import axios from "axios";
import _ from "lodash";

async function getCoverBook(coverData) {
  try {
    const cover = await axios.get(
      "https://openlibrary.org" + coverData + ".json",
    );
    const resultCover = cover.data;
    const isbn =
      _.get(resultCover, "isbn_13[0]") || _.get(resultCover, "isbn_10[0]");
    if (!isbn) {
      return null;
    }
    return `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getInfoBook(id1, id2) {
  const arrayInfo = [];
  const objInfo = {};
  let coverBook;

  // Extract the book description from the response data
  const response = await axios.get("https://openlibrary.org" + id1 + ".json");
  const info = response.data;
  let description = _.get(info, "description");
  // eslint-disable-next-line no-empty
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
  objInfo.description = description;

  // Extract the cover edition information from the response data
  const coverEdition = response.data.cover_edition;
  if (coverEdition) {
    coverBook = await getCoverBook(coverEdition.key);
  } else if (id2 !== "null") {
    // Second method to get the ISBN
    coverBook = await getCoverBook("/books/" + id2);
  }

  // If no coverBook is found, use a random book cover image
  if (!coverBook) {
    const images = [
      "asset/img/cover1.jpg",
      "asset/img/cover2.jpg",
      "asset/img/cover3.jpg",
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    coverBook = randomImage;
  }

  objInfo.coverBook = coverBook;
  arrayInfo.push(objInfo);

  return arrayInfo;
}

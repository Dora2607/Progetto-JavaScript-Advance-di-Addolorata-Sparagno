const { default: axios } = require("axios");
const { default: _, forEach } = require("lodash");
const createObj = require('./createObj');

async function createPreview(category) {
    const bookInfo = await createObj(category);
    if (bookInfo.length === 0) {
      alert("Nessun risultato trovato!");
    } else {
      const results = document.getElementById("results");
      results.innerHTML = "";
      bookInfo.forEach((book) => {
        const card = document.createElement("div");
        card.classList.add("bookCard");
        const title = document.createElement("h4");
        title.textContent = book.title;
        const author = document.createElement("p");
        author.textContent = book.author;
        const btnShowMore = document.createElement("button");
        btnShowMore.setAttribute(
          "onclick",
          'showBookDetails("' + book.key + '")'
        );
        btnShowMore.textContent = "Mostra di più";
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(btnShowMore);
        results.append(card);
      });
    }
  }

module.exports = createPreview;
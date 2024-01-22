const { default: axios } = require("axios");
const { default: _, forEach } = require("lodash");
const createObj = require('./createObj');

async function createPreview(category) {
    const bookInfo = await createObj(category);
    if (bookInfo.length === 0) {
      alert("No results found!");
    } else {
      const results = document.getElementById("results");
      results.innerHTML = "";
      bookInfo.forEach((book) => {
        const card = document.createElement("div");
        card.classList.add("bookCard");
        const title = document.createElement("h4");
        const linkDescription = document.createElement("a");
        linkDescription.id = book.key;
        linkDescription.textContent = book.title;
        linkDescription.classList.add("linkDescription");
        const author = document.createElement("p");
        author.textContent = book.author;
        title.appendChild(linkDescription);
        card.appendChild(title);
        card.appendChild(author);
        results.append(card);
      });
    }
  }

module.exports = createPreview;
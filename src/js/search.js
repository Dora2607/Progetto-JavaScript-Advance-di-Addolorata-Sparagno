// funzione di ricerca
// quando l'utente clicca sul bottone search, prende il valore inserito nell'input e
// lo passa alla funzione di ricerca.
// la funzione di ricerca attraverso axios fa una chiamata get all' Api e restituisce
// una rispsosta. Gestisco la risposta con get

const { default: axios } = require("axios");
const { default: _ } = require("lodash");

function search(category) {
  // richiesta a GET all'api
  // se la risposta è in errore mostro un messaggio di errore altr
  // se la risposta è corretta gestisco la risposta con getResponse()
  axios
    .get("https://openlibrary.org/subjects/" + category + ".json")
    .then((response) => {
      const obj = response.data.works;
      if (obj.length === 0) {
        alert("Nessun risultato trovato!");
      } else {
        const results = document.getElementById("results");
        results.innerHTML = "";
        obj.forEach((work) => {
          const div = document.createElement("div");
          div.classList.add("bookCard");
          const h4 = document.createElement("h4");
          h4.textContent = work.title;
          const author = document.createElement("p");
          author.textContent = work.authors
            .map(function (author) {
              return author.name;
            })
            .join(", ");
          div.appendChild(h4);
          div.appendChild(author);
          results.appendChild(div);
        });
      }
    })
    .catch((error) => {
      console.error(error);
      alert("Errore nella ricerca");
    });
}

module.exports = search;

// funzione di ricerca
// quando l'utente clicca sul bottone search, prende il valore inserito nell'input e
// lo passa alla funzione di ricerca.
// la funzione di ricerca attraverso axios fa una chiamata get all' Api e restituisce
// una rispsosta. Gestisco la risposta con get

const { default: axios } = require("axios");
const {default: _ } = require("lodash");


function search(category) {
  // richiesta a GET all'api
  // se la risposta è in errore mostro un messaggio di errore altr
  // se la risposta è corretta gestisco la risposta con getResponse()
  axios
    .get("https://openlibrary.org/subjects/" + category + ".json")
    .then((response) => {
      const obj = response.data;
      for (let key in obj){
        console.log(key);

      }
      
    })
    .catch(error => {
      console.error(error);
    });
}


module.exports = search;
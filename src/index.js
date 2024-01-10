import "./css/style.css";

import axios from 'axios';
import _ from 'lodash';

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



const search = require("./js/search");

const searchButton = document.querySelector(".searchButton");
searchButton.addEventListener("click", ()=>{
    const searchBar = document.getElementById("searchBar");
    let newUserInput = searchBar.value;
    if(newUserInput === "") {
        alert('Inserire un testo per effettuare la ricerca');
        return false;
        } else {
            let userInput = newUserInput.toLowerCase();
            search(userInput);
            searchBar.value="";
            }
        }
    );
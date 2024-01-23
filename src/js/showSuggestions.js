function showSuggestions(value, subjects) {
  let suggestions = document.getElementById("suggestions");
  suggestions.style.display = "none";
  suggestions.innerHTML = "";
  if (value.length > 0) {
    let matches = subjects.filter(function (subject) {
      return subject.toLowerCase().startsWith(value.toLowerCase());
    });
    if (matches.length > 0) {
      suggestions.style.display = "block";
      matches.forEach(function (match) {
        let div = document.createElement("div");
        div.classList.add("showSuggestionStyle");
        div.innerHTML = match;
        div.onclick = function () {
          document.getElementById("searchBar").value = match;
          suggestions.style.display = "none";
        };
        suggestions.appendChild(div);
      });
    }
  }
}

module.exports = showSuggestions;

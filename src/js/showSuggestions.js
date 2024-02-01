// Function to display suggestions based on the input value and subjects array
export function showSuggestions(value, subjects) {
  const suggestions = document.getElementById("suggestions");
  suggestions.style.display = "none";
  suggestions.innerHTML = "";
  if (value.length > 0) {
    const matches = subjects.filter((subject) =>
      subject.toLowerCase().startsWith(value.toLowerCase()),
    );
    if (matches.length > 0) {
      suggestions.style.display = "block";
      matches.forEach((match) => {
        const div = document.createElement("div");
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

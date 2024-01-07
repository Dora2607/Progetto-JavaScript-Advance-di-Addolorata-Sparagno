
subjects = [
  "Architecture",
  "Art Instruction",
  "Art History",
  "Dance",
  "Design",
  "Fashion",
  "Film",
  "Graphic Design",
  "Music",
  "Music Theory",
  "Painting",
  "Photography",
  "Bears",
  "Cats",
  "Kittens",
  "Dogs",
  "Puppies",
  "Fantasy",
  "Historical Fiction",
  "Horror",
  "Humor",
  "Literature",
  "Magic",
  "Mystery and detective stories",
  "Plays",
  "Poetry",
  "Romance",
  "Science Fiction",
  "Short Stories",
  "Thriller",
  "Young Adult",
  "Biology",
  "Chemistry",
  "Mathematics",
  "Physics",
  "Programming",
  "Management",
  "Entrepreneurship",
  "Business Economics",
  "Business Success",
  "Finance",
  "Kids Books",
  "Stories in Rhyme",
  "Baby Books",
  "Bedtime Books",
  "Picture Books",
  "Ancient Civilization",
  "Archaeology",
  "Anthropology",
  "World War II",
  "Social Life and Customs",
  "Cooking",
  "Cookbooks",
  "Mental Health",
  "Exercise",
  "Nutrition",
  "Self-help",
  "Autobiographies",
  "History",
  "Politics and Government",
  "World War II",
  "Women",
  "Kings and Rulers",
  "Composers",
  "Artists",
  "Anthropology",
  "Religion",
  "Political Science",
  "Psychology",
  "Brazil",
  "India",
  "Indonesia",
  "United States",
  "History",
  "Mathematics",
  "Geography",
  "Psychology",
  "Algebra",
  "Education",
  "Business & Economics",
  "Science",
  "Chemistry",
  "English Language",
  "Physics",
  "Computer Science",
  "English",
  "French",
  "Spanish",
  "German",
  "Russian",
  "Italian",
  "Chinese",
  "Japanese",
];



 export function showSuggestions(value){
    let suggestions = document.getElementById("suggestions");
    suggestions.style.display = "none";
    suggestions.innerHTML = "";
    if(value.length>0){
        let matches = subjects.filter(function(subject){
            return subject.toLowerCase().startsWith(value.toLowerCase());
        });
        if(matches.length > 0) {
            suggestions.style.display = "block";
            matches.forEach(function(match){
                let div = document.createElement("div");
                div.innerHTML=match;
                div.onclick = function(){
                    document.getElementById('searchBar').value= match;
                    suggestions.style.display="none";
                };
                suggestions.appendChild(div);
            })
        }
    }
}



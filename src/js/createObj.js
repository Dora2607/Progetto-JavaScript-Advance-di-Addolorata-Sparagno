const { default: axios } = require("axios");
const { default: _, forEach } = require("lodash");

//reates an array of objects containing book details for a given category
async function createObj(category) {
  try {
    const response = await axios.get(
      "https://openlibrary.org/subjects/" + category + ".json"
    );
    const obj = response.data.works;
    const objArray = [];
    obj.forEach((element) => {
      let newObj = {};
      newObj["key"] = element.key;
      newObj["title"] = element.title;
      newObj["author"] = element.authors
        .map(function (author) {
          return author.name;
        })
        .join(", ");
      newObj["cover"] = element.cover_edition_key;
      objArray.push(newObj);
    });
    return objArray;
  } catch (error) {
    console.log("Error in creating object", error);
  }
}
module.exports = createObj;

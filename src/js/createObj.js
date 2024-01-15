const { default: axios } = require("axios");
const { default: _, forEach } = require("lodash");

async function createObj(category) {
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
    objArray.push(newObj);
  });
  return objArray;
}



module.exports = createObj;

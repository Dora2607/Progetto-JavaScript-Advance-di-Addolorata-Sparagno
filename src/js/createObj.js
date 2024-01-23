const { default: axios } = require("axios");
const { default: _, forEach } = require("lodash");

async function createObj(category) {
  const response = await axios.get(
    "https://openlibrary.org/subjects/" + category + ".json"
  );
  const obj = response.data.works;
  console.log(obj);
  // const coverApi = await axios.get(
  //   "https://openlibrary.org/books/OL40812029M.json"
  // );
  // const cover = coverApi.data;
  // console.log(cover);

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
    newObj["cover"]= element.cover_edition_key    ;
    objArray.push(newObj);
   
  });
  return objArray;
}

module.exports = createObj;

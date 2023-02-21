const apiList = document.getElementById("api-list");
const apiName = document.getElementById("api-name");

function dataFetch() {
  return fetch(
    "")
    .then((response) => response.json())
    .then((data) => {
        console.log (data)
        return data;
    })
    .catch ((err) => console.error(err)).
}


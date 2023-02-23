const apiList = document.getElementById("api-list");
const apiName = document.getElementById("api-name");
const apiEmail = document.getElementById("api-email");
const numOfBoxes = document.getElementById("cargo-input");
const list = document.getElementById("api-list-ul");
let compNameslist = [];

function dataFetch() {
  return fetch(
    "https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json"
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
}

async function init() {
  const compInfos = await dataFetch();
  compNameslist = compInfos.map((item) => {
    const compNamesItem = document.createElement("li");
    compNamesItem.id = "li-style";
    compNamesItem.innerText = item.name;
    compNamesItem.addEventListener("click", () => {
      apiName.textContent = item.name;
      apiEmail.textContent = item.email;
      numOfBoxes.value = item.boxes;
    });
    return compNamesItem;
  });
  list.append(...compNameslist);
}

init();

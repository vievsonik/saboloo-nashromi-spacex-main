const apiList = document.getElementById("api-list");
const apiName = document.getElementById("api-name");
const apiEmail = document.getElementById("api-email");
const numOfBoxes = document.getElementById("cargo-input");
const navigationUl = document.getElementById("api-list-ul");
const cargosNeeded = document.getElementById("cargos");
const apiLink =
  "https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json";

function dataFetch() {
  return fetch(apiLink)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
}

async function init() {
  let apiNamesLi = [];
  const apiFetchedData = await dataFetch();
  apiNamesLi = apiFetchedData.map((item) => {
    const apiCompanyNamesList = document.createElement("li");
    apiCompanyNamesList.id = "li-style";
    apiCompanyNamesList.innerText = item.name;
    apiCompanyNamesList.addEventListener("click", () => {
      apiName.textContent = item.name;
      numOfBoxes.value = item.boxes;
      apiEmail.textContent = item.email;
      count(numOfBoxes.value).then((res) => (cargosNeeded.innerText = res));
    });
    numOfBoxes.addEventListener("input", () => {
      count(numOfBoxes.value).then((res) => (cargosNeeded.innerText = res));
    });
    return apiCompanyNamesList;
    async function count(set) {
      let key = await set.split(",").map((element) => {
        return Number(element);
      });
      let count = 0;
      key.forEach((el) => {
        count += el;
      });
      return count % 10 === 0 ? count / 10 : Math.ceil(count / 10);
    }
  });
  navigationUl.append(...apiNamesLi);
}
init();

async function count(set) {
  let key = await set.split(",").map((element) => {
    return Number(element);
  });
  let count = 0;
  key.forEach((el) => {
    count += el;
  });
  return count % 10 === 0 ? count / 10 : Math.ceil(count / 10);
}

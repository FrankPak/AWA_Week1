
if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

async function initializeCode() {
  let dogBreeds = ["Borzoi", "Beagle", "Akita", "Dingo", "Corgi"]; //HAs to be lowercase toLowerCase()
  for (let i = 0; i < dogBreeds.length; i++) {
    let url =
      "https://dog.ceo/api/breed/" +
      dogBreeds[i].toLowerCase() +
      "/images/random";
    let breedData = await fetch(url);
    let breedImg = await breedData.json();

    let wikiUrl =
      "https://en.wikipedia.org/api/rest_v1/page/summary/" +
      dogBreeds[i].toLowerCase();
    let wikiData = await fetch(wikiUrl);
    let wikiJson = await wikiData.json();

    createWiki(dogBreeds[i], breedImg.message, wikiJson.extract);
  }
}

function createWiki(breed, breedImg, summary) {
  let divItem = document.createElement("div");
  let header = document.createElement("h1");
  let divContent = document.createElement("div");
  let pText = document.createElement("p");
  let imgContainer = document.createElement("div");
  let imgWiki = document.createElement("img");

  divItem.setAttribute("class", "wiki-item");
  header.setAttribute("class", "wiki-header");
  divContent.setAttribute("class", "wiki-content");
  pText.setAttribute("class", "wiki-text");
  imgContainer.setAttribute("class", "img-container");
  imgWiki.setAttribute("class", "wiki-img");
  imgWiki.setAttribute("src", breedImg);

  header.innerHTML = breed;
  pText.innerHTML = summary;

  divItem.appendChild(header);
  divItem.appendChild(divContent);
  divContent.appendChild(pText);
  divContent.appendChild(imgContainer);
  imgContainer.appendChild(imgWiki);

  document.getElementById("app").appendChild(divItem);
}

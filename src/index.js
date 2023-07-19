import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

async function initializeCode() {
  let dogBreeds = ["Borzoi", "Beagle", "GermanShepherd", "Dingo", "Corgi"] //HAs to be lowercase toLowerCase()
  document.getElementById("app").innerHTML = "<h1>Hello!</h1>";
  for (let i = 0; i < dogBreeds.length; i++) {
    let url ="https://dog.ceo/api/breed/" + dogBreeds[i].toLowerCase()+"/images/random"
    let breedData = await fetch(url);
    let breedImg = await breedData.json();
    createWiki(dogBreeds[i], breedImg.message);
  }
}

function createWiki(breed, breedImg) {
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
  pText.innerHTML = "Some text about this breed.";

  divItem.appendChild(header);
  divItem.appendChild(divContent);
  divContent.appendChild(pText);
  divContent.appendChild(imgContainer);
  imgContainer.appendChild(imgWiki);

  document.getElementById("app").appendChild(divItem);
}

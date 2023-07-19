import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  document.getElementById("app").innerHTML = "<h1>Hello!</h1>";
  for (let i = 0; i < 5; i++) {
    createWiki();
  }
}

function createWiki() {
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
  imgWiki.setAttribute("src", "");

  header.innerHTML = "Breed x";
  pText.innerHTML = "Some text about this breed.";

  divItem.appendChild(header);
  divItem.appendChild(divContent);
  divContent.appendChild(pText);
  divContent.appendChild(imgContainer);
  imgContainer.appendChild(imgWiki);

  document.getElementById("app").appendChild(divItem);
}

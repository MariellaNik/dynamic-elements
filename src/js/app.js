import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
    let newArticle = document.createElement("article");
    newArticle.classList.add("message");
    newArticle.innerHTML = "Sample text content " + (i+1);
    document.body.appendChild(newArticle);
    }
    alert("💣");
  });
});

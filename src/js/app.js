import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    for (let i = 1; i <= 5; i++) {
    alert("💣");
    let message = document.createElement("div");
    message.classList.add("message");
    message.innerHTML = "Sample text content"+i;
    document.body.appendChild(message);
    }
  });
});

const messages = document.getElementsByClassName("message");
console.log(messages);

import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
    let message = document.createElement("div");
    message.classList.add("message");
    message.innerHTML = "Sample text content";
    document.body.appendChild(message);
  });
});


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
     let messageElement = document.createElement("p");
  messageElement.innerHTML = "This is an additional message element.";
  document.body.appendChild(messageElement);
  });
});

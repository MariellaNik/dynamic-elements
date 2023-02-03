import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    for (let i = 1; i <= 5; i++) {
    alert("💣");
      
      
    document.body.addEventListener("click", () => {
    for (let i = 1; i <= 5; i++) {
      const message = document.createElement("article");
      message.classList.add("message");
      message.textContent = `This is message ${i}`;
      document.body.appendChild(message);
    }
  });
});

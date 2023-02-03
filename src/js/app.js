import "../scss/app.scss";

 window.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".button");
    button.addEventListener("click", () => {
      alert("💣");
  
    body.addEventListener("click", () => {
  const body = document.querySelector('body');
  
    for (let i = 0; i < 5; i++) {
      const article = document.createElement('article');
      article.classList.add('message');
      article.textContent = `This is message ${i + 1}`;
      body.appendChild(article);
    }
  });
  });
});

  
  

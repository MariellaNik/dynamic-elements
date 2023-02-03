import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button");
  button.addEventListener("click", (event) => {
  //  event.preventDefault();
//});
//});
    //let add_article=()=>{
     // const articleTemplate=document.createElement(`article`); ili
   // articleTemplate.classList.add(`message`);
      //box = document.queryselector('.message')
      //articleTemplate.innerHTML=
       // "sample text sample text sample text";
     // document.body.appendChild(articleTemplate);
  //  };

//document.body.addEventListner("click", (event) => {
 // let flag=5;  while(flag!=0){    event.preventDefault();    add_Article();    flag--;  }});
  
    function onClick() {  
   for (let index = 1; index <6; index++) {

      let article = document.createElement('article');
      article.className='message';
      article.textContent='Hello '+ index;
      main.append(article)
   }
    }
  })})

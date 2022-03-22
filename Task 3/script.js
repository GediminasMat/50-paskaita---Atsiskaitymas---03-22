/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = `https://api.github.com/users`;

let mygtukas = document.querySelector(`#btn`);
let zinute = document.querySelector(`#message`);

mygtukas.addEventListener(`click`, e=> {
  zinute.classList.add(`slepti`);
  fetch(ENDPOINT)
    .then(res => res.json())
    .then(data =>{
      data.forEach(element => {
        document.querySelector (`#output`).innerHTML += `
          <h2>${element.login}</h2>
          <img src="${element.avatar_url}" class="card">`
      });
    })
})
/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

let konvertuoti = document.querySelector(`#submit-btn`).addEventListener(`click`, e => {e.preventDefault();
  let reiksme = document.querySelector(`#search`).value;
  document.querySelector(`#output`).innerHTML =`
  Weight in kilograms: ${reiksme} kg <br>
  Weight in pounds: ${reiksme * 2.2046} lb <br>
  Weight in grams: ${reiksme / 0.0010000} g <br>
  Weight in ounces: ${reiksme * 35.274} oz
  `
  });
 
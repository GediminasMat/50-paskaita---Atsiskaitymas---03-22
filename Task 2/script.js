/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let clickCounter = document.querySelector(`#btn__element`)
let countClicks = 0;


clickCounter.addEventListener(`click`, function() {
  countClicks += 1;
  document.querySelector(
    `#btn__state`
  ).textContent = `${countClicks}`;
});

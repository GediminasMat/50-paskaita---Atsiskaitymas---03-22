/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
class Calculator {
  sum = (sk1, sk2) => {
    let ats1 = sk1 + sk2;
    return ats1;
  };
  subtraction = (sk1, sk2) => {
    let ats2 = sk1 - sk2;
    return ats2;
  };
  multiplication = (sk1, sk2) => {
    let ats2 = sk1 * sk2;
    return ats2;
  };
  division = (sk1, sk2) => {
    let ats2 = sk1 / sk2;
    return ats2;
  };
}

const checkCalculator = new Calculator();
console.log("Sudėties ats: " + checkCalculator.sum(2, 2));
console.log("Atimties ats: " + checkCalculator.subtraction(18, 9));
console.log("Daugybos ats: " + checkCalculator.multiplication(4, 4));
console.log("Dalybos ats: " + checkCalculator.division(9, 3));
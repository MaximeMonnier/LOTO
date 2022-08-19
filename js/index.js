const buttons = document.querySelectorAll(".btn");
const affich = document.getElementById("affichage");
const tir = document.getElementById("tirage");
const res = document.querySelector(".resultat");
const polux = document.getElementById("polux");

const a = Math.floor(Math.random() * 50);
const b = Math.floor(Math.random() * 50);
const c = Math.floor(Math.random() * 50);
const d = Math.floor(Math.random() * 50);
const e = Math.floor(Math.random() * 50);
const f = Math.floor(Math.random() * 50);
const g = Math.floor(Math.random() * 50);

const resultat = `Resultat tirage(${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g} )`;

let tableau = [resultat];
console.log(tableau);

let cont = 0;
let chance = 5;
let max = 7;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    affich.textContent += e.target.id + " ";
    cont++;
    console.log(cont);
    if (cont === chance) {
      alert("Veuillez cocher 2 numéro chance");
    }
    if (cont > max) {
      alert("Alerte vous ne pouvez pas entrer plus de 7 chiffre !!!");
      affich.textContent = "";
      cont = 0;
    }
  });
});

clear.addEventListener("click", () => {
  affich.textContent = "";
  cont = 0;
  res.style.opacity = "0";
});

tir.addEventListener("click", () => {
  polux.textContent = resultat;
  res.style.opacity = "1";
});

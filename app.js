const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m
// // recuperer les données du formulaire
// const form = document.querySelector("form");

// form.addEventListener("submit", handleForm);

// function handleForm(e) {
//   e.preventDefault();

//   calculateBMI();
// }

// const inputs = document.querySelectorAll("input");
// // resultat dans un tableau
// function calculateBMI() {
//   const height = inputs[0].value;
//   const weight = inputs[1].value;
//   //gerer les mauvaises utilisations
//   if (!height || !weight || height <= 0 || weight <= 0) {
//     handleError();
//     return;
//   }
//   //mettre les donnée au carré et arrondir
//   const BMI = (weight / Math.pow(height / 100, 2)).toFixed(1);
//   console.log(BMI);

//   showResult(BMI);
// }

// //afficher les données selon data départ (=>fetch API)
// const displayBMI = document.querySelector(".bmi-value");
// const result = document.querySelector(".result");

// function handleError() {
//   displayBMI.textContent = "Wops";
//   displayBMI.style.color = "inherit";
//   result.textContent = "Remplissez correctement les inputs.";
// }

// function showResult(BMI) {
//   const rank = BMIData.find((data) => {
//     if (BMI >= data.range[0] && BMI < data.range[1]) return data;
//     else if (typeof data.range === "number" && BMI >= data.range) return data;
//   });

//   displayBMI.textContent = BMI;
//   displayBMI.style.color = `${rank.color}`;
//   result.textContent = `Résultat : ${rank.name}`;
// }

// //projet à deployer sur Vercel

const form = document.querySelector("form");
// console;log(typeof form)
// console.log(form)
// console.dir(form)

form.addEventListener("submit", handleForm);
//(event, callback)=> au declenchement de l'évenement lance cette fontcion "callback"//
function handleForm(e) {
  //event submit comportement par défaut recharge la page
  //pour éviter cela on utilise preventDefault
  e.preventDefault();
  //lancer la fct qui va faire le calcul
  calculBMI();
}

const inputs = document.querySelectorAll("input");
// console.log(inputs) => nodeList != tableau
// const inputs = [...document.querySelectorAll("input")] => transformation en tableau grace au spread operator

function calculBMI() {
  // je recupere les valeurs des inputs avec .value
  const height = inputs[0].value;
  const weight = inputs[1].value;
  console.log(height, weight);
  //j'anticipe les erreurs de l'utilisateur
  if (!height || !weight || height <= 0 || weight <= 0) {
    handleError();
    return; //Je mets fin à la fonction calculBMI()pour ne pas exécuter le reste
  }
  const BMI = (weight / Math.pow(height / 100, 2)).toFixed(1);
  //Math.pow pour le calcul de puissance
  //.. /100 car la formule est en m et on remplit en cm
  //... ,2 pour la puissance 2= "au carré"
  //toFixed(nombre de chiffres après la virgule)
  showResult(BMI);
}

//affichage des messages d'erreur
const displayBMI = document.querySelector(".bmi-value");
const result = document.querySelector(".result");

function handleError() {
  displayBMI.textContent = "woops";
  displayBMI.style.color = "inherit"
  result.textContent = "remplissez correctement chaque champs";}

function showResult(BMI) {
  const rank = BMIData.find((data) => {
    if (BMI >= data.range[0] && BMI < data.range[1]) return data;
    else if(typeof data.range === 'number' && BMI >= data.range) return data
    
  });
 console.log(rank);
  displayBMI.textContent = BMI
  displayBMI.style.color = `${rank.color}`
  result.textContent = `Résultat :${rank.name}`
}




  
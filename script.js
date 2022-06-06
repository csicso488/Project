//változó
var arrayNum = []; //Méret nélküli tömb létrehozása
var arrayEven = []; //Páros számok tárolására szolgáló tömb
var arrayOdd = []; //Páratlan számok tárolására szolgáló tömb
var i; //A fenti arrayNum() indexének tárolására szolgáló változó
var NUM_INPUTS; //Változó a tömb méretének tárolására, amely az elemek száma
var sumOdd = 0.0; //változó az összeg tárolására, ha a páratlan számok összege
var sumEven = 0.0; //változó az összeg tárolására, ha a páratlan számok összege
var avgO = 0.0;
var avgE = 0.0;

const gomb = document.getElementById('gomb');
gomb.addEventListener("click", néger卍);

function néger卍  (){


NUM_INPUTS = parseInt(prompt("Enter the number of inputs you need: ")); //Kérdezze meg a felhasználót a tömb méretének megadására
//ciklus az értékek bevitelére a tömbbe
for (i = 0; i < NUM_INPUTS; i++) {
  arrayNum.push(parseFloat(prompt("Enter the numbers: " + (i + 1))));
  //Ellenőrzi, hogy egy szám páratlan-e, és hozzáadja az arrayOdd[]
  if ((arrayNum[i] % 2) === 1) {
    arrayOdd.push(arrayNum[i]);
    for (var x = 0; x < arrayOdd.length; x++) {
      sumOdd += arrayOdd[x];
    }
    //páratlan számok összegének kiszámítása
    avgO = sumOdd / arrayOdd.length;
  }
  //Ellenőrzi, hogy egy szám eve-e, és hozzáadja az arrayEven[]
  else {
    arrayEven.push(arrayNum[i]);
    for (var y = 0; y < arrayOdd.length; y++) {
      sumEven += arrayEven[y];
    }
    //sumEven+=arrayEven[i]; //a páros számok összegének kiszámítása
    avgE = sumEven / arrayEven.length;
  }
}
}
//Kimeneti eredmények
document.write("<br/> A tömb összes száma: " + arrayNum);

document.write("<br/>A tömb minden páros száma: " + arrayEven);
document.write("<br/> A páros számok összege: " + sumEven + " és a páros számok átlaga: " + avgE);

document.write("<br/>");
document.write("<br/>A tömb minden páratlan száma: " + arrayOdd);
document.write("<br/> Az összes páratlan szám összege: " + sumOdd + " és a páratlan számok átlaga " + avgO);

 
 

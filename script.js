function saisie() {
  return prompt("saisissez un numero");
}

var num = saisie();
if (isNaN(num) || num.length == 0) {
  alert("Vous n'avez pas saisi un numéro. Au revoir !");
} else {
  var i = 1;
  while (num >= 0) {
    console.log(`${num} bottles of beer on the wall`);
    console.log(`${num} bottles of beer`);
    console.log(`Take ${i} down, pass ${i == 1 ? "it" : "them"} around`);
    num = num - i;
    console.log(`${num} bottles of beer on the wall `);
    console.log();
    i++;
  }
}

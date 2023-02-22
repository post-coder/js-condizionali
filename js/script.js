
let x = 2;
let y = 1;

if(x > y) {

  // dichiariamo una variabile dentro il blocco if
  let nome;

  nome = prompt("come ti chiami");

  // ci è possibile accedervi, visto che siamo all'INTERNO DELLO STESSO BLCOCO
  console.log(nome);

}

// in questo caso non possiamo accedere alla variabile "nome" perchè è dichiarata in un blocco di un'altra funzione (nell'if), 
// per tanto è accessibile solo all'interno di esso, dandoci un errore
console.log(nome);

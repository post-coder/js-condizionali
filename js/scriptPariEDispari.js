
/*
chiedere all'utente se vuole pari o dispari 
e un numero intero compreso tra 1 e 5. 
Generare un numero casuale compreso tra 1 e 5, 
che sarà la giocata del computer. 

Stabilire e comunicare chi ha vinto 
secondo le regole di pari o dispari.
*/

/*

-chiedere all'utente se vuole giocare con "pari" o "dispari"
- chiedere un numero tra 1 e 5
-generare un numero random del computer tra 1 e 5
- somma sarà la somma del numero random e numero utente

? SE l'utente ha scelto pari e la somma è pari
  ° comunicare che ha vinto
:? ALTRIMENTI SE l'utente ha scelto dispari e la somma è dispari
  ° comunicare che ha vinto
:? ALTRIMENTI
  ° comunicare che ha perso


? SE la somma è pari
  ° ? SE l'utente ha scelto pari
      ° comunicare che ha vinto
  ° : ALTRIMENTI
      ° comunicare che ha perso
: ALTRIMENTI
  ° ? SE l'utente ha scelto pari
      ° comunicare che ha perso
  ° : ALTRIMENTI
      ° comunicare che ha vinto



*/

let sceltaUtente = prompt("Giochi pari o dispari?");
let userNumber = parseInt( prompt("Inserisci un numero") );

let randomNumber =  Math.floor(Math.random() * 5 + 1);

let somma = randomNumber + userNumber;


if(sceltaUtente == 'pari' && somma % 2 == 0) {

  console.log(`Hai vinto:
  Il computer ha giocato: ${randomNumber}.
  Tu hai giocato ${userNumber}.
  Hai scelto ${sceltaUtente}.
  La somma equivale a ${somma}.
  `);

} else if( sceltaUtente == 'dispari' && somma % 2 != 0) {
  
  console.log(`Hai vinto:
  Il computer ha giocato: ${randomNumber}.
  Tu hai giocato ${userNumber}.
  Hai scelto ${sceltaUtente}.
  La somma equivale a ${somma}.
  `);
  
} else {
  console.log(`Hai perso:
  Il computer ha giocato: ${randomNumber}.
  Tu hai giocato ${userNumber}.
  Hai scelto ${sceltaUtente}.
  La somma equivale a ${somma}.
  `);
}

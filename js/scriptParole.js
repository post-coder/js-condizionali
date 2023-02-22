

/*
Chiediamo all'utente due parole in successione.
Andiamo poi a verificare quale delle due parole
è più lunga e stampiamo in console
un messaggio appropriato.
*/


/*

- chiediamo all'utente la prima parola e la memorizziamo
- chiediamo all'utente la seconda parola e la memorizziamo
? SE la prima parola è più lunga della seconda
  ° stampiamo il messaggio relativo
:? ALTRIMENTI SE la prima parola è MENO lunga della seconda
  ° stampiamo un messaggio diverso
: ALTRIMENTI
  ° stampa che sono uguali

*/


let word1 = prompt("inserisci la prima parola");
let word2 = prompt("inserisci la seconda parola");

if(word1 == null || word2 == null) {

  console.log("Inserisci delle parole e premi OK");
  
} else if(word1.length > word2.length) {

  console.log("La prima parola è più lunga della seconda");

} else if(word1.length < word2.length) {

  console.log("La prima parola è meno lunga della seconda");
  
} else {

  console.log("Le parole hanno la lunghezza uguale");
  
}




// 
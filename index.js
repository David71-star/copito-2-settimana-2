/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
 I principali datatype in JavaScript sono:
 Numeri
    Può essere qualsiasi numero tra -(253 - 1) e +(253 - 1),
    insomma stiamo parlando di un numero emorme, siccome questo numero non è
    infinito esistono dei valori speciali.
    +Infinity / -Infinity
    NaN o "Not a Number"

 Stringhe
    E' una sequenza di caratteri delimitata da delle virgolette
    che possono essere di tre tipi:
    ("") ('') (``)
    Queste sequenze possono esere di lunghezza arbitraria, a partire da 0.

 Booleani
    E' un tipo di dato che ha un entità logica e può essere vera o falsa

 Null e Undefined
   Undefined è un valore che non esiste ancora, una variabile che abbiamo dichiarato senza 
   definire il suo valore
   
   Null è un valor vuoto, una variabile a cui in precedeza abbiamo attrivuito un valore e sucessivamente
   gli abbiamo attribuito "Null". (abbiamo letteralmete svuotato la variabile)

 ( Ci sono anche "BigInt" e "Symbol" ma gli vedremo più avanti)
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* In Java Script un oggetto è un'insieme di proprièta racchiuse da due parentesi graffe,
 esso descrive la variabile stessa 
*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let cifra1 = 12        //dichiaro che la variabile "cifra_1" ha un valore paria a 12
let cifra2 = 20        //dichiaro che la variabile "cifra_2" ha un valore paria a 20
console.log( "La somma tra 12 e 20 è " , (cifra1 + cifra2) );         // eseguo la somma


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let david = cifra1     //dichiaro che la variabile "David" ha lo stesso valore della variabile "cifra_1"
console.log( "A David è stato assegnato il numero " , david );

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "David Hernando"        //dichiaro che la variabile "name" è "David Hernando"
console.log( "La variabile name è " , name );

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let cifra3 = 4         //dichiaro che la variabile "cifra_3" ha un valore paria a 4
console.log("La differenza tra 4 e la variabile David (x) è " , (cifra3 - david));

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john"      //dichiaro che la variabile "name1" è "jhon"
let name2 = "John"      //dichiaro che la variabile "name2" è "Jhon"
console.log( "john (testualmente) è diverso da John ? " , (name1 !== name2) );
console.log( "Adesso (testualmente) i nomi sono uguali ?" , (name2.toLowerCase()) === name1 );


/* ESERCIZIO 8
 Crea un oggetto di Javascript che ti rappresenti (come proprietà usa nome, cognome e hobby)
*/

let profiloDiDavid = {          //dichiaro la variabile e creo un oggetto
    nome: "David Hernando",     // la proprietà nome è chiamata "David Hernando"
    cognome: "Cortès",          // la proprietà cognome è chiamata "Cortès"
    hobby: "Guidare",           // la proprietà hobby è chiamata "Guidare"
}
console.log( "Ecco alcune informazioni su David " , profiloDiDavid );


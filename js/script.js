/*
Esercizio di oggi: Lista della spesa con ciclo while
nome repo: js-lista-spesa
Consegna:
Data una lista della spesa (inventatela), stampare in pagina gli elementi della lista individualmente con un ciclo while.  (anche brutalmente, basta che si vedano)
Bonus:
Provare a stampare sia con i template literals che con i nodi, manipolando il DOM.
Consigli:
- Ricordiamoci di inizializzare le variabili  che servono alla condizione FUORI dal ciclo while, altrimenti verranno azzerate ad ogni ciclo
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
*/
const listElement = document.getElementById('list')
const shop = ['Pomodoro', 'Latte', 'Pane', 'Carne'];
// console.log(shop);

let myList = '<ul>';
let market = '';
let i = 0;
while (i < shop.length) {
    market = shop[i];
    i++;
    myList += `<li>${market}</li>`;

}
myList += '</ul>';
listElement.innerHTML = myList;
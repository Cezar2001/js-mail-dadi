//mail
const emailList = ['Pasqualino@gmail.com', 'Concetta@gmail.com', 'Ntoni@gmail.com', 'Enzo@gmail.com', 'Mara@gmail.com'];
let flag = false;

let email = prompt('Inserisci la tua email');

for (let i = 0; i < emailList.length; i++) {
   if (email.toLowerCase() === emailList[i].toLowerCase()) {
       flag = true;
   }
}

if (flag) {
    console.log('Benvenuto! Lei fa parte della lista degli invitati, buona conversazione.')
} else {
    console.log('Mi dispiace! Lei non può partecipare a questa conversazione!')
}

//dadi
let humanNumber = Math.floor(Math.random()*((6+1) - 1));
let computerNumber = Math.floor(Math.random()*((6+1) - 1));

console.log(humanNumber);
console.log(computerNumber);

 if (humanNumber < computerNumber) {
     console.log('Mi dispiace, hai perso!')
 } else if (computerNumber < humanNumber) {
     console.log('Complimenti, sei un campione!')
 }
  else {
     console.log('Pari')
 }

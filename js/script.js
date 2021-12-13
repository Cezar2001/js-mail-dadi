const emailList = ['Paqualino', 'Concetta', 'Ntoni', 'Enzo', 'Mara'];
let flag = false;

let email = prompt('Inserisci la tua email');

for (let i = 0; i < email.length; i++) {
   if (email === emailList[i]) {
       flag = true;
   }
}

if (flag) {
    console.log('Benvenuto! Lei fa parte della lista degli invitati, buona conversazione.')
} else {
    console.log('Mi dispiace! Lei non può partecipare a questa conversazione!')
}
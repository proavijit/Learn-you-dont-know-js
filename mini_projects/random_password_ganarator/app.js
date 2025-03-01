
let generatePassword = () => {
 
  let carset = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:'",.<>?/`;
  
  randomPass(carset)


}

let randomPass = (allCarector) => {

   let inputNumber = document.getElementById('inputNumber').value;

   let randomPassword = ''

   for (let i = 0; i < inputNumber; i++) {
    
     let randomCarector = Math.floor(Math.random() * allCarector.length);
    
     randomPassword += allCarector[randomCarector]
    
   }
    document.getElementById('passShow').innerText = randomPassword;
   
console.log(randomPassword);

}


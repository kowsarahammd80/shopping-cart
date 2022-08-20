function phoneNumberField(isIncrease){
  let phoneNumberField = document.getElementById('phone-number');
  let phoneNumberString = phoneNumberField.value;
  let previousPhoneNumber = parseInt(phoneNumberString);

  let newPhoneNumber;
  

  if(isIncrease){  // (er majhe == treu ba false o us kore kora jeto  (mane bracket er majhe))
      newPhoneNumber = previousPhoneNumber + 1;
  }
  else{
    newPhoneNumber = previousPhoneNumber - 1;
  }

  phoneNumberField.value = newPhoneNumber;

  return newPhoneNumber;
}

function totalPhonePrice(newPhoneNumber){
  let phoneTotalPrice = newPhoneNumber * 1219;
  let phonePriceElement = document.getElementById('phone-price');
  phonePriceElement.innerText = phoneTotalPrice
}



document.getElementById('btn-phone-plus').addEventListener('click', function(){
  
 let newPhoneNumber =  phoneNumberField(true);
 totalPhonePrice(newPhoneNumber);

 calculateSubTotal();

})

document.getElementById('btn-phone-minus').addEventListener('click', function(){

  let newPhoneNumber =  phoneNumberField(false);
  totalPhonePrice(newPhoneNumber);
  
  calculateSubTotal();

})



function getTextElementValueById(elementId){
  let phoneTotalElement = document.getElementById(elementId);
 let currentPhoneString = phoneTotalElement.innerText;
 let currentPhoneTotal = parseInt(currentPhoneString);

 return currentPhoneTotal;
}


function setTextElementValueById(elementId, value){
  let subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}


function calculateSubTotal(){
  
 //calculate sub total 
 let currentPhoneTotal = getTextElementValueById('phone-price');
 let currentCaseTotal = getTextElementValueById('case-price')
 let currentSubTotal = currentPhoneTotal + currentCaseTotal;
 
 setTextElementValueById('sub-total', currentSubTotal);

 //calculat tax total

 let texAmountString = (currentSubTotal * 0.1).toFixed(2);
 let texAmount = parseFloat(texAmountString);
 setTextElementValueById('tax-amount', texAmount);

 //calculat fainal total
 let fainalAmount = currentSubTotal + texAmount;
  setTextElementValueById('fainal-total', fainalAmount);
}
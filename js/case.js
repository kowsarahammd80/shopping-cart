// document.getElementById('btn-case-plus').addEventListener('click', function(){
//   let caseNmberField = document.getElementById('case-number-field');
//   let caseNmberString = caseNmberField.value;
//   let previousCaseNumber = parseInt(caseNmberString);
  
//   let newCaseNumber = previousCaseNumber + 1;
//    caseNmberField.value  = newCaseNumber;
// })

// document.getElementById('btn-case-minus').addEventListener('click', function(){
//   let caseNumberField = document.getElementById('case-number-field');
//   let caseNmberString = caseNumberField.value;
//   let previousCaseNumber = parseInt(caseNmberString);

//   let newCaseNumber = previousCaseNumber - 1;
//   caseNumberField.value = newCaseNumber;
// })

// altarnative away 

function updateCaseNumber(isIncrease){
 let caseNumberField = document.getElementById('case-number-field');
 let caseNmberString = caseNumberField.value;
 let previousCaseNumber = parseInt(caseNmberString);

  let newCaseNumber;

  if(isIncrease === true){
    newCaseNumber = previousCaseNumber + 1;
  }
  else{
    newCaseNumber = previousCaseNumber - 1;
  } 

  caseNumberField.value = newCaseNumber;

  return newCaseNumber;

}

function  updateCaseTotalPrice(newCaseNumber){
  let caseTotalPrice = newCaseNumber * 59;
   
  let casePriceElement = document.getElementById('case-price');
  casePriceElement.innerText = caseTotalPrice ;

  // ALTERNATIV AWAY

  // let casePriceElement = document.getElementById('case-price');
 //  let casePriseString = casePriceElement.innerText;
 //  let casePriseTotal = parseFloat(casePriseString);
  
 //  let updateCasePrice = casePriseTotal;
 //  casePriceElement.innerText = caseTotalPrice;
 
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
  let newCaseNumber = updateCaseNumber(true);
   
  updateCaseTotalPrice(newCaseNumber);
  calculateSubTotal();
  
})


document.getElementById('btn-case-minus').addEventListener('click', function(){
  let newCaseNumber = updateCaseNumber(false);

  updateCaseTotalPrice(newCaseNumber);
  calculateSubTotal();
})


// document.getElementById('btn-case-plus').addEventListener('click', function(){
//   let newCaseNumber = updateCaseNumber(true);
//   let caseTotalPrice = newCaseNumber * 59;
   
//   let casePriceElement = document.getElementById('case-price');
//   casePriceElement.innerText = caseTotalPrice ;

//   // ALTERNATIV AWAY

//   // let casePriceElement = document.getElementById('case-price');
//  //  let casePriseString = casePriceElement.innerText;
//  //  let casePriseTotal = parseFloat(casePriseString);
  
//  //  let updateCasePrice = casePriseTotal;
//  //  casePriceElement.innerText = caseTotalPrice;
// })







// document.getElementById('btn-case-minus').addEventListener('click', function(){
//     let newCaseNumber = updateCaseNumber(false);
//     let caseTotalPrice = newCaseNumber * 59;

//     let casePriceElement = document.getElementById('case-price');
//     casePriceElement.innerText = caseTotalPrice;
// })

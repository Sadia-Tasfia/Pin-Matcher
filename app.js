function getpin(){
  const pin = generatePin();
  const pinString = pin + "" ;
  if(pinString.length === 4){
    return pin;
  } else {
    // console.log('pin is not 4 digit', pin);
    return getpin();
  }
}

function generatePin(){
  const random = Math.round(Math.random()*10000);
  return random;
}

document.getElementById("generate-pin").addEventListener('click',function(){
  const pin = getpin();
  
  // display pin
  const displayPinField = document.getElementById('display-pin');
  displayPinField.value = pin;
});

document.getElementById("calculator").addEventListener('click', function(event){
  const number = event.target.innerText;
  const typeNumberField = document.getElementById("typed-number");
  const previousNumber = typeNumberField.value;

  // console.log(number);
  if(isNaN(number)){
    if(number === 'C'){
      typeNumberField.value = '';
    }
    else if(number === "<") {
      const digits = previousNumber.split('');
      digits.pop();

      const remainingDigit = digits.join('');
      typeNumberField.value = remainingDigit;
    }
    } 
  else{
    const newNumber = previousNumber + number;
    typeNumberField.value = newNumber;
  }
});

document.getElementById('verify-btn').addEventListener('click',function(){
  const displayPinField = document.getElementById('display-pin');
  const currentPin = displayPinField.value;
  
  const typeNumberField = document.getElementById("typed-number");
  const typeNumber =typeNumberField.value;

  const pinMessage = document.getElementById("pin-matched");
  const pinFailureMessage = document.getElementById("pin-failure");
  
  if(typeNumber === currentPin){
    pinMessage.style.display = 'block';
    pinFailureMessage.style.display = "none";
  }
  else{
    
    pinFailureMessage.style.display= 'block';
    pinMessage.style.display = "none";
  }
  
});
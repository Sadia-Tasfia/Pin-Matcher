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
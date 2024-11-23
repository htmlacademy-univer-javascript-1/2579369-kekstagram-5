function stringLenght (inputString, maxLen) {
  const amount = inputString.length;
  if(amount <= maxLen){
    return true;
  }else {
    return false;
  }
}
stringLenght('проверяемая строка', 20);
function checkPolindrom(stringPolindrom){
  stringPolindrom = stringPolindrom.toLowerCase();
  const reverseString = stringPolindrom.split('').reverse().join('');
  if(stringPolindrom === reverseString){
    return true;
  }else{
    return false;
  }
}


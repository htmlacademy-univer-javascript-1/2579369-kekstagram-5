function countLength (inputString, maxLen) {
  const amount = inputString.length;
  return amount <= maxLen;

}

countLength('проверяемая строка', 20);
countLength('проверяемая строка', 18);
countLength('проверяемая строка', 10);

function checkPalindrom(stringPalindrom){
  stringPalindrom = stringPalindrom.toLowerCase();
  const reverseString = stringPalindrom.split('').reverse().join('');
  return stringPalindrom === reverseString;
}




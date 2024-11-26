function countLength (inputString, maxLen) {
  const amount = inputString.length;
  return amount <= maxLen;
}

countLength("проверяемая строка", 10);

function checkPalindrom(stringPalindrom){
  stringPalindrom = stringPalindrom.toLowerCase();
  stringPalindrom = stringPalindrom.replaceAll(" " , "");
  const reverseString = stringPalindrom.split("").reverse().join("");
  return stringPalindrom === reverseString;
}

checkPalindrom("топот");

function findNumber(inputString) {
  inputString = inputString.toString();
  let result = "";
  for (let i of inputString) {
    i = parseInt(i, 10);
    if(!isNaN(i)) {
      result = result + i;
    }
  }
  return (parseInt(result, 10));
}

console.log(findNumber('22 lalal 1'));

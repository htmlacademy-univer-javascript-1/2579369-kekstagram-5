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

function checkTime (timeStart,timeEnd,beginingTime,duration){
  timeStart = timeStart.split(":");
  timeEnd = timeEnd.split(":");
  beginingTime = beginingTime.split(":");
  const workingDayHours = parseInt(timeEnd[0],10) - parseInt(timeStart[0],10);
  const workingDayMinutes = workingDayHours * 60 + parseInt(timeEnd[1],10);
}

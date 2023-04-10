// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordLength = 0; //user input length

var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
var lowercaseChar = "abcdefghiklmnopqrstuvwxyz";
var numbersChar = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

var includeUppercase = false;
var includeLowercase = false;
var includeNumbers = false;
var includeSpecialChar = false;

//need create a string with all possible characters based on user input

// includeUppercase = true;
// includeNumbers = true;
// includeNumbers = true;
// includeSpecialChar = true;
// passwordLength = 20;

var allPossibleChar = "";

if (includeUppercase == true) {
  allPossibleChar = uppercaseChar;
}
if (includeLowercase == true) {
  allPossibleChar = allPossibleChar + lowercaseChar;
}

if (includeNumbers == true) {
  allPossibleChar = allPossibleChar + numbersChar;
}

if (includeSpecialChar == true) {
  allPossibleChar = allPossibleChar + specialChar;
}

// console.log(allPossibleChar);

var lengthOfAvailChar = allPossibleChar.length;

// console.log(lengthOfAvailChar);

var generatedPassword = ""; //string where new password will be added to

function generatePassword(passwordLength) {
  var i = 0;
  while (i < passwordLength) {
    generatedPassword += allPossibleChar.charAt(Math.floor(Math.random() * lengthOfAvailChar));
    i += 1;
  }
  return generatedPassword;
}

generatedPassword = generatePassword(passwordLength);

// console.log(generatedPassword);
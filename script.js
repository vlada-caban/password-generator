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

var generatedPassword = ""; //empty string before generation

//need create a string with all possible characters based on user input

var allPossibleChar = "";

if (includeUppercase == true) {
  allPossibleChar = uppercaseChar; 
}
if (includeLowercase == true) {
  allPossibleChar = allPossibleChar + lowercaseChar;
}

if (includeNumbers== true) {
  allPossibleChar = allPossibleChar + numbersChar;
}

if (includeSpecialChar == true) {
  allPossibleChar = allPossibleChar + specialChar;
}

var lengthOfAvailChar = allPossibleChar.length();


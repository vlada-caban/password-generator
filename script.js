// Assignment Code
var generateBtn = document.querySelector("#generate");

// var password = "";

// Write password to the #password input
function writePassword() {
// password = "";
// document.querySelector("#password").textContent="";

  // Askign user to input length and checking to be sure it is between 8 and 128
  var passwordLength = Number(
    window.prompt("Please enter password length between 8 and 128:", "8")
  );
  while (passwordLength < 8 || passwordLength > 128) {
    var passwordLength = Number( window.prompt(
      "Please enter a valid length number between 8 and 128:",
      "8")
    );
  }

  //Clear text pox before generating password
  // var blankText = document.querySelector("#password");
  // blankText.value = "";

  //original code - How to empty text box before generating new password?
  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");

  console.log(password);

  passwordText.value= password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//var passwordLength = 0; //user input length

//need to add checkpoint to make sure passwordLength between 8 and 128

var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var numbersChar = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

var includeUppercase = false;
var includeLowercase = false;
var includeNumbers = false;
var includeSpecialChar = false;

//need to add checkpoint that at least one of the above contions is TRUE / at least one box checked on the HTML form (IF okay to use form)

//to test
includeUppercase = true;
includeLowercase = false;
includeNumbers = true;
includeSpecialChar = false;
//passwordLength = 10;

//need create a string with all possible characters based on user input
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

//to test
console.log(allPossibleChar);

var lengthOfAvailChar = allPossibleChar.length;

//to test
console.log(lengthOfAvailChar);

var generatedPassword = ""; //string where new password will be added to

function generatePassword(passwordLength) {
  var i = 0;
  while (i < passwordLength) {
    generatedPassword += allPossibleChar.charAt(Math.floor(Math.random() * lengthOfAvailChar));
    i += 1;
  }
  return generatedPassword;
}

//generatedPassword = generatePassword(passwordLength);

// to test
//console.log(generatedPassword);
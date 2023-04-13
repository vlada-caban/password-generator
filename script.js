// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  var passwordLength = checkLength();
  var allPossibleChar = checkCharSet();

  var password = generatePassword(passwordLength, allPossibleChar);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//ADD function to check password length
function checkLength() {
  var passwordLength = Number(
    window.prompt("Please enter password length between 8 and 128:", "8")
  );
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = Number(
      window.prompt("Please enter a valid length number between 8 and 128:", "8")
    );
  }

  return passwordLength;
}

//ADD function to check what characters 
function checkCharSet() {
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var numbersChar = "0123456789";
  var specialChar = "!#$%&()*+,-./:;<=>?@[]^_{|}~";

  includeUppercase = true;
  includeLowercase = false;
  includeNumbers = true;
  includeSpecialChar = true;

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

return allPossibleChar;

}

function generatePassword(passwordLength, allPossibleChar) {
  var lengthOfAvailChar = allPossibleChar.length;
  var generatedPassword = ""; //string where new password will be added to
  var i = 0;
  while (i < passwordLength) {
    generatedPassword += allPossibleChar.charAt(
      Math.floor(Math.random() * lengthOfAvailChar)
    );
    i += 1;
  }
  return generatedPassword;
}


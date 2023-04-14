// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let passwordLength = checkLength();
  let allPossibleChar = checkCharSet();

  let password = generatePassword(passwordLength, allPossibleChar);
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Function to check password length
function checkLength() {
  let passwordLengthInput = Number(
    window.prompt("Please enter password length between 8 and 128:", "8")
  );

  while (passwordLengthInput < 8 || passwordLengthInput > 128) {
    passwordLengthInput = Number(
      window.prompt(
        "Please enter a valid length number between 8 and 128:",
        "8"
      )
    );
    //can return and stop function if use didn't input a number?
  }

  return passwordLengthInput;
}

//Function to check character set
function checkCharSet() {
  const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  const numbersChar = "0123456789";
  const specialChar = "!#$%&()*+,-./:;<=>?@[]^_{|}~";

  //need to confirm with the user what characters to include, asking user to confirm
  let includeUppercase = false;
  let includeLowercase = false;
  let includeNumbers = false;
  let includeSpecialChar = false;

  let allPossibleCharInput = "";

  // while (!includeUppercase || !includeLowercase || !includeNumbers || !includeSpecialChar) {}

  includeUppercase = confirm("Would you like yo use Uppercase letters?");
  includeLowercase = confirm("Would you like yo use Lowercase letters?");
  includeNumbers = confirm("Would you like yo use Numbers?");
  includeSpecialChar = confirm("Would you like yo use Special characters?");

  if (includeUppercase) {
    allPossibleCharInput = uppercaseChar;
  }
  if (includeLowercase) {
    allPossibleCharInput = allPossibleCharInput + lowercaseChar;
  }
  if (includeNumbers) {
    allPossibleCharInput = allPossibleCharInput + numbersChar;
  }
  if (includeSpecialChar) {
    allPossibleCharInput = allPossibleCharInput + specialChar;
  }
  
  console.log(allPossibleCharInput);

  if (allPossibleCharInput === "") {
    window.alert("Need to select at least one character set please!");
    return allPossibleCharInput;
  }

  return allPossibleCharInput; //returns all possible characters for the password
}

//Function to generate
function generatePassword(passwordLength, allPossibleChar) {
  if (allPossibleChar === "") {
    return "Sorry, you need to select characters, please try again!";
  }
  else 
  {
    let lengthOfAvailChar = allPossibleChar.length; //checking length of character set
    let generatedPassword = ""; //string where new password will be added to
    let i = 0;
    while (i < passwordLength) {
      generatedPassword += allPossibleChar.charAt(
        Math.floor(Math.random() * lengthOfAvailChar)
      );
      i++;
    }
    return generatedPassword;
  }
}

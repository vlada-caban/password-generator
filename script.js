// Assignment Code
let generateBtn = document.querySelector("#generate");

let generatedPassword = "";

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
  }

  return passwordLengthInput;
}

//Function to check character set
function checkCharSet() {
  const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  const numbersChar = "0123456789";
  const specialChar = "!#$%&()*+,-./:;<=>?@[]^_{|}~";

  let includeUppercase = false;
  let includeLowercase = false;
  let includeNumbers = false;
  let includeSpecialChar = false;

  let allPossibleCharInput = "";

  generatedPassword = ""; //resets generated password in case generate btn pressed again

  // while (!includeUppercase || !includeLowercase || !includeNumbers || !includeSpecialChar) {}

  //confirming with the user what characters to include into password
  includeUppercase = confirm("Would you like to use Uppercase letters?");
  includeLowercase = confirm("Would you like to use Lowercase letters?");
  includeNumbers = confirm("Would you like to use Numbers?");
  includeSpecialChar = confirm("Would you like to use Special characters?");

  if (includeUppercase) {
    allPossibleCharInput = uppercaseChar;
    generatedPassword = uppercaseChar.charAt(Math.floor(Math.random() * uppercaseChar.length));
    // console.log(generatedPassword);
  }
  if (includeLowercase) {
    allPossibleCharInput += lowercaseChar;
    generatedPassword += lowercaseChar.charAt(
      Math.floor(Math.random() * lowercaseChar.length)
    );
    // console.log(generatedPassword);
  }
  if (includeNumbers) {
    allPossibleCharInput += numbersChar;
    generatedPassword += numbersChar.charAt(
      Math.floor(Math.random() * numbersChar.length)
    );
    // console.log(generatedPassword);
  }
  if (includeSpecialChar) {
    allPossibleCharInput += specialChar;
    generatedPassword += specialChar.charAt(
      Math.floor(Math.random() * specialChar.length)
    );
    // console.log(generatedPassword);
  }

  // console.log(allPossibleCharInput);

  if (allPossibleCharInput === "") {
    window.alert("Need to select at least one character set please!");
    return allPossibleCharInput;
  }

  return allPossibleCharInput; //returns all possible characters for the password
}

//Function to generate password
function generatePassword(passwordLength, allPossibleChar) {
  if (allPossibleChar === "") {
    return "Sorry, you need to select at least one set of characters, please try again!";
  }
  else 
  {
    let i = generatedPassword.length; //setting starting point to be after 1 of each char set is added
    while (i < passwordLength) {
      generatedPassword += allPossibleChar.charAt(
        Math.floor(Math.random() * allPossibleChar.length)
      );
      i++;
    }
    // console.log(generatedPassword);
    return generatedPassword;
  }
}

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


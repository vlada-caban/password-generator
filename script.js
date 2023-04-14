// Assignment Code
let generateBtn = document.querySelector("#generate");

//global variables
let allPossibleChar = "";
let generatedPassword = "";

//Function to check password length
function checkLength() {
  let passwordLengthInput = Number(
    window.prompt("Please enter password length between 8 and 128:", "8")
  );

  //checking if password length is not a number and if it's between 8 and 128; returns 0 if criteria is not met
  if (
    isNaN(passwordLengthInput) ||
    passwordLengthInput < 8 ||
    passwordLengthInput > 128
  ) {
    window.alert("Password length needs to be a number between 8 and 128!");
    return 0;
  } else {
    return passwordLengthInput;
  }
}

//Function to check character set
function checkCharSet() {
  const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  const numbersChar = "0123456789";
  const specialChar = "!#$%&()*+,-./:;<=>?@[]^_{|}~";

  //setting default values to false until user can select
  let includeUppercase = false;
  let includeLowercase = false;
  let includeNumbers = false;
  let includeSpecialChar = false;

  let allPossibleCharInput = "";

  generatedPassword = ""; //resets generated password in case generate btn pressed again

  //confirming with the user what characters to include into password
  includeUppercase = confirm("Would you like to use Uppercase letters?");
  includeLowercase = confirm("Would you like to use Lowercase letters?");
  includeNumbers = confirm("Would you like to use Numbers?");
  includeSpecialChar = confirm("Would you like to use Special characters?");

  //if include Uppercase is true, adding Uppercase letters to all possible characters set and adding random Uppercase character to the password
  if (includeUppercase) {
    allPossibleCharInput += uppercaseChar;
    generatedPassword += uppercaseChar.charAt(
      Math.floor(Math.random() * uppercaseChar.length)
    );
  }

  //if include Lowercase is true, adding Lowercase letters to all possible characters set and adding random Lowercase character to the password
  if (includeLowercase) {
    allPossibleCharInput += lowercaseChar;
    generatedPassword += lowercaseChar.charAt(
      Math.floor(Math.random() * lowercaseChar.length)
    );
  }

  //if include Number is true, adding Numbers to all possible characters set and adding random Number to the password
  if (includeNumbers) {
    allPossibleCharInput += numbersChar;
    generatedPassword += numbersChar.charAt(
      Math.floor(Math.random() * numbersChar.length)
    );
  }

  //if include Special character is true, adding Special characters to all possible characters set and adding random Special character to the password
  if (includeSpecialChar) {
    allPossibleCharInput += specialChar;
    generatedPassword += specialChar.charAt(
      Math.floor(Math.random() * specialChar.length)
    );
  }

  if (allPossibleCharInput === "") {
    window.alert("Need to select at least one character set please!");
    return allPossibleCharInput;
  } else {
    return allPossibleCharInput;
  } 
}

//Function to generate password
function generatePassword(passwordLength, allPossibleChar) {
  if (passwordLength === 0) {
    return 'Sorry, password length needs to be a valid number between 8 and 128, please press "Generate Password" to try again!';
  } else if (allPossibleChar === "") {
    return 'Sorry, you need to select at least one set of characters, please press "Generate Password" to try again!';
  } else {
    let i = generatedPassword.length; //setting starting point of the iterator to be after one of each char set is added
    while (i < passwordLength) {
      generatedPassword += allPossibleChar.charAt(
        Math.floor(Math.random() * allPossibleChar.length)
      );
      i++;
    }
    console.log("Yay! Password was generated: " + generatedPassword); //displayed in console for developers
    return generatedPassword;
  }
}

// Write password to the #password input
function writePassword() {
  let passwordLength = checkLength();

  //checking if valid password length number was returned before requesting to select characters
  if (passwordLength === 0) {
    allPossibleChar = "";
  } else {
    allPossibleChar = checkCharSet();
  }

  let password = generatePassword(passwordLength, allPossibleChar);
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

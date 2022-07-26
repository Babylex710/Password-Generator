// Assignment code here
// variables used to define character types
var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
var specialCharacters = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',]
var allCharacters = [];
var result = [];

// variables used to reference the #generate element
// var passLength = prompt("How many characters would you like your password to have? Must be between 8 to 128 characters.")
// var lowABC = confirm("Would you like to include lower case characters?")
// var upABC = confirm("Would you like to include upper case characters?")
// var num = confirm("Would you like to include numeric characters?")
// var special = confirm("Would you like to include special characters?")

// Get references to the #generate element
function generatePassword() {
  var passLength = prompt("How many characters would you like your password to have? Must be between 8 to 128 characters.")
  // Validate the length of password
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Password must be between 8 to 128 characters");
  } else {
    // Confirm user input for character types
    var lowABC = confirm("Would you like to include lower case characters?")
    if (lowerCaseCharacters) {
      allCharacters = allCharacters.concat(lowerCaseCharacters)
    };
    var upABC = confirm("Would you like to include upper case characters?")
    if (upperCaseCharacters) {
      allCharacters = allCharacters.concat(upperCaseCharacters);
    };
    var num = confirm("Would you like to include numeric characters?")
    if (numeric) {
      allCharacters = allCharacters.concat(numeric)
    };
    var special = confirm("Would you like to include special characters?")
    if (specialCharacters) {
      allCharacters = allCharacters.concat(specialCharacters)
    };
    // if user does not select any character types an alert will generate
    if (lowABC === false &&
      upABC === false &&
      num === false &&
      special === false) {
      alert("Please choose one character type.");
    }
  }
  // For loop to generate random password
  for (var i = 0; i < passLength; i++) {
    var randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    console.log(randomChar);
    result.push(randomChar)
  }

  return result.join("")
}


var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz ".split("");
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ".split("");
var numeric = "0123456789".split("");
var specialCharacters = "!@#$%^&*()_+{}[]:<>,.?/~".split("");


// Get references to the #generate element
function generatePassword(){

  var generateBtn = document.querySelector("#generate");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

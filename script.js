// Assignment code here
var writePassword = function() {

var passLength = window.prompt("Choose number of characters for your passwrod. A valid password is between 8 and 128 characters.");

if(passLength === "" || passLength === null || isNaN(passLength) || passLength < 8 || passLength > 128) {
  window.alert("You didn't enter a valid choice, try again!");
  return writePassword();
}


}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var userPassword = {
  
}
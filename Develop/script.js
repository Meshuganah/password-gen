// Assignment code here

// Potential character arrays
var lowerArr = ["q" , "w" , "e" , "r" , "t" , "y" , "u" , "i" , "o" , "p" , "a" , "s" , "d" , "f" , " g" , "h" , "j" , "k" , "l" , "z" , "x" , "c" , "v" , "b" , "n" , "m"]
var upperArr = lowerArr.map(char => char.toUpperCase());
var numArr = ["1" , "2" , "3" , "4" , "5", "6" , "7" , "8" , "9" , "0"];
var specialArr = ["!" , "@" , "#" , "$" , "%" , "^" , "&" , "*" , "(" , ")" , "_" , "-" , "=" , "+" , "{" , "[" , "}" , "]" , ";" , ":" , "," , "<" , "." , ">" , "/" , "?"]
var critArr =[];

// Function used to create password
var generatePassword = function() {
    //Prompts put to user to discover required characters
  var length = window.prompt(`Please select a length for your password. (8-128 characters long)`);

  //Logic converting input to integer, and preventing user from inputting an invalid response
  var length = parseInt(length);
  console.log(length);
  if (length < 8 || length > 128 || isNaN(length)) {
    window.alert(`Please enter a proper response.`);
    return generatePassword();
  } else {
    //Prompts user for required criteria
    var lowerCrit = window.confirm(`Does your password require lower case letters?`);
    var upperCrit = window.confirm(`Does your password require upper case letters?`);
    var numCrit = window.confirm(`Does your password require numbers?`);
    var specialCrit = window.confirm(`Does your password require special characters?`);
  };

  //Creates logic for user input criteria
  if (lowerCrit) {
    critArr = critArr.concat(lowerArr);
    console.log(critArr);
  }

  if (upperCrit) {
    critArr = critArr.concat(upperArr);
    console.log(critArr);
  }

  if (numCrit) {
    critArr = critArr.concat(numArr);
    console.log(critArr);
  }

  if (specialCrit) {
    critArr = critArr.concat(specialArr);
    console.log(critArr);
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

// Assignment code here

// Potential character arrays
var lower = "qwertyuiopasdfghjklzxcvbnm";
var upper = lower.toUpperCase();
var num = "1234567890";
var special = "`~!@#$%^&*()_+-={[}]:;<,>.?/"
var crit = "";


// Function used to create password
var generatePassword = function() {
  var password = "";
  var reqCount = 0;
  var req = "";
    //Prompts put to user to discover required characters
  var charLength = window.prompt(`Please select a length for your password. (8-128 characters long)`);

  //Logic converting input to integer, and preventing user from inputting an invalid response
  var charLength = parseInt(charLength);
  console.log(charLength);
  if (charLength < 8 || charLength > 128 || isNaN(charLength)) {
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
    crit = crit.concat(lower);
    reqCount ++;
    req += lower.charAt(
      Math.floor(Math.random() * lower.length +1)
    );
  }

  if (upperCrit) {
    crit = crit.concat(upper);
    reqCount ++;
    req += upper.charAt(
      Math.floor(Math.random() * upper.length +1)
    );
  }

  if (numCrit) {
    crit = crit.concat(num);
    reqCount ++;
    req += num.charAt(
      Math.floor(Math.random() * num.length +1)
    );
  }

  if (specialCrit) {
    crit = crit.concat(special);
    reqCount ++;
    req += special.charAt(
      Math.floor(Math.random() * special.length +1)
    );
  }

  //Generates password
  for ( i = 0; i < charLength - reqCount; i++) {
    password += crit.charAt(
      Math.floor(Math.random() * crit.length + 1)
    );
  }
  password = password.concat(req);
  return password;
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

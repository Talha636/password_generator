// Declaring all possible characters, numbers and
function getLower() {
  let lower = 'abcdefghijklmnopqrstuvxyz';
  return lower[Math.floor(Math.random() * lower.length)];
}
function getUpper() {
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
  return upper[Math.floor(Math.random() * upper.length)];
}
function getNumber() {
  let number = '1234567890';
  return number[Math.floor(Math.random() * number.length)];
}
function getSymbol() {
  let symbols = "!@#$%^&*()";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
// Assignment Code
let generateBtn = document.querySelector("#generate");

function generatePassword() {
  // ask user for length
  let length = prompt('Select a number between 8 and 128 to be your password length.');
  // validate length to be atleast 8 and less than 128
  if (length < 8 || length > 128) {
    alert('Please enter a number between 8 and 128.');
    return;
  } else {
    // ask lowercase, uppercase, number, special characters
    let lower = confirm('Would you like lowercase letters?');
    let upper = confirm('Would you like UPPERCASE letters?');
    let number = confirm('Would you like numbers?');
    let symbol = confirm('Would you like special characters letters?');
    // validate atleast one option
    if (!lower && !upper && !number && !symbol) {
      alert('You must choose "OK" for one option.');
      return;
    }
    return makePassword(length, lower, upper, number, symbol);
  }
}
// Make function
function makePassword(length, lower, upper, number, symbols) {
  // Make new array with the characters for the options that are accepted
  let pass = "";
  for (let i = 0; i < length; i++) {
    pass += lower ? getLower() : "";
    pass += upper ? getUpper() : "";
    pass += number ? getNumber() : "";
    pass += symbols ? getSymbol() : "";
  }
  // Return the new password in the html element
  return pass.slice(0, length);
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

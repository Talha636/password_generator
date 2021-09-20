// Assignment Code
let lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
let generateBtn = document.querySelector("#generate");


function generatePassword() {
  // ask user for length
  let passLength = prompt('Select a number between 8 and 128 to be your password length.');
  console.log(passLength);
  // validate length to be atleast 8 and less than 128
  if (passLength < 8 || passLength > 128) {
    alert('Please enter a number between 8 and 128.');
    generatePassword();
    return;
  }
  // ask lowercase, uppercase, number, special characters
  let passLower = confirm('Would you like lowercase letters?');
  let passUpper = confirm('Would you like UPPERCASE letters?');
  let passNumber = confirm('Would you like numbers?');
  let passSymbols = confirm('Would you like special characters letters?');
  // validate atleast one option
  if (!passLower && !passUpper && !passNumber && !passSymbols) {
    alert('You must choose "OK" for one option.');
    generatePassword();
  }
  // make function
  let pass = '';
  for (let i = 0; i < passLength; i++) {
    pass += passLower ? lower : '';
  }
  // 1. make new array with the characters for the options that are accepted
  // 2. makw new array to push randomly at least one character from the selected options arrays
  // 3. push randomly according to length in a loop to a new array

  // return the new password somewhere in the html element or alert
  return (pass.join(''));
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword()
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// make function

// 1. make new array with the characters for the options that are accepted
// 2. makw new array to push randomly at least one character from the selected options arrays
// 3. push randomly according to length in a loop to a new array

// return the new password somewhere in the html element or alert


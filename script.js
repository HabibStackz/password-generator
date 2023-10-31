// issue a prompt asking for password length and store it in a variable
// user enters length and we use the method parseToInt to change data type to number
// check if the length is between 8 and 128 characters before proceeding
// if length is more than 8 and less than 128, prompt user for character types
// ask user to confirm if password should contain Lowercase, Uppercase, numbers and special characters

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Global variables
var isLowerCase;
var isUpperCase;
var isNumeric;
var isSpecial;
var passwordLength;
var characters;

// Function to prompt user for password options
function getPasswordOptions() {
  // get password length, convert to integer and check if it meets lower & upper bound criteria
  passwordLength = parseInt(prompt("How many characters do you want your password to be?"));
  if (isNaN(passwordLength)) {
    return alert("please enter a valid integer");
  } else if (passwordLength < 8 || passwordLength > 128) {
    return alert("Password length must be more than 8 characters and less than 128 characters");
  } else {
    // confirm character types
    isLowerCase = confirm(
      "Do you want your password to include lowercase characters?");
    isUpperCase = confirm(
      "Do you want your password to include uppercase characters?");
    isNumeric = confirm(
      "Do you want your password to include numeric characters?");
    isSpecial = confirm(
      "Do you want your password to include special characters?");
  }

  // Check that at least one character type is selected and handle exception if any byr returning an alert

  if (!isLowerCase && !isUpperCase && !isNumeric && !isSpecial) {
    return alert("Please select at least one character type for your password.");
  }
}


// Function for getting a random element from an array
function getRandom(arr) {
  const randomIndex = math.floor(math.random() * arrLength);
  return arr[randomIndex]
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions()

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
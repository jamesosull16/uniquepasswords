//VARIABLE DECLARATION
var specialCharacters = [
  "!",
  "#",
  "$",
  "%",
  "&",
  '"',
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

var letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//MAIN LOGIC
function generatePassword() {
  var password = [];

  var pwdLength = prompt(
    "How long would you like your password to be? (Must be between 8-128 characters)"
  );

  if (typeof pwdLength !== "string" || pwdLength < 8 || pwdLength > 128) {
    return alert("Must be a numeric value between 8 - 128!");
  }

  var upperCase = confirm(
    "Would you like to use uppercase letters in your password?"
  );

  var lowerCase = confirm(
    "Would you like to use lowercase letters in your password?"
  );

  var numeric = confirm(
    "Would you like to use a numeric value in your password?"
  );

  var specialChar = confirm(
    "Would you like to use a special character in your password?"
  );

  for (var i = 0; i < pwdLength; i++) {
    if (upperCase) {
      var randomIndex = random(letters.length);
      var randomLetter = letters[randomIndex];
      if (password.length < pwdLength) {
        password.push(randomLetter);
      }
    }

    if (lowerCase) {
      var randomIndex = random(letters.length);
      var randomLetter = letters[randomIndex].toLowerCase();
      if (password.length < pwdLength) {
        password.push(randomLetter);
      }
    }

    if (numeric) {
      var randomNumber = random(10);
      if (password.length < pwdLength) {
        password.push(randomNumber);
      }
    }

    if (specialChar) {
      var randomIndex = random(specialCharacters.length);
      var randomCharacter = specialCharacters[randomIndex];
      if (password.length < pwdLength) {
        password.push(randomCharacter);
      }
    }
  }

  //randomizer method
  function random(limit) {
    return Math.floor(Math.random() * limit);
  }

  return password.join("");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

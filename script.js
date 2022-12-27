// Assignment Code
var generateBtn = document.querySelector("#generate");

var masterArray = []
var lowerCaseArray = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
var upperCaseArray = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialCharactersArray = ['-', '+', '*', '/', '=', ']', '[', '}', '{', '<', '>', '?', '!', '@', '#', '$', '%', '&', '*']
// Write password to the #password input
function writePassword() {
    masterArray = []
    var generatePassword = function () {
        // determines password length and what type of characters will be in the password
        var passwordLength = window.prompt('How long will your password be? must be between 8-128 characters')
        if (passwordLength >= 8 && passwordLength <= 128) {
        } else {
            window.alert('Please enter a value between 8-128 characters');
            return;
        }
        var lowerCase = window.confirm('Add lower case characters to password?');
        if (lowerCase) {
            masterArray = masterArray.concat(lowerCaseArray);
        }
        var upperCase = window.confirm('Add uper case characters to password?');
        if (upperCase) {
            masterArray = masterArray.concat(upperCaseArray);
        }
        var number = window.confirm('Add number characters to password?');
        if (number) {
            masterArray = masterArray.concat(numberArray);
        }
        var specialCharacters = window.confirm('Add special characters to password?');
        if (specialCharacters) {
            masterArray = masterArray.concat(specialCharactersArray);
        }
        // cancels the function if not character types were approved
        if (masterArray.length <= 0) {
            window.alert('Please chose at least one type of character for your password.');
            return;
        }
        // resets the password to blank, then generates a new password 
        var passwordTest = function () {
            var newPassword = ''
            for (i = 0; i < passwordLength; i++) {
                var randomNumber = Math.floor(Math.random() * masterArray.length);
                newPassword = newPassword + masterArray[randomNumber];
            }
            // test if the generated password contains at least 1 of the requested character type
            if (lowerCase) {
                i = 0;
                result = false;
                do {
                    result = lowerCaseArray.includes(newPassword[i])
                    i = i + 1
                } while (result === false && i < newPassword.length);
                if (result === false) {
                    passwordTest()
                }
            }
            if (upperCase) {
                i = 0;
                result = false;
                do {
                    result = upperCaseArray.includes(newPassword[i])
                    i = i + 1
                } while (result === false && i < newPassword.length);
                if (result === false) {
                    passwordTest()
                }
            }
            if (number) {
                i = 0;
                result = false;
                do {
                    result = numberArray.includes(newPassword[i])
                    i = i + 1
                } while (result === false && i < newPassword.length);
                if (result === false) {
                    passwordTest()
                }
            }
            if (specialCharacters) {
                i = 0;
                result = false;
                do {
                    result = specialCharactersArray.includes(newPassword[i])
                    i = i + 1
                } while (result === false && i < newPassword.length);
                if (result === false) {
                    passwordTest()
                }
            }
        return newPassword;
        }
        return passwordTest();
    }
    var password = generatePassword()
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
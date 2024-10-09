// Creates a function named generatePassowrd to make a random password with 12 characters
function generatePassword(length = 12) {
    // Assigns characters to a set of characters that it can choose from
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_';
    // Creates an empty string called password
    let password = '';
    // Creates a for loop that will repeat the steps below "length" amount of times (12)
    for (let i = 0; i < length; i++) {
        // Picks a random character from the characters string and adds it to password string
      password += characters.charAt(Math.random() * characters.length);
    }
    return password;
}

module.exports = generatePassword;
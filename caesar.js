export function encryptCaesar(inputString, key) {

    var i = 0;
    var myChar = "";
    var encryptedString = "";

    for (i = 0; i < inputString.length; i++){

        myChar = inputString[i];

        if (myChar.toUpperCase(inputString[i])){
            encryptedString += String.fromCharCode((myChar.charCodeAt(0) + key-65) % 26 + 65);
        }
        else{
            encryptedString += String.fromCharCode((myChar.charCodeAt(0) + key-97) % 26 + 97);
        }
    }
    return encryptedString;
}

export function isPalindrome(inputString) {
  	
  	var i = 0;
	var reversedString = "";

	// check if the string is valid
	if(typeof inputString != 'string'){
		console.log("Invalid Palindrome String");
		return false;
	}

	// Here, I change all the letters to lowercase, and remove spaces and punctuation
	inputString = inputString.toLowerCase();
	inputString = inputString.replace(/[.,!?\s\']/g, "");

	if(inputString == ""){
		console.log("This string didn't contain letters")
		return false;
	}

	for(i=0; i<inputString.length; i++){
		reversedString = inputString[i] + reversedString;
	}

	if(inputString == reversedString){
		console.log("The string was a palindrome");
		return true;
	}

	console.log("The string was not a palindrome");
	return false;
}
export function areParenthesesBalanced(inputString) {

	var i = 0;
	var startFlag = false;
	var myStack = [];

	for(i=0; i<inputString.length; i++){

		// The description says only describes parenthesis type brackets as mattering, so I won't worry about {} or []
		// It also says there can be other characters, which is why I'll check them individually
		if((inputString[i] == '(') || (inputString[i] == ')')){

			if(inputString[i] == '('){
				myStack.push(inputString[i]);

				// I added this to signify when the first left bracket was added, so I would know when to check for an invalid right bracket
				startFlag = true;
			}

			else if((myStack.length != 0) && (inputString[i] == ')')){
				myStack.pop();
			}

			else if((myStack.length == 0) && (inputString[i] == ')') && (startFlag == true)){
				return false;
			}
		}
	}

	if(myStack.length == 0){
		return true;
	}

	return false;
}

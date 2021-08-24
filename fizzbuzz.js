export function getFizzBuzzUntil(n) {
	
	var i = 0;
	var myArray = [];

	// check if the value is valid
	if ((typeof n != 'number') || (Math.sign == -1)){
		console.log("Invalid FizzBuzz Parameter");
	}

	if(n == 0){
		return myArray;
	}

	for(i=1; i<n+1; i++){

		if((i % 3 ==0) && (i % 5 == 0)){
			myArray[i-1] = "FizzBuzz";
		}

		else if(i % 3 == 0){
			myArray[i-1] = "Fizz";
		}

		else if(i % 5 == 0){
			myArray[i-1] = "Buzz";
		}

		else{
			myArray[i-1] = i;
		}
	}

	return myArray;
}

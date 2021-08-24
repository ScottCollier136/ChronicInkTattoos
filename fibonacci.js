export function getFibonacciUntil(n) {

	var myArray = "";

	if (n == 0) {
		return [0];
	}
	else if(n == 1){
		return [0,1];
	}
	else if(n == 2){
		return [0,1,1];
	}
	else if(n == 3){
		return [0,1,1,2];
	}
	else {
		myArray = getFibonacciUntil(n-1);

		//this cuts it off so it doesnt add an extra number
		if(myArray.length < n){
			myArray.push(myArray[myArray.length-1] + myArray[myArray.length-2]);
		}
		
		return (myArray);
	}
}

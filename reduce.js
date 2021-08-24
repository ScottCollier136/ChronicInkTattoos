export function Reduce(array, reducer, initialValue) {
  
	var i = 0;
	var result = initialValue;

	for(i=0; i<array.length; i++){
		result = reducer(result, array[i]);
	}

	return result;

}

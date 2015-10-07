// Write a function coins() that takes 
// an amount of US ¢, and returns the smallest 
// possible array of coins to make up that sum.
// 
// The coins in the returned array should be
// sorted from highest to lowest.
//
// The available coins are 25¢, 10¢, 5¢, 1¢

// Submit a link to a github repo via TIY-classroom

var cents = [25, 10, 5, 1]

function coins(sum) {
	
	var newArr = []
	
		while(sum>=cents[0]){
			newArr.push(cents[0])
			sum -= cents[0]
		}
		while(sum>=cents[1]){
			newArr.push(cents[1])
			sum-= cents[1]
		}
		while(sum>=cents[2]){
			newArr.push(cents[2])
			sum -= cents[2]
		}
		while(sum>=cents[3]){
			newArr.push(cents[3])
			sum -= cents[3]
		}
	// console.log(newArr)
	return newArr
}
// tests
// ---
var result = coins(11)
// --> 10, 1
console.assert( result instanceof Array )
console.assert( result[0] === 10 && result[1] === 1 )

result = coins(39)
// --> 25, 10, 1, 1, 1, 1
console.assert( result[0] === 25 && result[1] === 10 && result[2] === 1 && result[3] === 1 && result[4] === 1 && result[5] === 1)
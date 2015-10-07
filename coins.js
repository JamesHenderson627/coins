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
	
		while(sum>=25){
			newArr.push(25)
			sum -=25
		}
		while(sum>=10){
			newArr.push(10)
			sum-=10
		}
		while(sum>=5){
			newArr.push(5)
			sum -=5
		}
		while(sum>=1){
			newArr.push(1)
			sum -=1
		}
	//console.log(newArr)
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
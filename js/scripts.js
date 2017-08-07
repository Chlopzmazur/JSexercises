/*function drawTree(n) {

for ( var i=0; i<n; i++) {
	var star =("");

	for (var j=0; j<=i; j++){
		console.log("*");
	}

}
}

drawTree(5) */

	
function drawTree(n) {
	for ( var i=1; i<=n; i++) {  ///  i =rows
		var star=(" ");
	    {
		for ( var j=1; j<=i; j++) //// j =columns
			star += '*';
		}
		console.log(star)
	}
}

drawTree(10); // 


function drawTree(n) {
	for ( var i=1; i<=n; i++) {
		var star=(" ");
		{
		for (var star=n-i; star>=1; star--) {
			console.log(star)
		}
		}
	}  ///  i =rows
}
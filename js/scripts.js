
	
function drawTree(n){
	for (var i=1; i<=n; i++){  ///  i =rows
		var star=(" ");
	    {
		for (var j=1; j<=i; j++) //// j =columns
			star += '*';
		}
		console.log(star)
	}
}
drawTree(10);


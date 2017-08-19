function getTriangleArea(a, h){
var	triangleArea = (a*h/2);
	if ((a <= 0) || (h <= 0)){
    alert("Invalid data");
}
    else {
    console.log(triangleArea);  
}
	return;
};

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(8, 5);
var triangle3Area = getTriangleArea(7, 4);
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);
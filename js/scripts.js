
function getTriangleArea (a, h){
var a = Number(prompt ('Enter the width of triangle base')),
	h = Number(prompt ('Enter the height of a triangle')),
	TriangleArea = (a*h/2);

	if ((a <= 0) || (h <= 0)){
    console.log("Invalid data");
}
    else {
    alert (TriangleArea);
    return TriangleArea;
}
}
var triangle1Area = getTriangleArea(10, 15),
	triangle2Area = getTriangleArea(8, 6),
	triangle3Area = getTriangleArea(4, 12);
	
console.log (getTriangleArea(a, h));
console.log (triangle1Area);
console.log (triangle2Area);
console.log (triangle3Area);


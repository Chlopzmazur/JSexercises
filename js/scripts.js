function Phone(brand, price, color, critics)	{
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.critics = critics;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". According to critis this phone has rating: " + this.critics + "." );
};

var iPhone6S = new Phone("Apple", 2250, "silver", "9/10");
var SamsungGalaxyS6 = new Phone("Samsung", 1200, "black", "9/10");
var OnePlusOne = new Phone("One Plus", 1600, "black", "8,5/10");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();
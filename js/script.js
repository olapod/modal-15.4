'use strict'; 
function Phone(brand, price, color, year, memory) {
    this.brand = brand;
	this.price = price;
    this.color = color;
    this.year = year;
    this.memory = memory;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + ", memory is " + this.memory + " , the price is " + this.price + " and model year is " + this.year + ".");
}
var descriptionText = document.getElementById("description");

Phone.prototype.wwwInfo = function() {
    descriptionText.innerHTML = "The phone brand is " + this.brand + ", color is " + this.color + ", memory is " + this.memory + " , the price is " + this.price + " and model year is " + this.year + ".";
}

var iPhone6S = new Phone("Apple", 2250, "silver", 2015, "32gb");
var miMix2s = new Phone("Xiaomi", 1800, "black", 2018, "64gb");
var mi8 = new Phone("Xiaomi", 1900, "blue", 2018, "128gb");
var onePlus6t = new Phone("OnePlus", 2100, "silver", 2018, "64gb");

iPhone6S.printInfo();
miMix2s.printInfo();
mi8.printInfo();
onePlus6t.printInfo();


miMix2s.wwwInfo();



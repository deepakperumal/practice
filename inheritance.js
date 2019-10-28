let vehicle = function (brand, price) {
  this.brand = brand;
  this.price = price;
};

vehicle.prototype.calPrice = function () {
  let tax = 100;
  console.log('Brand : ' + this.brand + ' \nPrice : ' + (this.price - tax));
};

var car = new vehicle('mercedes', 2000000);
var bike = new vehicle('tvs', 40000);
var bicycle = new vehicle('somebrand', 10000);
car.calPrice();
bike.calPrice();
bicycle.calPrice();

class Vehicle {
  constructor(name) {
    this.name = name;
    this.kind = 'vehicle';
  }
  getName() {
    return this.name;
  }
}

var myVehicle = new Vehicle('test');
console.log(myVehicle.getName());

class Car extends Vehicle {
  constructor(name) {
    super(name);
    this.kind = 'car';
  }
}

var myCar = new Car('mercedes');

console.log(myCar.getName());
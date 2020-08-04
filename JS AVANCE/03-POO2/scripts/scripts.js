

//Tiré du github: 

// var car = {

// 	// properties
// 	brand: "Ford",
// 	speed: 0,

// 	// methods:

// 	accelerate: function(amount) {
// 		this.speed += amount;
// 	},

// 	brake: function(amount) {
// 		this.speed -= amount;
// 	},

// 	status: function() {
// 		return this.brand + " running at " + this.speed + " km/h";
// 	}
// };


// Try methods

// console.log(car.status());
// car.accelerate(50);
// console.log(car.status());
// car.accelerate(100);
// console.log(car.status());
// car.brake(25);
// console.log(car.status());


// But now if we want another car we need to repeat the code...
// That's unnecessary repetition.
// https://en.wikipedia.org/wiki/Don%27t_repeat_yourself

// var car2 = {

// 	brand: "Ferrari",
// 	speed: 0,

// 	accelerate: function(inc) {
// 		this.speed += inc;
// 	},

// 	brake: function(dec) {
// 		this.speed -= dec;
// 	},

// 	status: function() {
// 		return this.brand + " running at " + this.speed + " km/h";
// 	}
// };

// car2.accelerate(200);
// console.log(car2.status());
// car2.brake(100);
// console.log(car2.status());

// console.log(car2.status());
// car2.accelerate(50);
// console.log(car2.status());
// car2.accelerate(100);
// console.log(car2.status());
// car2.brake(25);
// console.log(car2.status());

class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    accelerate(amount) {
        this.speed += amount;

    }
    brake(amount) {
        this.speed -= amount;

    }
    status() {
        return this.brand + " running at " + this.speed + " km/h";
    }
};

const ford = new Car("Ford", 45);

console.log(ford.status());
ford.accelerate(50);
console.log(ford.status());
ford.accelerate(100);
console.log(ford.status());
ford.brake(25);
console.log(ford.status());

const ferrari = new Car("Ferrari", 0);

ferrari.accelerate(200);
console.log(ferrari.status());
ferrari.brake(100);
console.log(ferrari.status());



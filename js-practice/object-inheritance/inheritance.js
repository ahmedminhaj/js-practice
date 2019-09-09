function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Car(color, brand) {
  this.color = color;
  this.brand = brand;
}

function Toy(name, price, color, brand) {
  Product.call(this, name, price);
  Car.call(this, color, brand);
  this.category = 'toy';
  this.extend = function(newProps){
		for(var prop in newProps){
			if(newProps.hasOwnProperty(prop)){
				this[prop] = newProps[prop];
			}
		}
		return this;
	}
}

function BabyProduct(name, price, color, brand){
	Toy.call(this, name, price, color, brand);
}

var fun = new Toy('Toy-car', 40, 'red', 'BMW');
fun.extend({typ: 'non-electrical'});
var tan = new BabyProduct('Cricket-bat', 19, 'white', 'DSC');
tan.extend({typ: 'out door'});

console.log(fun);
console.log(tan);
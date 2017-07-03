
//块级作用域 let 

let name = 'zach'
while (true) {
    let name = 'obama'
    console.log(name)  //obama
    break
}
console.log(name)  //zach

var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6

//const也用来声明变量，但是声明的是常量。一旦声明，常量的值就不能改变。多用于引用第三方库
const monent = require('moment')

//class 新的class写法让对象原型的写法更加清晰、更像面向对象编程的语法，也更加通俗易懂
class Animal
{
	constructor(){
		this.type = 'animal'
	}
	says(say){
		console.log(this.type + 'says' + say)
	}
}
let animal = new Animal()
animal.says('hello') //animal says hello

class Dog extends Animal
{
	constructor(){
		super();
		this.type = 'dog'
	}
}
let dog = new Dog();
dog.says('hello')//dog says hello
//上面代码首先用class定义了一个“类”，可以看到里面有一个constructor方法,
//Class之间可以通过extends关键字实现继承，这比ES5的通过修改原型链实现继承，要清晰和方便很多
//super关键字，它指代父类的实例（即父类的this对象）。子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象

//arrow function
//ES5
function(x,y){
	x++;
	y++;
	return x+y;
}
//ES6
(x,y)=>{x++;y++;return x+y}

class Animal
{
	constrator(){
		this.type='animal'
	}
	says(say){function(){
			var self = this;
			setTimeout(console.log(self.type +'says'+ say),1000)
		}
	}
}
var animal = new Animal();
animal.syas('hello'); //animal says hello

class Animal
{
	constrator(){
		this.type= 'animal'
	}
	says(say){
		setTimeout(() => {
			console.log(this.type + 'says' +say)
		},1000)
	}
}
var animal = new Animal();
animal.syas('hello'); //animal says hello
//当我们使用箭头函数时，函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象

//template string 这个东西也是非常有用，当我们要插入大段的html内容到文档中时，传统的写法非常麻烦，所以之前我们通常会引用一些模板工具库，比如mustache等等
$("#result").append(
  "There are <b>" + basket.count + "</b> " +
  "items in your basket, " +
  "<em>" + basket.onSale +
  "</em> are on sale!"
);

$("#result").append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);
//用反引号（`）来标识起始，用${}来引用变量，而且所有的空格和缩进都会被保留在输出之中

//拓展参数则是另一种形式的语法糖，它允许传递数组或者类数组直接做为函数的参数而不用通过apply。
var people=['Wayou','John','Sherlock'];
//sayHello函数本来接收三个单独的参数人妖，人二和人三
function sayHello(people1,people2,people3){
	console.log(`Hello ${people1},${people2},${people3}`);
}
//但是我们将一个数组以拓展参数的形式传递，它能很好地映射到每个单独的参数
sayHello(...people);//输出：Hello Wayou,John,Sherlock 

//而在以前，如果需要传递数组当参数，我们需要使用函数的apply方法
sayHello.apply(null,people);//输出：Hello Wayou,John,Sherlock 

//destructuring
let cat = 'ken'
let dog = 'lili'
let zoo = {cat: cat, dog: dog}
console.log(zoo)  //Object {cat: "ken", dog: "lili"}

let cat = 'ken'
let dog = 'lili'
let zoo = {cat, dog}
console.log(zoo)  //Object {cat: "ken", dog: "lili"}

let dog = {type: 'animal', many: 2}
let { type, many} = dog
console.log(type, many)   //animal 2

//default, rest default很简单，意思就是默认值。大家可以看下面的例子，调用animal()方法时忘了传参数，传统的做法就是加上这一句type = type || 'cat'来指定默认值。
function animal(type){
    type = type || 'cat'  
    console.log(type)
}
animal()

function animal(type = 'cat'){
    console.log(type)
}
animal()

function animals(...types){
    console.log(types)
}
animals('cat', 'dog', 'fish') //["cat", "dog", "fish"]



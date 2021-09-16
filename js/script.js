var x = "Hello world";

function a() {
  console.log("welcome");
}
a();

function b(x){
  x += "!!!";
  console.log(x);
}
b(x);

function c() {
  var d = 4+4;
  var f ='8'
  if(d==f){
    console.log("true");
  }
  else{
    console.log("false");
  }

   //object creation
var company = new Object();
company["Name of the organization"] = "IG";
company.ceo = new Object();
company.ceo.name  ="bala";
console.log(company);
console.log(company["ceo"]);
console.log(company["Name of the organization"]); // we can use . and [] to assign and retrieve values from a object mainly [] are used when we have space
console.log(company.ceo.name);
console.log(company.ceo['name']);


var apptivo ={
  name:"Apptivo",
  ceo:{
    firstName:"Bastin",
    LastName: "gerald"
  },
  $stock: 110    // or we can specify as "stock of the company":110
};
console.log(apptivo.ceo.firstName);
  // strict equality check for type match
  if(d===f){
    console.log("true");
  }
  else{
    console.log("false");
  }
  return d;
}
 var d = c();
 console.log("value of d:"+ d);
//Function are nothing but an object
function makeMultiplier(multiplier) {
  //Closures will save the outer lexical environment for future execution
  var myFunc = function (x) {
    return multiplier * x;
  };
  return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3);
console.log(multiplyBy3(10));


//Passing function as a arguments
function ExecuteFunction(x,FunctionName) {
  return FunctionName(x);
}
var result = ExecuteFunction(5,multiplyBy3);
console.log("result:" + result);

function Test() {
  console.log("Test");
  return 100;
}

var RetVal = Test();
console.log("return Value is "+ RetVal);
//Function constructor
function circle(radius) {
  this.radius = radius;

  // this.getArea = function () {
  //   return Math.PI * Math.pow(this.radius,2);
  // };
}

//Don't add the prototype inside a function, always add this outside the respective function
//main goal of creating a prototype for a method is that we could avoid recreation of the function everytime the new object is created against this particular method
circle.prototype.getArea = function () {
  return Math.PI * Math.pow(this.radius,2);
};
var myCircle = new circle(10);
console.log(myCircle.getArea());
//object literals and this

var literalCircle={
  radius:5,
  getArea: function () {
    console.log(this);
    return Math.PI * Math.pow(this.radius,2);
  }
};

console.log(literalCircle.getArea());

//Arrays
var arr = new Array();
arr[0]="malar";
arr[1]=2;
arr[2]=function (name) {
  console.log("hello "+name);
};
arr[3] ={Name:"sara"};

console.log(arr);

console.log(arr[1]+arr[0]);
console.log(arr[2](arr[0]));
console.log(arr[3]["Name"]);
console.log(arr[3].Name);

// short hand array creation
var names = ["malar","sundar","priya"];
console.log(names);
for (var i = 0; i < names.length; i++) {
  console.log("hello "+names[i]);
}
var nameArr = [
  {Name:"malar"},
  {Name:"sundar"},
  "priya"];
console.log(nameArr);
//Immediately invoked function expression
//IIFE
(function() {
  console.log("hello!!");
})();

//or

(function() {
  console.log("hello!!");
}());

//or
(function(name) {
  console.log("hello "+ name);
})(names[0]);

// ()();
// (function (param) {
//
// })(param);
  var count = 0;
  document.getElementById("counterValue").textContent = 0;
function increment() {
  count ++;
  var counterval = document.getElementById("counterValue").Value;
  console.log(counterval);
  document.getElementById("counter").textContent = count;
  console.log(count);
  console.log("increment is invoked");
}

function decrement() {
  count --;
  document.getElementById("counter").textContent = count;
    console.log(count);
  console.log("decrement is invoked");
}

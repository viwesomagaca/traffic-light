var ConstructorFunction = function(aParameter){
    this.instanceVariable = aParameter;
    console.log("This will run when instantiated!");

    //this variable is private - only visible in the constructor function
    var length = this.instanceVariable.length;

    this.instanceMethod = function(){
        return this.instanceVariable.toUpperCase();
    }
}

// to run this code

var instanceOne = new ConstructorFunction("Look at this first!");
//this prints : "LOOK AT THIS FIRST!"
console.log(instanceOne.instanceMethod());

//this prints undefined
console.log(instanceOne.length);

var instanceTwo = new ConstructorFunction("Look at this second!");

//this prints : "LOOK AT THIS SECOND!"
console.log(instanceTwo.instanceMethod());

var Light = function(color){
    this.color = color;
}

var orangeLight = new Light('orange');
var greenLight = new Light('green');
// orange
console.log(orangeLight.color);
// green
console.log(greenLight.color);

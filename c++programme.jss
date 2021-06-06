file '/myfile' do
content 'Welcome to Technical Guftgu'
action :create
end



package 'tree' do
action :install
end

file '/myfile2' do
content 'This is My Second Project code'
action :create
owner 'root'
group 'root'
end


package 'httpd' do
action :install
end

file '/var/www/html/index.html' do
content 'Welcome to Technical Guftgu'
action :create
end


service 'httpd' do
action [:enable, :start]
end











/* Finds the lowest common multiple (LCM) of two numbers */
function LCMCalculator(x, y) { // constructor function
    let checkInt = function(x) { // inner function
        if (x % 1 !== 0)
            throw new TypeError(x + "is not an integer"); // var a =  mouseX

        return x;
    };
    
    this.a = checkInt(x)
    //   semicolons   ^^^^  are optional, a newline is enough
    this.b = checkInt(y);
}
// The prototype of object instances created by a constructor is
// that constructor's "prototype" property.
LCMCalculator.prototype = { // object literal
    constructor: LCMCalculator, // when reassigning a prototype, set the constructor property appropriately
    gcd: function() { // method that calculates the greatest common divisor
        // Euclidean algorithm:
        let a = Math.abs(this.a), b = Math.abs(this.b), t;

        if (a < b) {
            // swap variables
            // t = b; b = a; a = t;
            [a, b] = [b, a]; // swap using destructuring assignment (ES6)
        }

        while (b !== 0) {
            t = b;
            b = a % b;
            a = t;
        }

        // Only need to calculate GCD once, so "redefine" this method.
        // (Actually not redefinition—it's defined on the instance itself,
        // so that this.gcd refers to this "redefinition" instead of LCMCalculator.prototype.gcd.
        // Note that this leads to a wrong result if the LCMCalculator object members "a" and/or "b" are altered afterwards.)
        // Also, 'gcd' === "gcd", this['gcd'] === this.gcd
        this['gcd'] = function() {
            return a;
        };

        return a;
    },

    // Object property names can be specified by strings delimited by double (") or single (') quotes.
    lcm: function() {
        // Variable names do not collide with object properties, e.g., |lcm| is not |this.lcm|.
        // not using |this.a*this.b| to avoid FP precision issues
        let lcm = this.a / this.gcd() * this.b;
        
        // Only need to calculate lcm once, so "redefine" this method.
        this.lcm = function() {
            return lcm;
        };

        return lcm;
    },

    toString: function() {
        return "LCMCalculator: a = " + this.a + ", b = " + this.b;
    }
};

// Define generic output function; this implementation only works for Web browsers
function output(x) {
    document.body.appendChild(document.createTextNode(x));
    document.body.appendChild(document.createElement('br'));
}

// Note: Array's map() and forEach() are defined in JavaScript 1.6.
// They are used here to demonstrate JavaScript's inherent functional nature.
[
    [25, 55],
    [21, 56],
    [22, 58],
    [28, 56]
].map(function(pair) { // array literal + mapping function
    return new LCMCalculator(pair[0], pair[1]);
}).sort((a, b) => a.lcm() - b.lcm()) // sort with this comparative function; => is a shorthand form of a function, called "arrow function"
    .forEach(printResult);

function printResult(obj) {
    output(obj + ", gcd = " + obj.gcd() + ", lcm = " + obj.lcm());
}




















// Arrow functions let us omit the `function` keyword.
// Here `long_example` points to an anonymous function value.
const long_example = (input1, input2) => {
    console.log("Hello, World!");
    const output = input1 + input2;

    return output;
};

// If there are no braces, the arrow function simply returns the expression
// So here it's (input1 + input2)
const short_example = (input1, input2) => input1 + input2;

long_example(2, 3); // Prints "Hello, World!" and returns 5
short_example(2, 5);  // Returns 7

// If an arrow function only has one parameter, the parentheses can be removed.
const no_parentheses = input => input + 2;

no_parentheses(3); // Returns 5
In JavaScript, objects are created in the same way as functions; this is known as a function object.

Object example:

function Ball(r) {
    this.radius = r; // the "r" argument is local to the ball object
    this.area = Math.PI * (r ** 2); // parentheses don't do anything but clarify
    
    // objects can contain functions ("method")
    this.show = function() {
        drawCircle(this.radius); // references another function (that draws a circle)
    };
}

let myBall = new Ball(5); // creates a new instance of the ball object with radius 5
myBall.radius++; // object properties can usually be modified from the outside
myBall.show(); // using the inherited "show" function
Variadic function demonstration (arguments is a special variable):[67]

function sum() {
    let x = 0;

    for (let i = 0; i < arguments.length; ++i)
        x += arguments[i];

    return x;
}

sum(1, 2); // returns 3
sum(1, 2, 3); // returns 6

let counter = (function() {
    let i = 0; // private property

    return {   // public methods
        get: function() {
            alert(i);
        },
        set: function(value) {
            i = value;
        },
        increment: function() {
            alert(++i);
        }
    };
})(); // module

counter.get();      // shows 0
counter.set(6);
counter.increment(); // shows 7
counter.increment(); // shows 8
Exporting and Importing modules in JavaScript[68]

Export example:

/* mymodule.js */
// This function remains private, as it is not exported
let sum = (a, b) => {
    return a + b;
}

// Export variables
export let name = 'Alice';
export let age = 23;

// Export named functions
export function add(num1, num2) {
    return num1 + num2;
}

// Export class
export class Multiplication {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    add() {
        return sum(this.num1, this.num2);
    }
}
Import example:

// Import one property
import { add } from './mymodule.js';

console.log(add(1, 2)); // 3

// Import multiple properties
import { name, age } from './mymodule.js';
console.log(name, age);
//> "Alice", 23

// Import all properties from a module
import * from './module.js'
console.log(name, age);
//> "Alice", 23
console.log(add(1,2));
//> 3





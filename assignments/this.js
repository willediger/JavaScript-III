/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: default binding of window/console object that applies when there aren't more specific binding being applied. when "use strict" is used, the global is undefined.
* 2. Implicit Binding: Left of the dot when invoked. So when an object is getting invoked that has used `this.` inside it, you know what the this is referring to when it's being invoked by looking at the object to the left of the dot.
* 3. New binding: When a constructur function is used, you invoke it using New. The this's in the constructor function refer to the instance of the object that is being created and returned by the constructor function being called with new.
* 4. Explicit binding: when using the .call() method to invoke a function, you can explicitly pass an object as the 'this' paremeter, so that when the function definition is referring to 'this', it's going to be referring to the object you pass in as the first argument in .call()
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayBob() {
  console.log(this);
  return "bob";
}
sayBob();

// Principle 2

// code example for Implicit Binding

const banana = {
  name: 'banana',
  nameSentence: function() {
    return `this is a ${this.name}`
  }
}

console.log(banana.nameSentence());

// Principle 3

// code example for New Binding

function Animal(name, attack) {
  this.name = name;
  this.attack = attack;
  this.speak = function() {
    return `${this.name} attacks with ${this.attack}.`
  }
}

const dog = new Animal('Heidi', 'lick');

console.log(dog.speak());

// Principle 4

// code example for Explicit Binding

function sayHi() {
  return `Hi. My name is ${this.name}.`;
}

console.log(sayHi.call({name: 'Slim Shady'}));

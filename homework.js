//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favoriteFoods(person){
    for (let key in person){
        if (person[key][0] instanceof Object){
            for (let key2 in person[key][0]){
                    console.log(`My favorite ${key} from ${key2[0].toUpperCase()+key2.slice(1)} is ${person[key][0][key2].toLowerCase()}.`);
                }
        } else if (person[key] instanceof Array){
            let foods=''
            for (let key2 in person[key]) {
                 foods += person[key][key2].toLowerCase() + ' and '
            }
            console.log(`My favorite ${key} is ${foods.slice(0,-4)}.`)
        } else if (typeof key[0] == 'string'){
            console.log(`My favorite ${key} is ${person[key].toLowerCase()}.`);
        }
    };
};

favoriteFoods(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name,age){
    this.name = name;
    this.age = age;

    // Use an arrow to create the printInfo method
    this.printInfo = () => {console.log(`${this.name} is ${this.age} years old.`)};

    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 

    this.addAge=(increaseAge)=>{
        this.age += increaseAge;
        console.log(`${this.name} is now ${this.age} years old.`);
    }
}

let person1 = new Person('Joe', 21);
let person2 = new Person('John', 25);

person1.printInfo();
person2.printInfo();
person1.addAge(3);

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number" */

function checkLen(sString){
    return new Promise((resolve,reject) => {
        if (sString.length > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

checkLen('thisisbigger')
.then( () => {
    console.log('Big word')
})
.catch( () => {
    console.log('Small Number')
})

// Find the Remainder
function remainder(n, m){
    // Divide the larger argument by the smaller argument and return the remainder
    if (n > m && m !=0) {
        return n%m
    } else if (m > n && n !=0) {
        return m%n
    } else if (m == n && n != 0) {
        return m%n
    } else {
        return NaN
    }
  }
  
console.log(remainder(-13,-13))

// Sum of Multiples
function sumMul(n,m){
    if (n == m || n > m){
        return 'INVALID';
    } else {
        let sum = 0;
        let i = n;
        while (i < m) {
            sum += i;
            i+=n;
        };
        return sum;
    }; 
};

console.log(sumMul(4,-7))
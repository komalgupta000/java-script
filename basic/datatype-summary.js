//  # Primitive
//     * 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt


const score = 300
const scoreValue = 300.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const Id = Symbol('1234')
const anotherId = Symbol('1234')

console.log(Id === anotherId);

const bigNumber = 8323842592934752n


//  # Reference (Non-Primitive)
//  * Array,  Objects, Functions

const heros = ["shaktiman" , "spiderman"];
let myObj = {
    name : "komal",
    age : 17,

}
const myFunction = function(){
    console.log("Hello world")
}
console.log(typeof heros);
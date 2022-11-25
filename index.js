// 1
let name = "Alex"

let nameIs =prompt ("What is your name ?").trim()

if(nameIs === name){
    console.log('you are welcome')
} else {
    console.log('Sorry, goodbye ')
}

// 2
let account = 7777

let accounts = confirm ("Your password is 7777?")

if (accounts === true ) {
    console.log ('correct')
} else {
    console.log ('mistake')
}

// 3
let money =10000

let bank = prompt("How much to cash out?")

if (bank <= 9999){
    console.log('come through')
} else if (bank >=10000){
    console.log('insufficient funds')
} else {
    console.log('bum')
}

// 4

// How much money did I withdraw

// How much money is left

// money was =10000

// 5
let names = prompt( 'What is your name?').toUpperCase() .trim( ) 
let age= prompt( 'Are you upper 20?').trim( )
let cash = prompt ('How much money you have?')

if(names[0] === 'A' && age === true || cash >= 100 ) {
    console.log('welcome')
} else if (age <=41){
    console.log('you are old')
} else {
    console.log('GOOOOOO')
}

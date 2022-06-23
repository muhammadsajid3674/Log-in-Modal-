// BITWISE

// 1 = 00000001
// 2 = 00000010

/* const readPermission = 4; 
const writePermission = 2; 
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission;
//  console.log(myPermission)

let message = (myPermission & readPermission) ? 'yes' : 'no';

console.log(message) */

//////////////////////////////////////////////////////////////////

// function start() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i)
//     }
// }

// var => function-scoped
// ES6 (2015): let, const => block-scoped

// start();


// alert("hello world")

// var number = 10
// var lumber = "sajid"

// console.log(number)

// var userNumber = prompt("Enter your number")
// var number = 10

// var finalValue = userNumber + number;

// console.log(finalValue)

///////////////////////////////////////////////////////////

// var userInput = prompt("Enter your name...")

// var answer = "sajjad"

// if (userInput === answer) {
//     console.log(userInput)
// }
// else {
//     alert("Wrong")
// }

// var correctAnswer = "sajjad";
// var score = 0
// if (userInput === correctAnswer) {
//     finalScore = score + 3;
//     userIQ = "genius";
//     console.log(finalScore)
//     alert(userIQ);
// }
// else if (userInput !== correctAnswer) {
//     userIQ = "PROBLEMATIC";
//     console.log(score)
//     alert(userIQ)
// }

/////////////////////////////////////////////////////////////

// var age = prompt("Enter your age...")
// var gender = prompt("Enter your gender...")

// if (age <= 21 && gender === "male") {
//     alert("You are on board!")
// }
// else {
//     alert("You are a CUNT!  ")
// }

////////////////////////////////////////////////////////////    

// var sameer = prompt("Designation?")

// if (sameer === "ui developer" || sameer === "web developer") {
//     alert("Sameer you are on board")
// }
// else {
//     alert("Not for this time")
// }

////////////////////////////////////////////////////////////

// var a = 10
// var lumber = a++ + a-- + ++a

// console.log(lumber)

///////////////////////////////////////////////////////////

var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');

function userInput() {
    document.querySelector('form.pure-form').addEventListener('submit', function (e) {

        //prevent the normal submission of the form
        e.preventDefault();
    
        const arr = [emailInput.value, passwordInput.value]
        // const upperCase = arr.value.toUpperCase()

        console.log(arr);    
        console.log("Email Address : " + arr[0]);    
    });
}
userInput()

/////////////////////////////////////////////////////////////

// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

/////////////////////////////////////////////////////////////

// var fruits = ["apple", "banana", "mango", "orange"]

// fruits.pop()
// fruits.push("PEACH")

// fruits.shift()
// fruits.unshift("PEACH")

// var copyArr = fruits.slice(0, 2)
// fruits.splice(0, 1)

// var indexNo = fruits.indexOf("PEACH")

// console.log(fruits)
// console.log(indexNo)
// console.log(copyArr)

/////////////////////////////////////////////////////////////

// var userName = prompt("Enter your name..")
// var age = prompt("Enter your age..")
// var nickName = prompt("Enter your Nickname..")

// var arr = [userName, age, nickName]

// console.log(arr)
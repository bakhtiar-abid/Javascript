// var message = "ECMAScript 5.1. Older browsers support at least ECMAScript 3. On June 17, 2015, ECMA International published the sixth major version of ECMAScript, which is officially called ECMAScript 2015, and was initially referred to as ECMAScript 6 or ES6. Since then, ECMAScript standards are on yearly release cycles. This documentation refers to the latest draft version, which is currently ECMAScript 2020";


// alert("You have written "+ message.length + " characters, " + " you have characters " + (140-message.length) + " left. "); 

// var name = prompt("Enter your characters");
// var nameCount = name.length;
//  var maxCount = name.slice(0,140);

// alert(" You have entered "+ nameCount + " Characters "+ " Your characters are cut down to only 140 characters "+ maxCount)

// var name = prompt ("What's your name ?");

// var yourName = name.slice(0,1);

// var lastName = name.slice(1,14);

// var showingName = yourName.toUpperCase();

// var showingName1 = lastName.toLowerCase();

// alert(" Hello " + showingName + showingName1);

/*calculating humanAge*/

// var dogAge = prompt("Enter the dog age");

// var humanAge = (dogAge -2) * 4 + 21;
// alert(" This dog age is " +  humanAge + " in Human age ");

// function getMilk(bottles) {
//     var perBottle = Math.floor(bottles/1.5);   
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("you will get "+ perBottle);
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");

// }
// getMilk(5);

function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
     
    var days = 365;
    
    var weeks = 52;

    var months = 12;

var currentDays =  32850 -(age*days);
var currentWeeks = 4692-(age*weeks);
var currentMonths = 1080-(age*months);

console.log("You have "+ currentDays + " days, " + currentWeeks + " weeks, and "+ currentMonths + " months left. " );
    
    
    
/*************Don't change the code below**********/
}



lifeInWeeks(25);

// function machineWoman(person){

//   let a =  prompt("Please Enter your Daily Working Hours");
//     const dailyWorkingHours = a;

//     let b =  prompt("Please Enter your Daily Studying Hours");
//     const dailyStudyingHours = b;

//    let c =  prompt("Please enter your Daily time pass Hours");
//    const timePassHours = c;

//    let d = prompt ("Please enter your daily comicreading hours");
//     const dailyComicReadingHours = d;

//     const computeTime = (dailyWorkingHours + dailyStudyingHours + timePassHours + dailyComicReadingHours);
//  console.log (" Your total spending hours in a day is " + (computeTime) + " Hours in a day ");
//  return computeTime;

   

    
// }





function getMilk(bottles) {
    var perBottle = Math.floor(bottles/1.5);   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("you will get "+ perBottle);
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return bottles % 1.5;

}
 var change = getMilk(4); // remainder of this division.
 console.log(change);

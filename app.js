// chapter 21-25

// Task No 1

// var firstName = prompt("Enter Your First Name");
// var lastName =  prompt("Enter Your Last Name");

// var fullName = firstName +  " " + lastName;

// alert("Welcome Mr. " + " " + fullName);


// Task No 2


// var favMobile = prompt("Tell Us Your Favourite Mobile Phone Model");

// document.write("My Favrouite Phone Is: " + "  " + favMobile + "<br>");
// document.write("Length of String: " + "  " + favMobile.length);



// Task No 3

// var String = "Pakistani";

// var index = String.indexOf("n");

// document.write("String: " +  " " + String + "<br>");
// document.write("Index of 'n': " + " " +index);


// Task No 4

// var string = "Hello World";
// var lastIndex = string.lastIndexOf("l");

// document.write("String: " + " " + string + "<br>");
// document.write("Last Index of  'l' : " + " " + lastIndex);


// Task No 5


// var string = "Pakistani";

// var char = string.charAt(3);

// document.write("String: " + " " + string + "<br>");
// document.write("Chracter at index 3: " + " " + char);




// Task No 6

// var firstName = prompt("Enter Your First Name");
// var lastName =  prompt("Enter Your Last Name");

// var fullName = firstName.concat(" " + lastName);

// document.write(fullName);


// Task No 7

// var city ="Hyderabad";

// var replacement = city.replace("Hyder","Islam");
// document.write("City:" + " " + city + "<br>");
// document.write("After Replacement:" + " " + replacement);


// Task No 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";


// for (var i = 0; i < message.length; i++) {
//      if (text.slice(i, i + 4) === "and") {
//      message = message.slice(0, i) + "&" + message.slice(i + 4);
//      }
//      document.write(message);
//      }



// Task no 9


// var valueInString = "472";
// var Type1 = typeof(valueInString);

// var valueInNumber = Number(valueInString);
// var Type2 = typeof(valueInNumber);

// document.write("Value:" + " " + valueInString + "<br>");
// document.write("Type:" + " " + Type1 + "<br>"+ "<br>");

// document.write("Value:" + " " + valueInNumber + "<br>");
// document.write("Type:" + " " + Type2 + "<br>");


// Task No 10

// var userInput = prompt("Enter a Word");
// var uppercase = userInput.toUpperCase();

// document.write("User Input:"+ " " + userInput + "<br>");
// document.write("Upper Case:"+ " " + uppercase );



// Task No 11

// var userInput = prompt("Enter a Word");

// var firstLetter = userInput.slice(0,1);
// var secondLetter = userInput.slice(1,10);

// var titleCase = firstLetter.toUpperCase() + secondLetter;

// document.write("User Input:"+ " " + userInput + "<br>");
// document.write("Title Case:"+ " " + titleCase );


// Task No 12


// var num = 35.36;

// var string = num.toString();

// var firststring = string.slice(0,2);
// var secondstring = string.slice(3,5);

// var Result = firststring.concat(secondstring);
// document.write("Number :" + " " + num + "<br>");
// document.write("Result:" + " " + Result);




// Task No 13

// var a = prompt("Enter ")
// for(i=0;i<a.length;i++){
// if(a[i] === String.fromCharCode(33) || a[i] === String.fromCharCode(64) || a[i] === String.fromCharCode(46) || a[i] === String.fromCharCode(44)){
//     alert("please Enter a valid username");
// }
// else{
//     alert("Username is : " + a);
//     break;
// }}



// Task No 14

// var items = ["cake", "apple pie", "cookie", "chips", "pattie"];

// var a = prompt("Enter item name");
// var a = a.toLowerCase();

// for( var i=0;i<items.length;i++){
//     if(a === items[i]){
//         document.write( items[i] + " "  + "is available at index " + " " + items.indexOf(items[i]));
//         break;
//     }
//     else{
//         document.write("we are sorry. "+ " " + a + " " + "is not available in our bakery");
//         break;
//     }
// }






// Task No 15



// var password = prompt("Enter Your Password Here...!");
// var cond1 = 






// Task No 16

// var university = "University Of Karachi";

// var a = university.split("");

// document.write(a[0] + "<br>");
// document.write(a[1] + "<br>");
// document.write(a[2] + "<br>");
// document.write(a[3] + "<br>");
// document.write(a[4] + "<br>");
// document.write(a[5] + "<br>");
// document.write(a[6] + "<br>");
// document.write(a[7] + "<br>");
// document.write(a[8] + "<br>");
// document.write(a[9] + "<br>");

// document.write(a[10] + "<br>");
// document.write(a[11] + "<br>");

// document.write(a[12] + "<br>");
// document.write(a[13] + "<br>");
// document.write(a[14] + "<br>");
// document.write(a[15] + "<br>");
// document.write(a[16] + "<br>");
// document.write(a[17] + "<br>");
// document.write(a[18] + "<br>");
// document.write(a[19] + "<br>");
// document.write(a[20] + "<br>");







// Task No 17



// var string =prompt("Enter a Word Here...");

// var lastChar = string.charAt(string.length-1);

// document.write("User Input :" + " " + string + "<br>");
// document.write("Last Character of Input:" + " " + lastChar);





// Task No 18








// Chapter 26 - 30 


// Task No 1

// var positiveInt = +prompt("Enter an Positive Number");

// document.write("Number : " + " " + positiveInt + "<br>");
// document.write("Round of Value : " + " " + Math.round(positiveInt) + "<br>");
// document.write("Floor Value : " + " " + Math.floor(positiveInt) + "<br>");
// document.write("Ceil Value : " + " " + Math.ceil(positiveInt) + "<br>");


// Task No 2


// var NegativeFloatInt = +prompt("Enter an Positive Number");

// document.write("Number : " + " " + NegativeFloatInt + "<br>");
// document.write("Round of Value : " + " " + Math.round(NegativeFloatInt) + "<br>");
// document.write("Floor Value : " + " " + Math.floor(NegativeFloatInt) + "<br>");
// document.write("Ceil Value : " + " " + Math.ceil(NegativeFloatInt) + "<br>");



// Task No 3



// var value = +prompt("Enter a Value");
// var absoluteVal = Math.abs(value);

// document.write("The Absolute Value of : " + value + " " + "is" + " " + absoluteVal);


// Task No 4


// var randomdiceNum = Math.round(Math.random() * 10 );
// document.write("Random Dice Value : " + " " + randomdiceNum + "<br>");
// document.write("Random Dice Value : " + " " + (Math.round(randomdiceNum) + 1) + "<br>");



// Task No 5

// var randomCoin = Math.round(Math.random() * 2);

// if(randomCoin === 2){
//     document.write(randomCoin + "<br>");
//     document.write("random coin value : Heads ");
// }
// else if(randomCoin == 1){
//     document.write(randomCoin + "<br>");
//     document.write("random coin value : Tails ");
// }



// Task No 6


// var random = Math.round(Math.random() * 100);
// document.write("Random Number Between 1 To 100 : " + " " + random);

// Task No 7


//  var val = prompt("Enter Your Weight Here in Kgs...!");


// var userweight = parseFloat(val);

// document.write("The Weight of User is : " + " " + userweight + " " + "Kilograms "+ "<br>");





// Task No 8

// var userSecNum = +prompt("Enter a Number Between 1 To 10");
// var secretNum = Math.round(Math.random(userSecNum) * 10);

// if(userSecNum == secretNum){

//     alert("Congratulations");
// }
// else{
//     alert("Try again");
// }





// Chapter No 31 To 34



// Task No 1


// var currentDate = new Date();
// document.write(currentDate);


// Task No 2

// var currentDate = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";



// var currentMonth = month[currentDate.getMonth()];
// document.write("Current Month:" + " " + currentMonth);


// Task No 3


// var currentDate = new Date();
// var day = new Array();
// day[0] = "Sunday";
// day[1] = "Monday";
// day[2] = "Tuesday";
// day[3] = "Wednesday";
// day[4] = "Thursday";
// day[5] = "Friday";
// day[6] = "Saturday";


// var cMonth = day[currentDate.getDay()];
// var CurrentMonth = cMonth.slice(0,3);
// document.write("Today is : " + " " + CurrentMonth);




// Task No 4

// var currentDate = new Date();
// var funDay = currentDate.getDay();
// var day = new Array();

// day[0] = "Sunday";
// day[1] = "Monday";
// day[2] = "Tuesday";
// day[3] = "Wednesday";
// day[4] = "Thursday";
// day[5] = "Friday";
// day[6] = "Saturday";

// if(funDay === day[0] || day [6] ){
//     document.write("It’s Fun day")
// }


// Task No 5


// var currentMonth = new Date();
// var date = currentMonth.getDate();

// if(date < 16){
//     document.write("First fifteen days of the month");
// }else{
//     document.write("Last days of the month");
// }


// Task No 6

// var currentDate = new Date();
// var since1970 = new Date(currentDate);
// var milli = since1970.getTime();
// var minutes = milli/(1000*60*60); 



// document.write(currentDate + "<br>");
// document.write("Elapsed milliseconds since January 1 , 1970 : " + " " + milli  + "<br>");
// document.write("Elapsed minutes since January 1 , 1970 : " + " " + minutes);



// Task No 7


// var currentDate = new Date();
// var test = currentDate.getHours();

// if(test < 12){
//     document.write("It's AM");
// }else{
//     document.write("It's P.M")
// }


// Task No 8


// var myDateObject = new Date("Dec 31, 2020");
// var laterDate = myDateObject;
// document.write(laterDate);



// var currentDate = new Date();
// var currentdays = currentDate.getDay();




// Task No 9

// var ramdan1st = new Date("June 18, 2015");
// var currentDate = new Date();

// var diffTime = currentDate.getTime() - ramdan1st.getTime() ;
// var  diffDays = diffTime/(1000*60*60*24);


// document.write(Math.round(diffDays) + " " + "has been Passed since 1st Ramdan,2015");



// Task No 10


// var refrenceDate = new Date();
// var beginingDate = new Date("Jan 01, 2020");

// var diffDates = refrenceDate.getTime() - beginingDate.getTime();

// document.write("On Refrence Date " + refrenceDate + " " +  "," + " <br>" +  Math.round(diffDates/(1000*60)) + "Seconds has passed since begining of 2020 " );


// Task No 11


// var currentDate =new Date();

// var resetHour = new Date(new Date().getTime() - 60*60*1000);

// document.write("Current Date : " + currentDate + "<br>");
// document.write("1 Hour Ago, it was " + resetHour);




// Task No 12 



// var currentDate = new Date();
// document.write("Current Date : " + currentDate + "<br>");


// var day = new Array();
// day[0] = "Sunday";
// day[1] = "Monday";
// day[2] = "Tuesday";
// day[3] = "Wednesday";
// day[4] = "Thursday";
// day[5] = "Friday";
// day[6] = "Saturday";

// var dayInword = day[currentDate.getDay()];
// var myday = dayInword.slice(0,3);

// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";

// var mymonth = month[currentDate.getMonth()];
// var mymon = mymonth.slice(0,3);

// var date = currentDate.getDate();
// var back = currentDate.getFullYear() -100;

// var mydate = "16:43:28 GMT+0500 (Pakistan Standard Time)";

// var yearack = myday + " " + mymon + " " + date + " " + back + " " + mydate;

// document.write("100 Years Back it Was : " + yearack);









// Task No 13

// var currentDate = new Date();
// var currentDateMilli = currentDate.getTime();

// var userAgeDate = new Date(prompt("Enter Your Age Here..."));
// var userAgeMilli =  userAgeDate.getTime();

// var diff = currentDateMilli - userAgeMilli;

// var Age =Math.round(diff/(1000*60*60*24*30*12));

// var Year = userAgeDate.getFullYear();


// document.write("Your Age is : " + " " + Age + "<br>");
// document.write("Your Birth Year is : " + " " + Year);


// document.write(userAge);



// Task No 14

// var customerName = prompt("Enter Customer Name Here");

// var currentDate = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";

// var currentMonth = month[currentDate.getMonth()];

// var numOfUnits = 410;
// var chargesPerUnit = 16;
// var latePay = 350;

// var NAmtWinDue = numOfUnits * chargesPerUnit;
// var GAmtAftDue = NAmtWinDue + latePay;

// document.write("Customer Name :" + " " + customerName + "<br>");
// document.write("Month :" + " " + currentMonth + "<br>");
// document.write("Number Of Units :" + " " + numOfUnits + "<br>");
// document.write("Charges Per Units :" + " " + chargesPerUnit + "<br>");
// document.write("Charges Per Units :" + " " + chargesPerUnit + "<br>");
// document.write("Net Amount Payable (within Due Date) :" + " " + NAmtWinDue + "<br>");
// document.write("Gross Amount Payable (after Due Date) :" + " " + GAmtAftDue + "<br>");





// Chapter No 35-38

// Task No 1


// function currentDate(){
//      var a = new Date();
//      document.write(a);
// }


// currentDate();



// Task No 2



// function greeting(firstName,lastName){

//  var FullName = firstName + " " + lastName;
//  document.write("Hello! " + " " + FullName);

// }

// greeting("Sharjeel","Rehman");



// Task No 3


// function add(a,b){
//   var c = a + b;
//   return c;
// // document.write(c);
// }

// var sum = add(4,4);
// alert(sum);


// Task No 4


// function calculator(num1,operator,num2){
//     num1 = +prompt("Enter Val 1");
//     operator = prompt("Enter Sign");
//     num2 = +prompt("Enter Val 2");

//     if(operator === "+"){
//         var a = num1  + num2;
//         return a;
//     }
    
//     else if(operator === "-"){

//          var a =  num1  - num2;
//          return a;
//     }
//     else if(operator === "*"){
        
//          var a = num1  * num2;
//          return a;
//     }
//     else {
//         return "Incorrect sign";
//     }
// }

// var cal = calculator();
// alert(cal);




// Task No 5

// function square(a){
//     document.write(a*a);

// }

// square(5);



// Task No 6
// var n = +prompt("Enter a Number");

// function Factorial(n) { 
//     if (n === 0) {  
//         return 1;  
//     } 
//     else {  
//         return n * Factorial( n - 1 );  
//     } 
// } 

// var b = Factorial(n);
// document.write(b);





// Task No 7

// function count(){
//     var start = +prompt("Enter start Value");
//     var end = +prompt("Enter End value");

//     for(a = start ; a<=end; a++){
//       document.write(a + "<br>");
//     }
// }

// count();




// Task No 9


// function AreaOfRectangle(){
//      var A;
//      A = width * height;
//      document.write(A);
// }


// AreaOfRectangle(width=10,height=5);




// Task No 10


// function palindrome(word){

//     var check  = "";
//     for(var  i =word.length - 1; i >=0; i--  ){
//         check += word[i];
//     }
// if(word === check){
// return z;
// }


// var a  = palindrome(madam);
// document.write(a);



// Task No 11


// function capitalize(string){
//     var b =string.slice(0,1);
//     var c = b.toUpperCase();
//     document.write(c);
// }


// capitalize("hello");


// Task No 12


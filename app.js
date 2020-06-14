

// =======> Chapter #1 and Task #1

        alert('Hello World');

// =======> Chapter #1 and Task #2        

       alert("Error! Please enter a valid password");

// =======> Chapter #1 and Task #3

      alert("Welcome to JS Land... \n Happ Coding!")

// =======> Chapter #1 and Task #4
 
     alert("Welcome to JS Land...");
     alert(" Happ Coding!"); 

// =======> Chapter #1 and Task #5

     console.log("Hello I can run JS through my web browser's console");

     

// =======> Chapter #2 and Task #1

   var username;

// =======> Chapter #2 and Task #2

  var myName = "Hamza Ahmed Sheikh";

// =======> Chapter #2 and Task #3

  var message;

  message = "Hello World 1";

     alert(message);

// =======> Chapter #2 and Task #4

var name="Johne Doe";
  
var age="15 years old";
    
var course="Certified Mobile Application Development"; 
  
    alert(name); 
    alert(age) 
    alert(course);

// =======> Chapter #2 and Task #5

var order="PIZZA\nPIZZ\nPIZ\nPI\nP";
     
    alert(order);

// =======> Chapter #2 and Task #6

var email;

email="hamzaahmedsheikh313@gmail.com";
 
 alert("My email address is " + email);

// // =======> Chapter #2 and Task #7

var book;

book="A smarter way to learn Javascript";

alert("I am trying to learn from the Book " + book);

// =======> Chapter #2 and Task #8

  document.write("Yah! I can write HTML content through JavaScript" + "<br />");

// =======> Chapter #2 and Task #9


var design='▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';

      alert(design);

                                      
// =======> Chapter #3 and Task #1      

  var age= 19;

 alert("I am " + age + " years old")

// =======> Chapter #3 and Task #2

  var visted;
 
  visted = "You have visited this site 14 times"; 

  alert(visted);

// =======> Chapter #3 and Task #3   

  var birthYear;

  birthYear= 1999;
 
 var age="<br />" + "My birth year is " + birthYear+ "<br/> <br />";

 document.write(age);

 document.write("Data type my declared variable is   "+ typeof(birthYear) + "<br /> <br />");

// =======> Chapter #3 and Task #4      

var product="<b>John Doe</b> ordered <b>5 T-shirt(s)</b> on XYZ Clothing store. <br/> <br/>"; 
 
  document.write(product);
                 

 // =======> Chapter #4 and Task #1      

 var one, two, three;

 // =======> Chapter #4 and Task #2

 // legal variable names
 
 var $dev;
 var _birds;
 var carNames;
 var h1;
 var person;
 
 // illegal variable names

//var 1stPosition;
//var $ Myname;
//var Myname;
//var alert;
//var document;

// =======> Chapter #4 and Task #3

var rule="<h3>Rules for naming JS variables</h3>";

         document.write(rule);

var number="Variable names can only contain, numbers, $ and _. For example: $my_1stVariable <br/>";

        document.write(number);

var letter="Variable must begin with a letter, $ or _. For example: $name, _name or name <br/>";

        document.write(letter);

var caseSensitive="Variable names are case sensitive <br/>";
 
       document.write(caseSensitive);

var jsKeyword="Variable names should not be JS keywords";
    
       document.write(jsKeyword + "<br />");

             
 // =======> Chapter #5 and Task #1   

 var num1 = 3;
 var num2 = 5;
 var num3 = num1 + num2;

  document.write("<br /> Sum of 3 and 5 is " + num3);

 // =======> Chapter #5 and Task #2

 var num4 = 3;
 var num5 = 5;
 var num6 = num4 - num5;

  document.write("<br /> Subtraction of 5 and 3 is " + num6);

 var num7 = 3;
 var num8 = 5;
 var num9 = num7 * num8;

  document.write("<br /> Multiplication of 3 and 5 is " + num9);

 var num10 = 3;
 var num11 = 5;
 var num12 = num10 / num11;

  document.write("<br /> Division of 3 and 5 is " + num12);

 var num13 = 3;
 var num14 = 5;
 var num15 = num13 % num14;

  document.write("<br /> Modulus of 3 and 5 is " + num15);

 // =======> Chapter #5 and Task #3

 var add;

  document.write("<br /> <br/> Value after variable declaration is  "+add);

 add=5;
     
 document.write("<br/>Initial value is: "+ add);
 
 add++;

  document.write("<br/>Value after increment is: "+ add);
    
 add=add+7;
   
   document.write("<br/>Value after addition is: "+ add);

 add--;
     document.write("<br/>Value after decrement is: "+ add);
      
 add=add%3;

   document.write("<br/>The remainder is: "+ add);

// =======> Chapter #5 and Task #4

var movie="<br/> <br /> Total cost to buy 5 ticket to a movie is PKR "  
        document.write(movie);
   
var ticketPrice= 600;

var totalPrice= 600*5 ;      

  document.write(totalPrice);


// =======> Chapter #5 and Task #5

var number = +prompt("Please enter a number:");

var heading = "Table Of " + number;
  document.write("<br /> <br />" + heading)

 for (var i=1; i <= 10; i++) {
        document.write("<br />" + number + " x " + i + " = " + i*number );
  }


// =======> Chapter #5 and Task #6

var celsiusTemperature= 25;

var fahrenheit= (celsiusTemperature*9/5)+32;

 document.write("<br/> <br /> 25°C is  "+ fahrenheit + "°F");


var fahrenheiTemperature= 70;

var celsius= (fahrenheiTemperature-32)*5/9;

    document.write("<br/>70°F is " + celsius + "°C" );


// =======> Chapter #5 and Task #7   

var headingZero="<h3>Shopping Cart</h3>"

  document.write(headingZero);

   var priceOfItem1= 650; 
          
   var  orderedQuantityOfItem1= 3;
   
   var  priceOfItem2= 100;
   
   var  orderedQuantityOfItem2= 7;
    
   var  shippingCharges= 100;
   
   
    document.write("Price of item 1 is " + priceOfItem1);
   
    document.write("<br/>Quantity of Item1 is " + orderedQuantityOfItem1);
   
    document.write("<br/>Price of item 2 is " + priceOfItem2);
   
    document.write("<br/>Quantity of item 2 is " + orderedQuantityOfItem2);
   
    document.write("<br/>Shipping Charges is " + shippingCharges);   
   
   
   var totalCost=(priceOfItem1*3)+(priceOfItem2*7)+(shippingCharges);
   
     document.write("<br/> <br /> Total Cost of your order " + totalCost);


// =======> Chapter #5 and Task #8

 var heading="<h3>Marks Sheet</h3>"

  document.write(heading);

 var totalMark= 980;

 document.write("Total Marks: "+ totalMark);

 var mark= 804;

 document.write("<br/>Mark obtained: " + 804);
   
   
var totalPercentage= mark * 100 / totalMark;

 document.write("<br/>Percentage: "+totalPercentage + "%");

// =======> Chapter #5 and Task #9

var headingOne="<h3>Currency in PKR</h3>"

       document.write(headingOne);

var totalCurrencyInPKR= 104.8 * 10 + 25 * 28 ; 

  document.write("Total Currency in PKR: "+totalCurrencyInPKR);

var usDollar= 10;

var saRiyal= 25;

var dollarRateInRs= 104.8;

var riyalRateInRs= 28;

var convertInPK= usDollar * dollarRateInRs + saRiyal * riyalRateInRs;

 document.write("<br/>Total Currency in PKR: " + convertInPK);

// =======> Chapter #5 and Task #10

var numbers = 8;

var cal = numbers + 5 * 10 / 2;

 alert("Perform all calculations in a single expression " + cal);


// =======> Chapter #5 and Task #11

 var headingTwo="<h3>Age Calculator</h3>"

   document.write(headingTwo);

 var currentYear= 2020;

  document.write("Current Year: " + currentYear);

 var birthYear= 1992;

  document.write("<br/>Birth Year: " + birthYear);

 var yourAge= currentYear - birthYear;

  document.write("<br/>Your Age: " + yourAge);

// =======> Chapter #5 and Task #12

 var headingThree="<h3>The Geometrizer</h3>"

    document.write(headingThree);

var  radiusOfCircle= 20 ;  // circumference of circle 2 π r

var  pie= 3.142 ;  //   π = 3.142 

   document.write("Radius of a Circle: " + radiusOfCircle)

   document.write("<br/>The circumference is: " + 2 * pie * radiusOfCircle );

var areaOfCircle= (pie) * (radiusOfCircle**2);

  document.write("<br/>The area is: " + areaOfCircle);

// =======> Chapter #5 and Task #13

var headingFour="<h3>The Lifetime Supply Calculator</h3>"
 
       document.write(headingFour);

var  favoriteSnack= "chocolate chip";

       document.write("Favourite Snack: " + favoriteSnack);

var age= 18;
 
   document.write("<br/>Current Age: " + age);

var maximumAge= 65 ;

   document.write("<br/>Estimated Maximum Age: "+ maximumAge);

  var amountOfSnacksPerDay= 3;
  
  document.write("<br/>Amount of snacks per day : "+ amountOfSnacksPerDay)   

var totalLife= (maximumAge - age) * amountOfSnacksPerDay  ;

  alert(totalLife);

  document.write("<br/>You will need " + totalLife + " chocolate chip to last you until the ripe old age of " + maximumAge);
   

// =======> Chapter #6 and Task #1                

 var heading = "<br /> <br /> Result:<br/> ";
      document.write(heading);
   
  var a = 10;
                
   document.write("The value of is: " + a + "<br/>..............................");
    
          ++a;
                
    document.write("<br/><br/>The value of ++a is: " +  ++a); //11
    
    document.write("<br/>Now the value of a is: " + a);  //11
    
    document.write("<br/><br/>The value of a++ is: " + a++); //11
        
    document.write("<br/>Now the value of a is: "+ a); // 12
    
    document.write("<br/><br/>The value of --a is: "+ --a); //11
    
    document.write("<br/>Now the value of a is: "+ a); // 11
    
    document.write("<br/><br/>The value of a-- is: " + a--); //11
    
    document.write("<br/>Now the value of a is: "+ a); //10               


// =======> Chapter #6 and Task #2

 var a = 2; // (--a = 1) 
 
 var b = 1; // (--b = 0) (++b = 1) (b-- = 1) (b = 0)
    
 var result = --a - --b + ++b + b--; // 1 - 0 + 1 + 1 =
    
    
    document.write(" <br /> a is " + a); 
    document.write("<br/> b is " + b);
    document.write("<br/> result is " + result);   

// =======> Chapter #6 and Task #3  

var  name = prompt("What is your name?");

   alert("Hello " + name)

// =======> Chapter #6 and Task #4

var number1 = +prompt("Please enter a number:");

console.log(number1);

  if (number1 ==  0) {
     var z = 5   
      for (var i=1; i <= 10; i++) {
            console.log("<br />" + z + " x " + i + " = " + i*z );
       }       
  }

  else {
      for (var i=1; i <= 10; i++) {
            console.log("<br />" + number1 + " x " + i + " = " + i*number1 );
       }
  }


// =======> Chapter #6 and Task #5

var subject = prompt('Please enter a subjects 1 name ');
var subject1 = prompt('Please enter a subject 2 name');
var subject2 = prompt('Please enter a subject 3 name ');

//  document.write("<br />" + '  <b> Subject Total Marks </b> ' + "<br />" + subject + "<br />" + subject1 + "<br />" + subject2)
 
var obtainedMarks = +prompt('Please enter obtained marks ');
var obtainedMarks1 = +prompt('Please enter obtained marks');
var obtainedMarks2 = +prompt('Please enter obtained marks ');

var totalObtainedMarks = obtainedMarks + obtainedMarks1 + obtainedMarks1;

var marks = 100; 
var totalMarks = 300;
 

// document.write(marks)
 



var obtainedPercentage = (totalObtainedMarks * marks) / totalMarks;

console.log(obtainedPercentage);
console.log(totalObtainedMarks);

 // =======> Chapter #9-10 and Task #1

 var users = prompt("What is your city Name")

  if(users == "Karachi") {
     alert("Welcome to city of lights")    
  }

  else if(users == "") {
     alert("Please fill an input")
  }
  
  else {
      alert("Welcome to " + users + " have a safe journey.")
  }

 // =======> Chapter #9-10 and Task #2  


var gender = prompt("What is your gender?")

  if(gender == 'male') {
    // alert("Good Morning Sir")
  }

  else if (gender == "female") {
    // alert("Good Morning Ma’am. ")
  }  
  else {
    // alert("Please fill a gender input");
  }

 // =======> Chapter #9-10 and Task #3  

var signalColors = prompt("What is the color of traffic signal?")

  if(signalColors == "red") {
    // alert("Must Stop");
  }

  else if(signalColors == "yellow") {
    // alert("Ready to move");
  }

  else if(signalColors == "green") {
    // alert("Move Now");
  }
  else {
    // alert("Please fill an input")
  }

// =======> Chapter #9-10 and Task #4

  var fuel = +prompt("Please fill your remaining fuel in car (in litres)?")

    if(fuel < 0.25) {
      // alert("Please refill the fuel in your car")
    }
    else {
      // alert("Your tank is full")
    }

// =======> Chapter #9-10 and Task #5

var a = 4;
    if (++a === 5) { //   a = 4 ++a = 4 + 1 = 5 5 === 5t  
      //  alert("given condition for variable a is true"); //  a = 4 ++a = 4 + 1 = 5 Ans 5 === 5 true
    }

var b = 82;
    if (b++ === 83){
          // alert("given condition for variable b is true"); // false because of post increment
    }
var c = 12;
    if (c++ === 13){
      // alert("condition 1 is true"); // false because of post increment
}
    if (c === 13){
      // alert("condition 2 is true"); // because after post increment of c value of c is 13 so 13 === 13 true
   }

    if (++c < 14){
      // alert("condition 3 is true"); // because pre increment c = 14 or 14 < 14 = false
   }
   
   if(c === 14){
    //  alert("condition 4 is true"); // c = 14 or 14 === 14 true      
    }

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost){
//  alert("The cost equals"); // because 22000 === 22000 is true
}
  if (true){
  //  alert("True"); // in the if condition is true so if block will execute 
} 

 if (false){
  // alert("False");
}

 if("car" < "cat"){
  //  alert("car is smaller than cat");  // r = 18 is less than t = 20 = true
}

// =======> Chapter #9-10 and Task #6

 
var classSubjectsMarks = +prompt("What is obtained marks in three subjects?")

var totalMarks = +prompt("What is the total marks in three subjects?")

var percentage = classSubjectsMarks * 100 / totalMarks;

  // document.write("<h3> Marks Sheet </h3>")

     if (percentage >= 80) {
      //  document.write("<br />" + "Total marks: " +  totalMarks);
      //  document.write(" <br />  Marks obtained ", + classSubjectsMarks + "<br />");
      //  document.write("Percentage: " + percentage)
      //  document.write("Grade: A-one <br />" + "Remarks: " + " Excellect");
     } 

     else if (percentage >= 70) {
      // document.write("<br />" + "Total marks: " +  totalMarks);
      // document.write(" <br />  Marks obtained ", + classSubjectsMarks + "<br />");
      // document.write("Percentage: " + percentage)
      // document.write("Grade: A <br />" + "Remarks: " + " Good");
    }

     else if(percentage >= 60) {
      // document.write("<br />" + "Total marks: " +  totalMarks);
      // document.write(" <br />  Marks obtained ", + classSubjectsMarks + "<br />");
      // document.write("Percentage: " + percentage + "<br />")
      // document.write("Grade: B <br />" + "Remarks: " + " You need to improve");
    }     
     else {
      // document.write("Fail " + " Sorry")       
     }

// =======> Chapter #9-10 and Task #7  
 
 var secretNumber = 4;

var guessANum = +prompt("Please guess the secret number (ranging from 1 to 10).");

var number2 = guessANum + 1;
   
    if(guessANum === secretNumber) {
        //  alert("Bingo! Correct answer");
    }
    else if(number2 >= secretNumber) {
      // alert("Close enough to the correct answer.");
    } 
    else {
      // alert("Try again")
    }

// =======> Chapter #9-10 and Task #8

 var divideNum = +prompt("Please enter a number to divisble by 3");

     if (divideNum % 3 == 0) {
        //  alert("The number is " + divideNum +  " divisible by 3 ");
}
     else {
        //  alert("The number is not divide by 3 ")
}

// =======> Chapter #9-10 and Task #9

var evenOdd = +prompt("Please enter a number");

    if (evenOdd % 2 == 0) {
        // alert("The number " + evenOdd + " is even");
      }
    else {
        // alert("The number " + evenOdd + " is odd");
      }

 // =======> Chapter #9-10 and Task #10  

var temperature = prompt("Please enter your city's temperature");

    if (temperature > 40) {

      // alert("It is too hot outside.")  
    }
    else if(temperature > 30) {

      // alert("The Weather today is Normal.")
    }
    else if(temperature > 20) {
      
      // alert("Today’s Weather is cool.")
    }
    else if(temperature > 10) {

      // alert("OMG! Today’s weather is so Cool.")
    }    
    else {
      // alert("Please fill an input")      
    }

 // =======> Chapter #9-10 and Task #11    

var val1 = +prompt("enter your first value");
var sign =  prompt("enter your operator");
var val2 = +prompt("enter your second value");

    if (sign == '+') { //

      // alert(val1 + val2);    
    }
    else if(sign == '-') {

      // alert(val1 - val2);
    }
    else if(sign === '*') {

      // alert(val1 * val2);      
    }
    else if(sign === '/') {

      // alert(val1 / val2);      
    }
    else if(sign === '%') {

      // alert(val1 % val2);      
    }
    else {
      // alert('Please fill an input') 
    }   
    
                   
// =======> Chapter #12-13 and Task #1                    

  //  var ch = prompt("Please enter a character (number or string)")

  //   if(ch >= 65 && ch <= 90) {
  //        alert("Upper Case")
  //   }
  //   else {
  //      alert('not working')
  //   }

 // =======> Chapter #12-13 and Task #2     

  
  var int1 = +prompt("Give the number ")
  var int2 = +prompt("Give the numbers 1")

    if(int1 >= int2) {

      console.log("Larger number is " + int1)

      if(int1 == int2) {
        console.log("The numbers are equal")
      }
    }

    else {
      // alert("not working")
    }

// =======> Chapter #12-13 and Task #3

var number = prompt("Pick a number?");

var sign = number > 0 ? 1 : number == 0 ? 0 : -1;

    if (sign == 1){

      //  alert("Oh  your number is so big!" + " " + number);
    }
    else if (sign == 0){

      // alert("Hey, there's nothing there!" + " " + number);
    }
    else if (sign == -1){

      // alert("Wow, that thing's so small it might be negative!" + " " + number);
    }

// =======> Chapter #12-13 and Task #4
    
 var vowel = prompt("Enter a vowel");

      if (vowel == 'a'|| vowel =='i'|| vowel == 'e'|| vowel =='o' || vowel == 'u') {
        // alert("The character is a Vowel");
      }
      else {
        // alert("The character is a Consonant");
      }

// =======> Chapter #12-13 and Task #5


var password = "hamza12345678";

var login = prompt(" Please enter his/her correct password ")
var confirmPassword = prompt("Please enter confirm password")

    if(password == login && password == confirmPassword) {
      // alert("“Correct! The password you entered matches the original password”.")
    } 
    else if(login == "" && confirmPassword == "") {
      // alert("Please enter your password")
    }   
    else {
      // alert("Incorrect password")
    }

// =======> Chapter #12-13 and Task #6

var greeting;
var hour = 13;
       
         if (hour < 18) {
            greeting = "Good day";
         }  // bracker }   <===
         else {
           greeting = "Good evening";
         } // bracker }   <===


// =======> Chapter #12-13 and Task #7  

var time = +prompt("Please enter time in 24 hours clock format like: 1900 = 7pm")

   if (time >= 0000 && time < 1200 ) {
     
        alert("Good Morning!")
   }
   else if(time >= 1200 && time < 1700) {

       alert("Good Afternoon!")
   }
   else if(time >= 1700 && time < 2100) {

      alert("Good Evening!")
   }
   else if(time >= 2100 && time <= 2359) {
      
      alert("Good Night!")
   }
   else if(time == "") {
     
      alert("Enter a correct format time")
   }
   else {

     alert("Enter a correct format time")
   }
   

// =======> Chapter #13-15 and Task #1 

var studentNames = [];

// =======> Chapter #13-15 and Task #2

var studentNames = {};

// =======> Chapter #13-15 and Task #3

var stringArr = ["Hello", "World", "Hamza"];

// =======> Chapter #13-15 and Task #4

var numArr = [1, 2, 3, 4, 5];

// =======> Chapter #13-15 and Task #5

var booleanArr = [true, false];

// =======> Chapter #13-15 and Task #6

var mixedArr = ["Hello", 1 , 2 , 3, "World", true, false]

// =======> Chapter #13-15 and Task #7

// document.write("<h3>  Qualifications </h3>");

var a = 1;

var degreeArr = ["SSC", "HSC", "BCS" , "BS", "BCOM", "MS", 
"M. Phil", "PhD"];

for (var i = 0; i < degreeArr.length; i++) {

//  document.write(a++ +")" + " " + degreeArr[i]  + "<br/>");
} 

// =======> Chapter #13-15 and Task #8


var studentNames = ["Michael", "John", "Tony"];
var studentScore = [500 , 500, 500]

// // =======> Chapter #13-15 and Task #9 

var colorNames = ["Aqua", "BurlyWood", "Crimson"];

      // document.write("<h2> Color Names </h2>")

 for (var i = 0; i < colorNames.length; i++) {
  
      // document.write(colorNames[i] + "<br/>");      
  }
  
// Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
                
          //  document.write("<br/>");

var promptOne = prompt("What color he/she wants to add to the starting?");

         colorNames.unshift(promptOne);

     for (var o = 0; o < colorNames.length; o++) {
       
        // document.write(colorNames[o] + "<br/>");        
  }  

// Ask the user what color he/she wants to add to the end & add that color to the end of the array.  

            //  document.write("<br/>");             
 
var promptTwo = prompt("What color he/she wants to add to the end");

        colorNames.push(promptTwo);
            
     for (var u = 0; u < colorNames.length; u++) { 
         
      //  document.write(colorNames[u] + "<br/>");
    }  
     
      // document.write("<br />")

//  Add two more color to the beginning of the array.     

       colorNames.unshift("DarkGreen" + "<br />" + "DodgerBlue");         
         
              //  document.write(colorNames + "<br />");
              //  document.write("<br />")

// Delete the first color in the array. Delete the last color in the array.        
   
             colorNames.shift();

     for(var a = 0; a < colorNames.length; a++) {
       
        // document.write(colorNames[a] + "<br/>");
     }     
          //  document.write("<br />")

             colorNames.pop();

     for (var g = 0; g < colorNames.length; g++) {
       
      //  document.write(colorNames[g] + "<br/>");
    }  

    //  document.write("<br />")
      
// 

var proThree = prompt("Enter the Color name you want to add:");

var p1 = prompt("Enter the position after which you want to add the " + proThree + " color :");

          colorNames.splice(p1, 0, proThree);

    for (i = 0; i < colorNames.length; i++){

    //  document.write(colorNames[i] + "<br />");}

        // document.write("<br/>");
        
  
var proFour = prompt("which index he/she wants to delete colors");

   var x =  colorNames.slice(proFour);

   for (var z = 0; z < x.length; z++) {

    //  document.write(x[z] + "<br/>");     
}

// // =======> Chapter #13-15 and Task #10 

var studentScore = [320, 230, 480, 120];

        document.write("<br />" + "<b> Scores Of Students: </b>" + studentScore[0] + "," + studentScore[1] +
                      "," + studentScore[2] + "," + studentScore[3] + "<br />")

         
var ascendingOrder =  studentScore.reverse().sort()        

      // document.write("<br />" + " <b> Ordered Scores Of Students: </b>" + ascendingOrder + "<br />")

// // =======> Chapter #13-15 and Task #11

var citiesList = ["Karachi","Lahore","Islamabad","Quttea","Peshawar"]

                // document.write(" <b> Cities List: </b> " + "<br />" + citiesList + "<br />")
 
     
var selectedCities = citiesList.slice(2, 4);
 
            // document.write("<b> Selected Cities List </b>" + "<br />" + selectedCities + "<br /> <br />" )

// // =======> Chapter #13-15 and Task #12

var arr = ["This", "is" ,  "my" ,  "cat"];      

      // document.write("<b> Array </b> " + "<br />" + arr + "<br /> <br />");

var arr1 =  arr.join(" ");
  
      // document.write("<b> String </b>" + "<br />" + arr1)
     
 // =======> Chapter #13-15 and Task #13

 var devices = ["keyboard", "mouse", "printer", "monitor"];
       

 for (let i = 0; i <= 3; i++) {
  document.write("Output: " + "<br /> " + devices.shift() + "<br /> " );
}  
         document.write('<br />')

 // =======> Chapter #13-15 and Task #14

 var devicesArr = ["keyboard", "mouse", "printer", "monitor"];

 for (let i = 0; i <= 3; i++) {
  document.write("Output: " + "<br /> " + devicesArr.pop() + "<br />" );
}

 // =======> Chapter #13-15 and Task #15

             document.write("<br />")            

 var storePhoneArr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

  document.write("<select>")
  
   document.write("<option>" + storePhoneArr[0] +  "</option>")
   document.write("<option>" + storePhoneArr[1] +  "</option>")
   document.write("<option>" + storePhoneArr[2] +  "</option>")
   document.write("<option>" + storePhoneArr[3] +  "</option>")
   document.write("<option>" + storePhoneArr[4] +  "</option>")
   document.write("<option>" + storePhoneArr[5] +  "</option>")

  document.write("</select>")
   
         document.write("<br />")
         document.write("<br />")


 // =======> Chapter #17-20 and Task #1

var arr = [[]];

// =======> Chapter #17-20 and Task #2

 arr = [[0, 1, 2, 3],[1, 0, 1, 2], [2, 1, 0, 1]];
               
    // document.write( "<br /> <br />" + arr[0] + "<br/>" + arr[1] + "<br/>" + arr[2]);
               
    //  document.write("<br/>");
    //  document.write("<br/>");          
     
// =======> Chapter #17-20 and Task #3

   for(var j=0; j <= 10; j++) {
    //  document.write("<br />" + j);
   }

// =======> Chapter #17-20 and Task #4

var num = prompt("Enter your favourite number")
  
var lengOfTable = prompt("Enter the length of the table");
     
  //  document.write('<br />' + "Multiplication table of " + num + "<br/>");
  //  document.write("Length " + lengOfTable);
     
  //  document.write("<br/>");
    // document.write("<br/>");
      
   for (var i = 1;  i <= lengOfTable; i++) {     
    //  document.write(num + " x " + i + " = " + num * i + "<br/>");      
   }
      // document.write("<br/>");

// =======> Chapter #17-20 and Task #5

 var newArr = ["apple", "banana", "mango", "orange", "strawberry"];
      
   for (var i = 0; i < newArr.length; i++) {       
          //  document.write(newArr[i] + "<br/>");
      }
      
      // document.write("<br/>");
      
   for (var u = 0; u < newArr.length; u++) {    
        //  document.write("Element at index "+ u + " is " + newArr[u] + "<br/>" );    
      }
       
      // document.write("<br/>");

// =======> Chapter #17-20 and Task #6

  // document.write("<b>Counting:</b>" + "<br/>");

  //  document.write("<br/>");
   
  for (var t = 0; t <= 15; t++) {  
        // document.write("  " + t);
 }    
    // document.write("<br/>");
    // document.write("<br/>");
   
//  document.write("<b> Reverse Counting: </b>" + "<br/> <br/>") 
  
  for (var e = 10; e > 0; e--) {  
  //  document.write(e + "  ");   
 } 
  
  //  document.write("<br/>");
  //  document.write("<br/>" +"<b>" + "Even Counting: " + "</b>");
    // document.write("<br/>" + "<br/>");
  
  for (var f = 0; f <= 20; f++) {
     
      if (f % 2 === 0) {
      
      // document.write(f + ", ");
    }
  }     
      // document.write("<br/>" + "<br/>");
      // document.write("<b>" + "Odd Counting: " + "</b>"); 
      // document.write("<br/>" + "<br/>");    
  
  for (var g = 1; g <= 20; g++) {

      if (g % 2 === 1) {
      
      //  document.write(g + ", ");
      }
  }     
      // document.write("<br/>" + "<br/>");
      // document.write("<b>" + "Series: " + "</b>"); 
      // document.write("<br/>" + "<br/>");
       
  for (var y = 1; y <= 20; y++) {
  
    if (y % 2 === 0) {
    
    // document.write(y + "k"+ ", ");
    }
  }

 // =======> Chapter #17-20 and Task #7  
          
var userPrompt = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'ma?");

var bakerArr = ["cake", "apple pie","cookie", "chips" , "patties"];
  
var myFlag, indeX;
  
 for (var i = 0; i < bakerArr.length; i++) {

    if (userPrompt === bakerArr[i]) {

      myFlag = true;
      indeX = i;
      break;
  }
  
   else {
         myFlag = false;
      }
     
 } 
  
  if (myFlag === true) {
      
      // document.write("<br/> <br /> " + userPrompt + " is available at index " + indeX + " in our bakery <br/>");
     
  }   
   
  else {
   
  // document.write("<br/>" + "We are sorry." + userPrompt + " is  not available in our bakery <br/> " ); 
   
  }

// // =======> Chapter #17-20 and Task #8

  // Finding the largest number

var numberArray = [24, 53, 78, 91,12];

var largest = numberArray[0];

for (var q = 0; q < numberArray.length; q++) {
 
     if (largest < numberArray[q]) {
          largest = numberArray[q];
   }
}
        // document.write("<br/>");
      // document.write("Largest number is " + largest);
 
      // document.write("<br/>");
    
 // =======> Chapter #17-20 and Task #9     

 // Finding the smallest number
 
//  var newNumArray = [24, 53, 78, 91, 12];
 
//  var smallest = newNumArray[0];
 
//  for (var w = 0; w < newNumArray.length; w++) {
 
//       if (smallest > newNumArray[w]) {
//           smallest = newNumArray[w];
//    }
// }   
    //  document.write("Smallest number is " + smallest);

    //  document.write("<br/> <br />");

// // =======> Chapter #17-20 and Task #10

for (var i = 1; i <= 100; i++) {

  if (i % 5 === 0) {
  
  document.write(i + " , ");
}
}  }
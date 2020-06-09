
                    //    Chapter #1

// Task 1:- Write a script to greet your website visitor using JS alert box?

           alert('Hello World');

// Task 2:- Write a script to display following message on your web page:           

      alert("Error! Please enter a valid password");

// Task 3:- Write a script to display following message on your web page:

     alert("Welcome to JS Land... \n Happ Coding!")

// Task 4:- Write a script to display following messages in sequence:
 
   alert("Welcome to JS Land...");
   alert(" Happ Coding!"); 

// Task 5:- Generate the following message through browser’s  developer console:

     console.log("Hello I can run JS through my web browser's console");

                   // Chapter #2

// Task 1:- Declare a variable called username.

 var username;

// Task 2:- Declare a variable called myName & assign to it a string that represents your Full Name.

var myName = "Hamza Ahmed Sheikh";

// Task 3:- Declare a JS variable, titled message. Assign “Hello World” to variable message.
//          Display the message in alert box.

var message;

message = "Hello World 1";

alert(message);

// Task 4:- Write a script to save student’s bio data in JS variables and  show the data in alert boxes.

var name="Johne Doe";
  
var age="15 years old";
    
var course="Certified Mobile Application Development"; 
  
  alert(name); 
  alert(age) 
  alert(course);

// Task 5:- Write a script to display the following alert using one JS variable: 

var order="PIZZA\nPIZZ\nPIZ\nPI\nP";
     
    alert(order);

// Task 6:- Declare a variable called email and assign to it a string

var email;

email="hamzaahmedsheikh313@gmail.com";
 
 alert("My email address is " + email);

// Task 7:- Declare a variable called book & give it the value

var book;

book="A smarter way to learn Javascript";

alert("I am trying to learn from the Book " + book);

// Task 8:- Write a script to display this in browser through JS

document.write("Yah! I can write HTML content through JavaScript" + "<br />");

// Task 9:- Store following string in a variable and show in alert and  browser through JS

var design='▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';

      alert(design);

                    // Chapter #3
                  
// Task 1:- Declare a variable called age & assign to it your age. Show your age in an alert box.      

var age= 19;

 alert("I am " + age + " years old")

// Task 2:- Declare & initialize a variable to keep track of how many times a visitor has visited a web page. 

var visted;
 
visted = "You have visited this site 14 times"; 

alert(visted);

// Task 3:- Declare a variable called birthYear & assign to it your birth year.

var birthYear;

birthYear= 1999;
 
var age="<br />" + "My birth year is " + birthYear+ "<br/> <br />";

document.write(age);

document.write("Data type my declared variable is   "+ typeof(birthYear) + "<br /> <br />");

// Task 4:- A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables
//   the following information:

var product="<b>John Doe</b> ordered <b>5 T-shirt(s)</b> on XYZ Clothing store. <br/> <br/>"; 
 
document.write(product);


                 //  Chapter #4

 // Task 1:- Declare 3 variables in one statement.
 
 var one, two, three;

 // Task 2:- Declare 5 legal & 5 illegal variable names.

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

// Task 3:- Display this in your browser

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

                  // Chapter #5

 // Task 1:-   Write a program that take two numbers & add them in a new variable. 

 var num1 = 3;
 var num2 = 5;
 var num3 = num1 + num2;

 document.write("<br /> Sum of 3 and 5 is " + num3);

 // Task 2:- Repeat task1 for subtraction, multiplication, division & modulus.

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

 // Task 3:- Do the following using JS Mathematic Expressions

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

// Task 4:- Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.

var movie="<br/> <br /> Total cost to buy 5 ticket to a movie is PKR "  
        document.write(movie);
   
var ticketPrice= 600;

var totalPrice= 600*5 ;      

document.write(totalPrice);


// Task 5:-  Write a script to display multiplication table of any number in your browser.

var number = +prompt("Please enter a number:");

var heading = "Table Of " + number;
document.write("<br /> <br />" + heading)

 for (var i=1; i <= 10; i++) {
       document.write("<br />" + number + " x " + i + " = " + i*number );
  }





// Task 6:- The Temperature Converter:

var celsiusTemperature= 25;

var fahrenheit= (celsiusTemperature*9/5)+32;

document.write("<br/> <br /> 25°C is  "+ fahrenheit + "°F");


var fahrenheiTemperature= 70;

var celsius= (fahrenheiTemperature-32)*5/9;

   document.write("<br/>70°F is " + celsius + "°C" );


// Task 7:- Write a program to implement checkout process of a shopping cart system for an e-commerce website.

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


// Task 8:- Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

var heading="<h3>Marks Sheet</h3>"

document.write(heading);

var totalMark= 980;

document.write("Total Marks: "+ totalMark);

var mark= 804;

document.write("<br/>Mark obtained: " + 804);
   
   
var totalPercentage= mark * 100 / totalMark;

document.write("<br/>Percentage: "+totalPercentage + "%");

// Task 9:- Write a script to convert the total currency to Pakistani Rupees.

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

// Task 10:- Write a program to initialize a variable with some number and do arithmetic in following sequence:
          // Note :- Perform all calculations in a single expression

var numbers = 8;

var cal = numbers + 5 * 10 / 2;

 alert("Perform all calculations in a single expression " + cal);


// Task 11:- The Age Calculator:

var headingTwo="<h3>Age Calculator</h3>"

document.write(headingTwo);

var currentYear= 2020;

document.write("Current Year: " + currentYear);

var birthYear= 1992;

document.write("<br/>Birth Year: " + birthYear);

var yourAge= currentYear - birthYear;

document.write("<br/>Your Age: " + yourAge);

// Task 12:- The Geometrizer: Calculate properties of a circle. Store a radius into a variable.

var headingThree="<h3>The Geometrizer</h3>"

   document.write(headingThree);

var  radiusOfCircle= 20 ;  // circumference of circle 2 π r

var  pie= 3.142 ;  //   π = 3.142 

document.write("Radius of a Circle: " + radiusOfCircle)

document.write("<br/>The circumference is: " + 2 * pie * radiusOfCircle );

var areaOfCircle= (pie) * (radiusOfCircle**2);

document.write("<br/>The area is: " + areaOfCircle);

// Task 13:- The Lifetime Supply Calculator

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

//alert(totalLife);

document.write("<br/>You will need " + totalLife + " chocolate chip to last you until the ripe old age of " + maximumAge);
 

                // Chapter #6

// Task 1:-  Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:                

var heading = "<br /> <br /> Result:<br/> ";
     document.write(heading);
   
  var a = 10;
                
  document.write("The value of is: " + a + "<br/>..............................");
    
          //++a;
                
    document.write("<br/><br/>The value of ++a is: " +  ++a); //11
    
    document.write("<br/>Now the value of a is: " + a);  //11
    
    document.write("<br/><br/>The value of a++ is: " + a++); //11
        
    document.write("<br/>Now the value of a is: "+ a); // 12
    
    document.write("<br/><br/>The value of --a is: "+ --a); //11
    
    document.write("<br/>Now the value of a is: "+ a); // 11
    
    document.write("<br/><br/>The value of a-- is: " + a--); //11
    
    document.write("<br/>Now the value of a is: "+ a); //10               


// Task 2:-  What will be the output in variables a, b & result after execution of the following script:

var a = 2; // (--a = 1) 
 
var b = 1; // (--b = 0) (++b = 1) (b-- = 1) (b = 0)
    
var result = --a - --b + ++b + b--; // 1 - 0 + 1 + 1 =
    
    
  document.write(" <br /> a is " + a); 
  document.write("<br/> b is " + b);
  document.write("<br/> result is " + result);   

// Task 3:- Write a program that takes input a name from user & greet the user.  

var  name = prompt("What is your name?");

  alert("Hello " + name)



// Task 4:- Write a program to take input a number from user & display it’s multiplication table on your browser. If user
//           does not enter a new number, multiplication table of 5 should be displayed by default.    

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


// Task 5:-

var subject = prompt('Please enter a subjects 1 name ');
var subject1 = prompt('Please enter a subject 2 name');
var subject2 = prompt('Please enter a subject 3 name ');
 
 document.write("<br /> <br />", "<b> Subject </b>", "<br />", subject, "<br />", subject1, "<br />", subject2)


var obtainedMarks = +prompt('Please enter obtained marks ');
var obtainedMarks1 = +prompt('Please enter obtained marks');
var obtainedMarks2 = +prompt('Please enter obtained marks ');

var totalObtainedMarks = obtainedMarks + obtainedMarks1 + obtainedMarks1;

// document.write(`<br /> <br /> <b> Obtained Marks </b> <br /> obtainedMarks, "<br />", obtainedMarks1, "<br />", obtainedMarks2)

var marks = 100; 
var totalMarks = 300;

var obtainedPercentage = (totalObtainedMarks * marks) / totalMarks;

console.log(obtainedPercentage);
console.log(totalObtainedMarks);

                      // Chapter #9-10

// Task 1:- Write a program to take “city” name as input from user. If user enters “Karachi”, 
//          welcome the user like this:      


var users = prompt("What is your city Name")

  if(users == "Karachi") {
    // alert("Welcome to city of lights")    
  }

  else if(users == "") {
    // alert("Please fill an input")
  }
  
  else {
    //  alert("Welcome to " + users + " have a safe journey.")
  }

// Task 2:- Write a program to take “gender” as input from user. If the user is male, give the message:
//          Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.  


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

// Task 3:- Write a program to take input color of road traffic signal from the user &
//          show the message according to this table:  

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

// Task 4:- Write a program to take input remaining fuel in car (in litres) from user. If the current fuel
//          is less than 0.25litres, show the message “Please refill the fuel in your car”

  var fuel = +prompt("Please fill your remaining fuel in car (in litres)?")

    if(fuel < 0.25) {
      // alert("Please refill the fuel in your car")
    }
    else {
      // alert("Your tank is full")
    }

//Task 5:- Run this script, & check whether alert message would be displayed or not. Record the outputs.

var a = 4;
    if (++a === 5) { //   a = 4 ++a = 4 + 1 = 5 5 === 5t  
       alert("given condition for variable a is true"); //  a = 4 ++a = 4 + 1 = 5 Ans 5 === 5 true
    }

var b = 82;
    if (b++ === 83){
          alert("given condition for variable b is true"); // false because of post increment
    }
var c = 12;
    if (c++ === 13){
      alert("condition 1 is true"); // false because of post increment
}
    if (c === 13){
      alert("condition 2 is true"); // because after post increment of c value of c is 13 so 13 === 13 true
   }

    if (++c < 14){
      alert("condition 3 is true"); // because pre increment c = 14 or 14 < 14 = false
   }
   
   if(c === 14){
     alert("condition 4 is true"); // c = 14 or 14 === 14 true      
    }

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost){
 alert("The cost equals"); // because 22000 === 22000 is true
}
  if (true){
   alert("True"); // in the if condition is true so if block will execute 
} 

 if (false){
  alert("False");
}

 if("car" < "cat"){
   alert("car is smaller than cat");  // r = 18 is less than t = 20 = true
}

// Task 6:- Write a program to take input the marks obtained in three subjects & total marks. Compute & show the
//          resulting percentage on your page.

 
var classSubjectsMarks = +prompt("What is obtained marks in three subjects?")

var totalMarks = +prompt("What is the total marks in three subjects?")

var percentage = classSubjectsMarks * 100 / totalMarks;

  document.write("<h3> Marks Sheet </h3>")

     if (percentage >= 80) {
       document.write("<br />" + "Total marks: " +  totalMarks);
       document.write(" <br />  Marks obtained ", + classSubjectsMarks + "<br />");
       document.write("Percentage: " + percentage)
       document.write("Grade: A-one <br />" + "Remarks: " + " Excellect");
     } 

     else if (percentage >= 70) {
      document.write("<br />" + "Total marks: " +  totalMarks);
      document.write(" <br />  Marks obtained ", + classSubjectsMarks + "<br />");
      document.write("Percentage: " + percentage)
      document.write("Grade: A <br />" + "Remarks: " + " Good");
    }

     else if(percentage >= 60) {
      document.write("<br />" + "Total marks: " +  totalMarks);
      document.write(" <br />  Marks obtained ", + classSubjectsMarks + "<br />");
      document.write("Percentage: " + percentage + "<br />")
      document.write("Grade: B <br />" + "Remarks: " + " You need to improve");
    }     
     else {
      document.write("Fail " + " Sorry")       
     }
                      
                      // Chapter #12-13

                      // Chapter #13-15

               // Chapter #17-20   

// Task 1:- Declare and initialize an empty multidimensional array. (Array of arrays)

var arr = [[]];

// Task 2:- Declare and initialize a multidimensional array representing the following matrix: 

 arr = [[0, 1, 2, 3],[1, 0, 1, 2], [2, 1, 0, 1]];
               
    document.write( "<br /> <br />" + arr[0] + "<br/>" + arr[1] + "<br/>" + arr[2]);
               
     document.write("<br/>");
     document.write("<br/>");          
     
// Task 3:- Write a program to print numeric counting from 1 to 10.

   for(var j=0; j <= 10; j++) {
     document.write("<br />" + j);
   }

//Task 4:- Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

var num = prompt("Enter your favourite number")
  
var lengOfTable = prompt("Enter the length of the table");
     
   document.write('<br />' + "Multiplication table of " + num + "<br/>");
   document.write("Length " + lengOfTable);
     
   document.write("<br/>");
    document.write("<br/>");
      
   for (var i = 1;  i <= lengOfTable; i++) {     
     document.write(num + " x " + i + " = " + num * i + "<br/>");      
   }
      document.write("<br/>");

// Task 5:- Write a program to print items of the following array using for loop:   
      
 var newArr = ["apple", "banana", "mango", "orange", "strawberry"];
      
   for (var i = 0; i < newArr.length; i++) {       
           document.write(newArr[i] + "<br/>");
      }
      
      document.write("<br/>");
      
   for (var u = 0; u < newArr.length; u++) {    
         document.write("Element at index "+ u + " is " + newArr[u] + "<br/>" );    
      }
       
      document.write("<br/>");

// Task 6:- Generate the following series in your browser. See example output.

  document.write("<b>Counting:</b>" + "<br/>");

   document.write("<br/>");
   
  for (var t = 0; t <= 15; t++) {  
        document.write("  " + t);
 }    
    document.write("<br/>");
    document.write("<br/>");
   
 document.write("<b> Reverse Counting: </b>" + "<br/> <br/>") 
  
  for (var e = 10; e > 0; e--) {  
   document.write(e + "  ");   
 } 
  
   document.write("<br/>");
   document.write("<br/>" +"<b>" + "Even Counting: " + "</b>");
    document.write("<br/>" + "<br/>");
  
  for (var f = 0; f <= 20; f++) {
     
      if (f % 2 === 0) {
      
      document.write(f + ", ");
    }
  }     
      document.write("<br/>" + "<br/>");
      document.write("<b>" + "Odd Counting: " + "</b>"); 
      document.write("<br/>" + "<br/>");    
  
  for (var g = 1; g <= 20; g++) {

      if (g % 2 === 1) {
      
       document.write(g + ", ");
      }
  }     
      document.write("<br/>" + "<br/>");
      document.write("<b>" + "Series: " + "</b>"); 
      document.write("<br/>" + "<br/>");
       
  for (var y = 1; y <= 20; y++) {
  
    if (y % 2 === 0) {
    
    document.write(y + "k"+ ", ");
    }
  }
  
// Task 7:-  Write a program to enable “search by user input” in an array. After searching, prompt the
// user whether the given item is found in the list or not.           

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
      
      document.write("<br/> <br /> " + userPrompt + " is available at index " + indeX + " in our bakery <br/>");
     
  }   
   
  else {
   
  document.write("<br/>" + "We are sorry." + userPrompt + " is  not available in our bakery <br/> " ); 
   
  }

// Task 8:-  Write a program to identify the largest number in the given array.

  // Finding the largest number

var numberArray = [24, 53, 78, 91,12];

var largest = numberArray[0];

for (var q = 0; q < numberArray.length; q++) {
 
     if (largest < numberArray[q]) {
          largest = numberArray[q];
   }
}
        document.write("<br/>");
      document.write("Largest number is " + largest);
 
      document.write("<br/>");
    
 // Task 9:- Write a program to identify the smallest number in the given array.     

 // Finding the smallest number
 
 var newNumArray = [24, 53, 78, 91, 12];
 
 var smallest = newNumArray[0];
 
 for (var w = 0; w < newNumArray.length; w++) {
 
      if (smallest > newNumArray[w]) {
          smallest = newNumArray[w];
   }
}   
     document.write("Smallest number is " + smallest);

     document.write("<br/> <br />");

// Task 10:- Write a program to print multiples of 5 ranging 1 to 100.     

 for (var i = 1; i <= 100; i++) {
       
       if (i % 5 === 0) {               
        document.write(i + " , ");
   }
 }  
  
 
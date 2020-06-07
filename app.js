
                    //    Assignment #1

// Write a script to greet your website visitor using JS alert box?

           alert('Hello World');

// Write a script to display following message on your web page:           

      alert("Error! Please enter a valid password");

// Write a script to display following message on your web page:

     alert("Welcome to JS Land... \n Happ Coding!")

// Write a script to display following messages in sequence:
 
   alert("Welcome to JS Land...");
   alert(" Happ Coding!"); 

   // Generate the following message through browser’s  developer console:

     console.log("Hello I can run JS through my web browser's console");

                   // Assignment #2

// Declare a variable called username.

 var username;

// Declare a variable called myName & assign to it a string that represents your Full Name.

var myName = "Hamza Ahmed Sheikh";

// Declare a JS variable, titled message. Assign “Hello World” to variable message.
// Display the message in alert box.

var message;

message = "Hello World 1";

alert(message);

// Write a script to save student’s bio data in JS variables and  show the data in alert boxes.

var name="Johne Doe";
  
var age="15 years old";
    
var course="Certified Mobile Application Development"; 
  
  alert(name); 
  alert(age) 
  alert(course);

// Write a script to display the following alert using one JS variable: 

var order="PIZZA\nPIZZ\nPIZ\nPI\nP";
     
    alert(order);

// Declare a variable called email and assign to it a string

var email;

email="hamzaahmedsheikh313@gmail.com";
 
 alert("My email address is " + email);

// Declare a variable called book & give it the value

var book;

book="A smarter way to learn Javascript";

alert("I am trying to learn from the Book " + book);

// Write a script to display this in browser through JS

document.write("Yah! I can write HTML content through JavaScript" + "<br />");

// Store following string in a variable and show in alert and  browser through JS

var design='▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';

      alert(design);

                    // Assignment #3
                  
// Declare a variable called age & assign to it your age. Show your age in an alert box.      

var age= 19;

 alert("I am " + age + " years old")

// Declare & initialize a variable to keep track of how many times a visitor has visited a web page. 

var visted;
 
visted = "You have visited this site 14 times"; 

alert(visted);

// Declare a variable called birthYear & assign to it your birth year.

var birthYear;

birthYear= 1999;
 
var age="<br />" + "My birth year is " + birthYear+ "<br/> <br />";

document.write(age);

document.write("Data type my declared variable is   "+ typeof(birthYear) + "<br /> <br />");


var product="<b>John Doe</b> ordered <b>5 T-shirt(s)</b> on XYZ Clothing store. <br/> <br/>"; 
 
document.write(product);


                 //  Assignment #4

 // Declare 3 variables in one statement.
 
 var one, two, three;

 // Declare 5 legal & 5 illegal variable names.

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

// Display this in your browser

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

                  // Assignment #5

 //    Write a program that take two numbers & add them in a new variable.

 var num1 = 3;
 var num2 = 5;
 var num3 = num1 + num2;

 document.write("<br /> Sum of 3 and 5 is " + num3);

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

 // Do the following using JS Mathematic Expressions

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

//Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.

var movie="<br/> <br /> Total cost to buy 5 ticket to a movie is PKR "  
        document.write(movie);
   
var ticketPrice= 600;

var totalPrice= 600*5 ;      

document.write(totalPrice);

// The Temperature Converter:

var celsiusTemperature= 25;

var fahrenheit= (celsiusTemperature*9/5)+32;

document.write("<br/> <br /> 25°C is  "+ fahrenheit + "°F");


var fahrenheiTemperature= 70;

var celsius= (fahrenheiTemperature-32)*5/9;

   document.write("<br/>70°F is " + celsius + "°C" );


// Write a program to implement checkout process of a shopping cart system for an e-commerce website.

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


// Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

var heading="<h3>Marks Sheet</h3>"

document.write(heading);

var totalMark= 980;

document.write("Total Marks: "+ totalMark);

var mark= 804;

document.write("<br/>Mark obtained: " + 804);
   
   
var totalPercentage= mark * 100 / totalMark;

document.write("<br/>Percentage: "+totalPercentage + "%");

// Write a script to convert the total currency to Pakistani Rupees.

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

// The Age Calculator:

var headingTwo="<h3>Age Calculator</h3>"

document.write(headingTwo);

var currentYear= 2020;

document.write("Current Year: " + currentYear);

var birthYear= 1992;

document.write("<br/>Birth Year: " + birthYear);

var yourAge= currentYear - birthYear;

document.write("<br/>Your Age: " + yourAge);

// The Geometrizer: Calculate properties of a circle. Store a radius into a variable.

var headingThree="<h3>The Geometrizer</h3>"

   document.write(headingThree);

var  radiusOfCircle= 20 ;  // circumference of circle 2 π r

var  pie= 3.142 ;  //   π = 3.142 

document.write("Radius of a Circle: " + radiusOfCircle)

document.write("<br/>The circumference is: " + 2 * pie * radiusOfCircle );

var areaOfCircle= (pie) * (radiusOfCircle**2);

document.write("<br/>The area is: " + areaOfCircle);

// The Lifetime Supply Calculator

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

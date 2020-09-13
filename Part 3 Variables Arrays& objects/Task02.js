//Task 2: Simple Programs todo for Operators
//01_Square of a number
var a=10;
console.log("num="+a, "square="+Math.pow(a,2));


//02_Swapping 2 numbers
var a=8;
var b=6;
console.log(a,b);
[a,b]=[b,a];
console.log(a,b);



//03_Addition of 3 numbers
var num1=10;
var num2=20;
var num3=30;
console.log(num1+num2+num3);



//04_Celsius to Fahrenheit conversion
var celsius =98;
var fahrenheat = (celsius* (9/5))+32;
console.log(celsius+"'C"+" , " +fahrenheat+"'F");



//05_Meter to miles
var meter=50;
 var miles=meter*1609.344;
 console.log(meter+"m =" +miles.toFixed(3)+"miles");



//06_Pounds to kg
var pound=40;
var kg=pound*0.45359237;
console.log(pound+" lbs "+Math.round(kg)+" kg ");




//07_Calculate Batting Average
var run=487;
var wicket=10;
var battingAverage=run/wicket;
console.log("BattingAverage:"+battingAverage.toFixed(2));



//08_Calculate five test scores and print their average
var test1=398;
var test2=250;
var test3=378;
var test4=400;
var test5=498;
var avg=(test1+test2+test3+test4+test5)/5;
console.log("Avg:"+avg.toFixed(2));




//09_Power of any number x ^ y.
var x=6;
var y=5;
var powerOf=Math.pow(x,y);
console.log("POwer of number x and y:" +powerOf);




//10_Calculate Simple Interest
var principle=10000;
var noOfYrs=3;
var rateOfInterest=10.49;
var si=(principle*noOfYrs*rateOfInterest);
console.log("SIMPLE INTEREST: " +si);




//11_Calculate area of an equilateral triangle
var side=15;
var area=(Math.sqrt(3)/4)*side*side;
console.log("AREAOF EQUILATERAL TRIANGLE:"+area.toFixed(3));



//12_Area Of Isosceles Triangle
var base1=5;
var h1=8;
var areaOfIsoscels=(base1*h1)/2
console.log(" AREA OF AN ISOSCELES TRIANGLE: "+areaOfIsoscels);



//13_Volume Of Sphere
var r=5.7;
var volume=(4/3)*Math.PI*Math.pow(r,3);
console.log(" volume of a sphere:"+volume.toFixed(2));

//14_Volume Of Prism
var length=9;
var width=8;
var baseArea=length*width;
var height=13;
var volumeOfPrism=baseArea*height;
console.log("VOLUME OF PRISM:"+volumeOfPrism);



//15_Find area of a triangle.
var trianglebase=20;
var triangleheight=36;
var triangleArea=(trianglebase*triangleheight)/2;
console.log("Area of Triangle:"+triangleArea);



//16_Give the Actual cost and Sold cost, Calculate Discount Of Product
var actualCost=890;
var seilingPrice=587;
var discount=actualCost-seilingPrice;
console.log("DISCOUNT:"+discount);



//17_Given their radius of a circle and find its diameter, circumference and area.
var radius=7;
var circumference=2*Math.PI*radius;
var diameter=2*radius;
var areaOfCircle=Math.PI*Math.pow(radius,2);
console.log("CIRCUMFERENCE:"+circumference.toFixed(3));
console.log("DIAMETER:"+diameter);
console.log("AREA OF CIRCLE:",+areaOfCircle.toFixed(2)); 



//18_Given two numbers and perform all arithmetic operations.
var no1=18;
var no2=15;
var add=no1+no2;
console.log("ADDITION:"+add);
var sub=no1-no2;
console.log("SUBTRACTION:",+sub);
var multi=no1*no2;
console.log("MULTIPLICATION:"+multi);
var division=no1/no2;
console.log("DIVISION:"+division);
var mod=no1%no2;
console.log("MODULUS:"+mod);
var inc=no1++;
var dec=no2--;
console.log("INCREMENT: "+inc+ " "+"DECREMENT: "+dec);


/*19_Display the asterisk pattern as shown below(No loop needed):
*****
*****
*****
*****
*****   */
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");




/*20_Calculate electricity bill?
For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?*/
var unitRate=10;
var consumption=100;
var hour=24;
var month=30;
var oneUnit=1000;
var totalConsumption=consumption*hour*month;
var totalUnits=totalConsumption/oneUnit;
var costElectricity=totalUnits*unitRate;
console.log("CONSUMPTION per hour:"+consumption+"watts "+" UNIT RATE:"+unitRate+"RS "+" Total ELECTRIC BILL:"+costElectricity+"RS");


//21_Program To Calculate CGPA
var m1=89;
var m2=78;
var m3=88;
var m4=76;
var m5=93;
var total=(m1+m2+m3+m4+m5);
console.log(total);
var percent=total/5;
var CGPA =percent/9.5;
console.log("CGPA:"+CGPA.toFixed(2));
console.log("PERCENTAGE:"+percent);


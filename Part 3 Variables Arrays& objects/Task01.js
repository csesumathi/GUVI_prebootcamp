//01 Declare four variables without assigning values and print them in console
let num;
let string;
let boolean;
let float;
console.log(num);
console.log(string);
console.log(boolean);
console.log(float);

//02 How to get value of the variable myvar as output
var myvar= 1;
console.log(myvar);


//03 Declare variables to store your first name, last name, marital status, country and age in multiple lines

    var firstname="john";
    var lastname="smith";
    var maritalStatus="married";
    var country="America";
    var age= 45;


// 04 Declare variables to store your first name, last name, marital status, country and age in a single line
var fname="john",lname="miller",maritalStat="married",country1="US",age1=45;
//05Declare variables and assign string, boolean, undefined and null data types
//I am 25 years old. 
//You are 30 years old.
var bike="ktm"
var wheel=2;
var color=null;
var isGear=true;
var ispetrol;
console.log(bike,wheel+"new model",ispetrol,isGear,color);


//06Convert the string to integer
//parseInt()  
var str="10";
var inte=parseInt(str);
console.log(inte); 
//Number()
var no=Number("2");
console.log(no);
//Plus sign(+)
var numb=+("5");
console.log(numb);

//07 Write 6 statement which provide truthy & falsey values.
var str2="0"; //truthy
var isprime="true"; //truthy
var arr=[]; //truthy
var obj={}; //truthy
function newFunc(){} //truthy
var a=-1;//non-zero number including negative number is truthy

// falsey
var str1="";//falsey
var sum=0;
var noVar=null;
var a=+isprime;
var b;
var isprime=false;
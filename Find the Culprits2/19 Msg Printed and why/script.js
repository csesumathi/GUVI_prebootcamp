var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {//string 0 considers True
 msg += "hi";//msg=msg+'hi'==hi
 }
if (lemeout) { //value 0 taken as False
 msg += 'Hello';
}
console.log(msg);//true value is printed,
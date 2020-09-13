//Task 3: Simple Programs todo for Condition , Looping and Arrays
/*01_Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######*/

var output="";
for(var i=0;i<7;i++)
{
    output+="#";
    console.log(output);
}



/*2. Iterate through the string array and print it contents*/
      var strArray= ["<option>Jazz</option>",
      ,"<option>Blues</option>",
      ,"<option>New Age</option>",
      ,"<option>Classical</option>",
      ,"<option>Opera</option>"]
      
      for(var i=0;i<strArray.length;i++)
      {
        console.log(strArray[i]);
      }
      



//03_Arrays:
var myarray=[11,22,33,44,55]



//write a code to count the elements in the array . Don’t use length property
var count=0;
for(var i=0;i<5;i++)
{
    count++;
}
console.log(count);



// 04_Declare an empty array;
var emptyArray=[];



//05_Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
let foods=[];
foods=["frits Salad","Veg Salad","MilkShake","Tandoori Chicken","Briyani","veg Thali","Fish fry","chapati","pasta","Noodles","icecream","cake","chocalate","brownie","cheeseburstPizza","mcDonaldWrap","burger","butterscotch icecream","dosai","butterFruitJuice"];



//06_Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
console.log(foods[5]);
//let foods=[]
//07_Find the length of your foods array
console.log(foods.length);



//08_Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
let friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];

function dataHandling(input){
for (var i = 0; i < input.length; i++) {

    friends[0]=friends[3];

}
console.log(input);
}
dataHandling(friends);




//09_Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
const friends1 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];
function dataHandling(input1){
for (var i = 0; i < input1.length; i++) {
    if(input1[i]=="CaptianAmerica")
    {
        break;
        
    }
    console.log(input1[i]);

}

}
dataHandling(friends1);



//10_Find the person is ur friend or not.
const friends3 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];
function dataHandling(input2, name){
for (var i = 0; i < input2.length; i++) {
if(input2[i]==name)
{
    return name;
   // console.log(input2[i]+" is my friend");
}
}
}
let found = dataHandling(friends3,'Jeff');
console.log(found);



//11_We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
var friends4 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
var friends5 = ["Gabbar","Rajinikanth","Mass","Spiderman","Jeff","ET"];
var newFriends=friends4.concat(friends5);
console.log(newFriends);
function dataHandling(input3){
//Your code goes here

input3.sort();
console.log(input3);

}
dataHandling(newFriends);



//12_Get the first item, the middle item and the last item of the array
console.log(newFriends[0]);
console.log(newFriends[((newFriends.length)/2)-1]);
console.log(newFriends[(newFriends.length)-1]);



//13_ Add your name to the end of the friends array, and add another name to beginning.
newFriends.push("Sumathi");
newFriends.unshift("Balam");
console.log(newFriends);



//14_ Add Mr or Ms to the names in the friends array.
var friends06=[];
for(var i=0;i<newFriends.length;i++)
{
  friends06.push(" mr."+newFriends[i]);
}
console.log(friends06);



//14_Concat all the names the friends array and return as comma “,” seperated string.
var output="";
for(var i=0;i<newFriends.length;i++)
{
    output+=newFriends[i]+" ,"
}
console.log(output);



//15_Find the friends names who has letter ‘a’ and return the list.
var list=[];
for(var i=0;i<newFriends.length;i++)
{
    if(newFriends[i].includes("a"))
    {
        list.push(newFriends[i]);
    }
}
console.log(list);



//16_Find the avg length of all the friends names. Get the individual length of the names and do the avg.
var individualNamelen=[];
var sum=0;
for(var i=0;i<newFriends.length;i++)
{
    individualNamelen.push(newFriends[i].length);
    
    sum+=individualNamelen[i];
    
}
console.log(sum);
    var avg=sum/individualNamelen.length;
    console.log(avg);
    //console.log(output.length);



//17_Find the names and return the list starting with letter M.
const startsWithM=newFriends.filter((friend)=>friend.startsWith("M"));
console.log(startsWithM);



//18_Find the name with max characters and return the name.
let max=newFriends[0].length;
for(var i=0;i<newFriends.length;i++)
{
    if(newFriends[i].length>max)
    {
        max=newFriends[i].length;
        var name=newFriends[i];
       
    }

}
console.log(name);



//19. Find the name with min characters and return the name.
let min=newFriends[0].length;
for(var i=0;i<newFriends.length;i++)
{
    if(newFriends[i].length<min)
    {
        min=newFriends[i].length;
        var name=newFriends[i];
       
    }

}
console.log(name);



/*20_Find the average in the array below.
Make sure you add only the numbers and do avg.*/
const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];
var sum=0,count=0;
for(var i=0;i<friendsInfo.length;i++)
{
    if(typeof(friendsInfo[i])==='number')
    {
        sum+=friendsInfo[i];
        count++;
    }
}
console.log(sum,count);
var avg=sum/count;
console.log(avg);




//21_Print the contents of the input variable
var input = [
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
function dataHandling(input){
for (var i = 0; i < input.length; i++) {
//Your code goes here
console.log(input[i]);
}
}
dataHandling(input);




/*Objects:
22_What the output*/
myobject = {"1":"one","11":1,"name":"arun"}
console.log(myobject[11]); //return 1;
console.log(myobject.name); // return arun;



/*23_Add a new key value pair to myobject
key : ten
value : ten*/
myobject = {"1":"one","11":1,"name":"arun"}
myobject["ten"]="ten";
//your code goes here
console.log(myobject);
//{"1":"one","11":1,"name":"arun","ten":"ten"} // Quotes might not get displayed that fine.



//24_Write out an object literal to represent the data below.
var obj={fname:"Guvi",lname: "Geek",blockno: 6,buildingName: "IIT-M RP",city:"Chennai"};
console.log(obj);



/*How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)
Guvi, Geek, 6, IIT-M RP,Chennai.
Amazon, Inc, 31, SP Infocity, Chennai.
Google, Alphabet, 34 Amphitheater Parkway, MountainView.
Tesla, Inc , 32, 333 Santana Row,San Jose. */
var obj1=[{fname:"Guvi",lname: "Geek",blockno: 6,buildingName: "IIT-M RP",city:"Chennai"},{fname:"Amazon",lname: "Inc",blockno: 31,buildingName: "SP Infocity",city:"Chennai"},
{fname:"Google",lname: "Alphabet",blockno: 34,buildingName: "Amphitheater Parkway",city:"MountainView"},
{fname:"Tesla",lname: "Inc ",blockno: 32,buildingName: "333 Santana Row ",city:"San Jose."}];
console.log(obj1);
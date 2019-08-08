document.getElementById("demo").innerHTML = 5 + 6;
alert('hello my friends');
console.log('this message is written by me and dissplayed in the console');
var x , y , z;
x = 3;
y = 9;
z = x + y;
z **=z
document.getElementById("numbers").innerHTML = 'js number is' + z;
var carArr = ["pride","prado",'ferrari'];
document.getElementById('cararr').innerHTML = carArr;
var object_Ali = {firstname:'ali' , lastname:'pileforooshha' , car:'none'};
// object_Ali = null; empties the object by setting it to null
document.getElementById('object').innerHTML = object_Ali.firstname;
document.getElementById('type').innerHTML = typeof carArr; //return the type of object_Ali
var ali;
ali = undefined; // both value and type are undefined
function myfunc (par1 , par2){
    return par1*par2;
}
var func = myfunc(x,y);
document.getElementById('func_id').innerHTML='this number is the result of a function and should be 27 -->'+func;
var person = {      //this is an object containig all the shit niggas
    firstname : 'ali',
    lastname : 'pileforooshha',
    age : '20',
    height : '180ish',
    fullname : function(){
        return this.firstname + " " + this.lastname;
    }
}
document.getElementById('obj_id').innerHTML = person.fullname();
function ShowDate(){
    document.getElementById('func_time').innerHTML=Date();
}
var string = 'this is just a test string to use the string functions';
var length = string.length; //shows the length of the string
var position_first = string.indexOf('string');//shows the starting position of the 
document.getElementById('string_test_1').innerHTML = position_first;
var position_last = string.lastIndexOf('string');
document.getElementById('string_test_2').innerHTML = position_last;
var search_pos = string.search('to use the');
document.getElementById('string_test_3').innerHTML = search_pos;
var string_sliced = string.slice(8,12);
document.getElementById('string_test_4').innerHTML = string_sliced;
var string2 = "Kiwi , banana , Pride , ME , javascript";
var replaced = string2.replace('banana' , 'milkchoclate');
document.getElementById('string_test_5').innerHTML = replaced;
var toupper = string2.toUpperCase();
document.getElementById('string_test_6').innerHTML = toupper;
var tolowwer = string2.toLowerCase();
document.getElementById('string_test_7').innerHTML = tolowwer;
// var trimed = string2.trim(); it removes spaces from both  start and end of the
// string.charAt(20) returns the character at that position
// string[0]; returns the first character of the string
var str_arr = string2.split(",");//splits the string into array by the commas
document.getElementById('string_test_8').innerHTML = str_arr[2];
console.log(string2);
// var console_test = prompt("enter a number"); used for getting a number from user
//var x = 123e5;     12300000
//var y = 123e-5;    0.00123=
//var x = "100"; var = "10";
// while(x!=Infinity){
//     x = x*x;
// }
//var x=0xFF;
//var number; number.toString(2); returns the number to string to base 2
var math_number = 9.4291;
console.log("number 9.4291 with exponential 3 is " + math_number.toExponential(3)); // returns a string
console.log("number 9.4291 with fixed 3 is " + math_number.toFixed(3)); // returns a string
console.log("number 9.4291 with fixed 3 is " + math_number.toPrecision(3)); // returns a string
console.log("the function number() can turn its content string or whatever into number '  10.33    'is"+Number('  10.33    ') );
console.log("Number(true) is "+Number(true) );
console.log("Number('john') is "+Number("john") );
console.log("Number(new Date('2018-08-08')) is "+Number(new Date("2018-08-08")) );
console.log("parseInt('10 20 30') is "+parseInt('10 20 30'));
console.log("parseInt('10.33') is "+parseInt('10.33'));
console.log("parseInt('10 years') is "+parseInt('10 years'));
console.log("parseInt('years 10') is "+parseInt('years 10'));
console.log("parseFloat('10 20 30') is "+parseFloat('10 20 30'));
console.log("parseFloat('10.33') is "+parseFloat('10.33'));
console.log("parseFloat('10 years') is "+parseFloat('10 years'));
console.log("parseFloat('years 10') is "+parseFloat('years 10'));
var fruitArr = ['kiwi' , 'grape' , 'mango' , 'pineapple' , 'watermelon'];
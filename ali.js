// "use strict"
document.getElementById("demo").innerHTML = 5 + 6;
// alert('hello my friends');
console.log('this message is written by me and dissplayed in the console');
var x , y , z;
x = 3;
y = 9;
z = x + y;
z **=z;
var carArr = ["pride","prado",'ferrari'];
var object_Ali = {firstname:'ali' , lastname:'pileforooshha' , car:'none'};
// object_Ali = null; empties the object by setting it to null
var ali;
ali = undefined; // both value and type are undefined
function myfunc (par1 , par2){
    return par1*par2;
}
var func = myfunc(x,y);
var object_person = {      //this is an object containig all the shit niggas
    firstname : 'ali',          
    lastname : 'pileforooshha',
    age : '20',
    height : '180ish',
    fullname : function(){
        return this.firstname + " " + this.lastname;
    }
}
Object.defineProperty(object_person , 'eyecolor' , {value : "blue"})
console.log(object_person.eyecolor);
console.log(Object.getOwnPropertyNames(object_person));
function ShowDate(){
    document.getElementById('func_time').innerHTML=Date();
}
var string = 'this is just a test string to use the string functions';
var length = string.length; //shows the length of the string
var position_first = string.indexOf('string');//shows the starting position of the 
console.log('the position of the first string in the variable string using indexOf() is '+ string.indexOf('string'));
var position_last = string.lastIndexOf('string');
console.log('the position of the last string in the variable string using lastIndexOf() is ' + string.lastIndexOf('string'));
var search_pos = string.search('to use the');
console.log('the position of the first string in the variable string using search() is '+ string.search('string'));
var string_sliced = string.slice(8,12);
console.log('this word was sliced out of the string using .slice()'+ string.slice(8,12));
var string2 = "Kiwi , banana , Pride , ME , javascript";
var replaced = string2.replace('banana' , 'milkchoclate');
console.log('this is another string which banana has been replaced with milkchoclate in using .replace()'+string2.replace('banana' , 'milkchoclate'));
var toupper = string2.toUpperCase();
console.log('string converted to all upper case using .toUpperCase() '+string2.toUpperCase());
var tolowwer = string2.toLowerCase();
console.log('string converted to all lower case using .toLowerCase() '+string2.toLowerCase());
var trimed = string2.trim(); //it removes spaces from both  start and end of the
string.charAt(20); // returns the character at that position
string[0]; //returns the first character of the string
var str_arr = string2.split(",");//splits the string into array by the commas
console.log(string2);
// var console_test = prompt("enter a number"); used for getting a number from user
//var x = 123e5;     12300000
//var y = 123e-5;    0.00123=
//var x = "100"; var = "10";
// while(x!=Infinity){
//     x = x*x;
// }
//var x=0xFF;
//var number; number.toString(2); returns the number to   string to base 2
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
console.log(fruitArr);
var fruitArr_lenght = fruitArr.length;
console.log('the lenght of array is using "fruitArr.length" --> ' + fruitArr_lenght);
var fruitArr_sorted = fruitArr.sort();
console.log('the sorted array using .sort() is ' + fruitArr);
fruitArr.push('dragonFruit');
console.log('the fruit array after being pushed \n' + fruitArr);
console.log('the array converted to a string \n' + fruitArr.toString());
console.log('the array converted to a string with join("*") \n' + fruitArr.join("*"));
fruitArr.pop();
console.log('the fruit array after being poped is ' + fruitArr);
fruitArr.shift(); //removes the first element //returns a string
console.log('array after being shifted is ' + fruitArr);
fruitArr.unshift('grape'); //adds an element to the start of an array // returns the new array length
console.log('array after being unshift("grape") is \n' + fruitArr);
// delete fruitArr[0]; delets the element
fruitArr.splice(2,2,'garlic','BANANAS');// where to start-how many delete from the written position-what to add for the rest
console.log('the array after being spliced is ' + fruitArr);
var newFruitArr = fruitArr.concat(['oranges','cucumber','apples']);//adds the content to the end of the array
console.log("this is a new array made using concat \n" + newFruitArr);
console.log('this is the original array which we used concat on'+ fruitArr);
var newFruitArr2 = fruitArr.slice(3);
console.log('this is a new array made by using the slice method' + newFruitArr2);
var fruitArr_reverse = fruitArr.reverse();//effects the array itself
console.log(fruitArr);
var txt = " is in foreach func";
fruitArr.forEach(arrForEach);//pretty self explainatory
function arrForEach(value,index,arr){
    console.log( value + txt);
    return;
}
var numberArr = [20,45,92,10,28,54];
var numberArr_doubled = numberArr.map(numberArrfunc);
function numberArrfunc(value ,index , arr){
    console.log(value*2);
    return value*2;
}
console.log(numberArr_doubled);
console.log(numberArr);
var numberArr_over18 = numberArr.filter(arrFilterfunc);
function arrFilterfunc(value,index,arr){
    return value>35;
}
console.log(numberArr_over18);
console.log('every values of numberArr over 20 is ' + numberArr.every(over18Test));
function over18Test(value,index,arr){
    return value>18;
}
console.log('some of values of numberArr over 20 is ' + numberArr.some(over18Test));
function over18Test(value,index,arr){
    return value>18;
}
console.log(fruitArr);
console.log('the index of BANANA  using indexOf array is '+ fruitArr.indexOf("watermelon"));//shows the index of the searched element lastIndexOf shows the last occurence
console.log(numberArr);
console.log('the first element with the value more than 30 in numberArr is '+ numberArr.find(over30));//find index returns the index number works the same way
function over30 (value,index,arr){
    return value>30;
}
console.log('the index of the first element over 30 are ' + numberArr.findIndex(over30));
console.log('the date is '+ new Date());
console.log('this is a specified date set by me --> '+ new Date(2018,5,21,13,41,54,88));
console.log('this is the pi number produced by Math.PI' + Math.PI);
// Math.round(4.7);    // returns 5  |  Math.pow(8, 2);      // returns 64  | Math.sqrt(64);      // returns 8 |
// Math.abs(-4.7);     // returns 4.7 | Math.ceil(4.4);     // returns 5 | Math.floor(4.7);    // returns 4
// Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees) |
console.log('highest number found using Math.max ' + Math.max(10 ,92,32,100,321,42,78,49,31,43));
console.log('lowest number found using Math.max ' + Math.min(10 ,92,32,100,321,42,78,49,31,43));
console.log('this is a random number generated by Math.random ' + Math.random());
// Math.floor(Math.random() * 10);     // returns a random integer from 0 to 9
// Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100
function rand_num_max_excluded(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
function rand_num_max_included(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log('this is a true or false returned by Boolean function -->' + Boolean(10>9));
console.log('isNaN is a function which tells if the content inside is a number or not watch =))   ' + isNaN(hi));
var vote_age = rand_num_max_included(0,80);
console.log(vote_age , vote_age >= 18 ? "Old enough to vote" : "Not Old enough to vote");
if(vote_age>=18){
    console.log("You are old enough to vote");
}else{
    console.log("Not old enough to vote");
}
var counter , counter2 = 0;
var age;
for(counter = 0;counter<10;counter++){
    age = rand_num_max_included(0,80);
    console.log(age);
    if(age >= 18){
        console.log('Allowed to vote');
        counter2 ++;
    }
    else{
        console.log('Not allowed to vote');
    }
}
console.log(counter2 + " people are allowed to vote");
console.log('for/in loop');
for(x in fruitArr){
    console.log(fruitArr[x]);
}
console.log('for/of loop');
for(x of fruitArr){
    console.log(x);
}
var number = 12;
var stringed_number = String(number);
console.log(stringed_number);
console.log('this is a 12.93 as a string turned into a number using Number -->' + Number('12.93'));
console.log('this is a 12.93 as a string turned into a number using parseInt -->' + parseInt('12.93'));
console.log('this is a 12.93 as a string turned into a number using parseFloat -->' + parseFloat('12.93'));
var lorem = "lorem ipsum dolor sit amet, consectetur adipiscing elit,lorem ipsum dolor sit amet, consectetur adipiscing elit,lorem ipsum dolor sit amet, consectetur adipiscing elit,lorem ipsum dolor sit amet, consectetur adipiscing elit"
var lorem_replaced = lorem.replace('lorem','ali');
console.log("this lorem text replaced (lorem-->ali) \n" + lorem_replaced);
var lorem_replaced_global = lorem.replace(/lorem/g,'ali');
console.log("this lorem text replaced with global modifier (lorem-->ali) \n" + lorem_replaced_global);
var patt = /lorem/;
console.log('this test() function checks if the parameter is in the searched string -->'+patt.test(lorem));
class auto_mobile{
    constructor(brand,year,top_speed){
        this.car_name = brand;
        this.model = year;
        this.top_speed = top_speed;
    }
    present(){
        return "this is a " + this.car_name + " model " + this.model + " with the top speed " + this.top_speed;
    }
}
var ford = new auto_mobile('ford',1983,220);
console.log(ford.present());
class auto_mobile_ability extends auto_mobile{
    constructor(brand,year,top_speed,common_use,door_count){
        super(brand,year,top_speed);
        this.common_use = common_use;
        this.door_count = door_count;
    }
    fulluse(){
        return this.present() + " it can be used for " + this.common_use + " and has " + this.door_count + "doors";
    }
}
var jeep = new auto_mobile_ability('jeep',2020,180,'hill_climbing',4);
console.log(jeep.fulluse());
function func_button(){
    let paragraph1 = document.getElementById("paragraph1");
    let paragraph1_style = document.getElementById("paragraph1").style;
    paragraph1.innerHTML = '10px';
    paragraph1_style.color = 'red';
    paragraph1_style.margin = '10px';
    paragraph1_style.borderColor = 'black';
}
function mOut(obj){
    obj.innerHTML="put your mouse over me";
    obj.style.backgroundColor = "rgb(212, 67, 23)";
    obj.style.color = "white";
}
function mIn(obj){
    obj.innerHTML="I Love You Baby";
    obj.style.backgroundColor = "purple";
    obj.style.color = "red";
}
document.getElementById("button_Date").onclick = date_display ;
function date_display(){
    document.getElementById("Date_para").innerHTML = Date();
}
document.getElementById('EventListener').addEventListener("click",function (){
    alert("u did that with an event listener");
});
document.getElementById('EventListener').addEventListener("mouseover",function (){
    document.getElementById("eventListenerPara").innerHTML += "you just put your mouse on the button <br>"
});
document.getElementById('EventListener').addEventListener("click",function (){
    document.getElementById("eventListenerPara").innerHTML += "you just clicked the button <br>"
});
document.getElementById('EventListener').addEventListener("mouseout",function (){
    document.getElementById("eventListenerPara").innerHTML += "you just removed your mouse from the button <br>"
});
window.addEventListener("resize",function (){
    document.getElementById("eventListenerPara").innerHTML += Math.random() + "<br>";
});
document.getElementById('loveButton').onclick = emopara;
function emopara(){
    var para = document.createElement("p");
    var iLoveYou = document.createTextNode("I LOOOOVVVVEEEE YOOOOUUUUUUUU <br>");
    document.getElementById('loveDiv').appendChild(para.appendChild(iLoveYou));
}
console.log('the height of window using window.innerHeight is : ' + window.innerHeight);
console.log('the width of window using window.innerWidth is : ' + window.innerWidth);
var myWindow;
function openwindowfunc() {
    myWindow = window.open("" ,"myWindow" , "width=200 , height=300");
    myWindow.document.write("<p>This is 'myWindow'</p>");
}
function closewindowfunc() {
    myWindow.close();
}
function movewindowfunc(){
    myWindow.moveTo(500,100);
    myWindow.focus();
}
function resizewindowfunc(){
    myWindow.resizeTo(800,900);
    myWindow.focus();
}
console.log(screen.width);
console.log(screen.height);
console.log(screen.availWidth);
console.log('the location of the current page'+window.location.href);
console.log('the host name is : '+window.location.hostname);
console.log('the path-name is : '+window.location.pathname);
console.log('the protocol is : '+window.location.protocol);
function opengoogle(){
    window.location.assign('https://google.com');
}
function confirmation(){
    if(confirm('are u male?')){
        console.log("he is a man");
    }else{
        console.log('definitely not a man');
    }
}
function namequiz(){
    prompt('whats your name?','ali!');
}
var JSONFILE = '{"name":"ali","lname":"pileforooshha","age":20}'
var JSON_OBJ = JSON.parse(JSONFILE); // turns a string into an object which is cool af
console.log(JSON_OBJ.name);
console.log(JSON_OBJ.lname);
console.log(JSON_OBJ.age);
var JSONTEXT = JSON.stringify(object_Ali);
console.log(JSONTEXT);
var input_string = document.getElementById('inputstr');
console.log(input_string);
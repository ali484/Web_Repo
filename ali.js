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
var carName = 'prideshiiiit';
var length = carName.length; //shows the length of the string


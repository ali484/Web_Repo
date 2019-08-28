var names=["ali" , "mohadese" , "asal" ]
function f1(){
  for(var i=0 ; i<names.length ; i++){
      alert(names[i])
  }
}
//f1()
function focusfunc(){
  alert("I am here!")
}
function onplurfunc(){
  alert("I out here")
}
function myfunc(){
  document.getElementById('myspan').innerHTML=2;
}
function firstnamefunc(){
  document.getElementById("firstnames").innerHTML=eval(document.getElementById("firstnames").innerHTML)+1
}
var test="mohadese"
//document.getElementById("string").innerHTML=test.length
//alert(test.length)
//alert(test.indexOf("test"))
function changecolor(){
document.getElementById("changecolor").style.backgroundColor="red"

}//change style 
function changesrc(){
  document.getElementById("image1").src="Me_Kid.JPG"
}//change attribute
function addnewtag(){
var newpre=document.createElement("pre");
newpre.innerHTML="بر حذر باش که سر میشکند دیوارش"
document.getElementById("addnewtags").appendChild(newpre);
}
/*function removetag(){
 document.getElementById("removetag").removeChild(document.getElementById("removetag").getElementById("link"))
}*/
function appendchild(){
  var txt="mohadese"
 var txtp1=document.createElement("p")
var p1text=txtp1.innerHTML="mahadese size="+ txt.length+"<br />"
document.getElementById("showmethods").appendChild(txtp1)



 var txtp2=document.createElement("p")
 var p2text=txtp2.innerHTML="the third letter of mohadese=" +txt.charAt(3)+"<br />"
 document.getElementById("showmethods").appendChild(txtp2)


var txt1="ali"
var txtp3=document.createElement("p")
var p3text=txtp3.innerHTML="combining strings="+txt.concat(txt1)
document.getElementById("showmethods").appendChild(txtp3)


}
function arraymethods(){
var names1=["ali" , "reza" , "mohammad"]
//alert(names1.toString())
//alert(names1.join("*"))
//alert(names1.pop())//remove the last element from an array

//alert(names1.push("mody"))
//alert(names1.shift())//remove first element 
//names1[names.length]="hasan"//adds new element 
//alert(names1)
//delete names1[0] 
//alert(names1)
var names2=["mohadese" , "zahra" , "vahid"];
var names3=names1.concat(names2);
//alert(names1.concat(names2))
//alert(names3.slice(1,3))
//alert(names1.sort())
//alert(names1.reverse())
var numbers=[14 , 98 ,1,78,77,12,7];
numbers=numbers.sort(function(a , b){return a-b});//sort numbers in js:)
//alert(numbers)
//names3=names3.splice(1 , 2 ,"hasan" , "hosien")
//alert(names3)


}



function stringmethods(){
var fname="mohadese";
var lname="gharakhanlo";
//alert(fname.length)
var charat=fname.charAt(3); // return a
//alert(charat)
var charcodeat=fname.charCodeAt(3);
//alert(charcodeat)
var concat=fname.concat("-" ,lname)
//alert(concat);
var indexof=fname.indexOf("a");//lastindexof and indxof and search have same performence
//alert(indexof)
var slice=fname.slice(0 , 4);
//alert(slice)
var fruit="apple,orange,benana";
var split=fruit.split("a" , 2);
//alert(split)
var substr=fname.substr(2 , 3);
//alert(substr)
}

function regexp(){
var patt1=/[mdf]/;
var txt1="mohadese";
//alert(patt1.test(txt))
var patt2=/[a-h]/;
var txt2="ijkl";
//alert(patt2.test(txt2))
var patt3=/[amo]/i ;// ignore case
var txt3="MOHADESE";
//alert(patt3.test(txt3))
var patt4=/[^abs]/;
var txt4="abs";
//alert(patt4.test(txt4))
var patt5=/a.i/;
var txt5="salam ali";
//alert(patt5.test(txt5))
var patt6=/\w/// a-z and 0-9 and _ and /\W/=[!/\w/]
var txt6="$";
//alert(patt6.test(txt6))
var patt7=/\d/// 0-9 and /\D/=[!/\d/];
var txt7="mody77";
//alert(patt7.test(txt7))
var patt8=/\s/ ;// space and /\S/=[!/\s/]
var txt8="mahadese gharakhanlo";
//alert(patt8.test(txt8))



}
 function testname(){
   var patt=/[^a-z]/i;
var name=prompt("enter your name:");
if(!patt.test(name)){
  alert("your name is valid");
}else{
  alert("your name is unvalid");
  testname();
}
 }

var google
 function window_open(){
google=window.open("https://www.google.com" ,"","width=500px , height=400px" , "_blank");

 }
 function window_close(){
google.close();
 }
function time(){
  var t=new Date();
  document.getElementById("time").innerHTML= t.toLocaleTimeString();
}
var settime=setInterval(function(){time()}, 1000);
  var testtime=true;
function pouse_time(btn){

 // if(testtime==true){
clearInterval(settime);
testtime=false;
//btn.value="play"
//alert(testtime)
  
 /* else{
    testtime=true
    btn.value"pouse"
   var settime=setInterval(function(){time()}, 1000)
   // alert(testtime)
  }*/
}
document.getElementById("addeventlistener").addeventlistener("click" , function(){
 // var newtag=document.createElement("p")
  //var text=newtag.innerHTML="دامش ندیدم ناگهان در وی گرفتار اومدم"
  document.getElementById("addevent").innerHTML+="سلام";

})


var students= [];
var i=0;
var table="<table width:'300px' border:'10px'><tr><td>firstname</td><td>lastname</td><td>age</td></tr>";
function addstudent(){
var fname=prompt("enter your name:");
console.log(fname);
var lname=prompt("enter your lname:");
console.log(lname);
var age=prompt("enter your age:");
console.log(age);
var student = {firstname:fname , lastname:lname , age:age};
console.log(student.firstname);
// students.push(student);
// students[i]=student;
 table+="<tr>";
 table+="<td>" + student.firstname +"</td>" + "?";
 table+="<td>" + student.lastname + "</td>" + "?";
 table+="<td>" + student.age + "</td>" + "?";
 table+="</tr>" + "<br>";

// console.log(students[i].firstname);
// console.log(students[i].lastname);
// console.log(students[i].age);
i++;
}
function showstudent(){
table+="</table>";
 document.getElementById("table").innerHTML= table + "hello";
 /*for(var i=0 ;i<students.length ; i++){
   var test={firstname:students[i].firstname , lastname:students[i].lastname , age:students[i].age}
 }*/
}


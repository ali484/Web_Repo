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
function stringmethods(){
  var txt="mohadese"
 var txtp1=document.createElement("p")
var p1text=txtp1.innerHTML="mahadese size="+ txt.length+"<br />"
document.getElementById("methods").appendChild(txtp1)



 var txtp2=document.createElement("p")
 var p2text=txtp2.innerHTML="the third letter of mohadese=" +txt.charAt(3)+"<br />"
 document.getElementById("methods").appendChild(txtp2)


var txt1="ali"
var txtp3=document.createElement("p")
var p3text=txtp3.innerHTML="combining strings="+txt.concat(txt1)
document.getElementById("methods").appendChild(txtp3)


}

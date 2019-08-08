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

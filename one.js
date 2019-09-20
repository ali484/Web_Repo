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
document.getElementById("addeventlistener").addEventListener("click" , function(){
  var newtag=document.createElement("p")
 newtag.innerHTML="دامش ندیدم ناگهان در وی گرفتار اومدم"
 document.getElementById("addevent").appendChild(newtag)
  

})
var std=new Array()
var i=0;
function addstudent(){
var fname=prompt("enter your name:");
var lname=prompt("lname?")
var age=prompt("age?")
var student={fname:fname , lname:lname , age:age}
std[i]=student;
i++

}
function showstudent(){
var table="<table><tr><th>fname</th><th>lname</th><th>age</th></tr>"
for(var j=0 ; j<std.length ; j++){
  table+="<tr>"
  table+="<th>" + std[j].fname + "</th>"
   table+="<th>" + std[j].lname + "</th>"
    table+="<th>" + std[j].age + "</th>"
  table+="</tr>"
}
table+="</table>"
document.getElementById("table").innerHTML=table
}
function factorial(){
var number=eval(prompt("enter number:"));
 var fac=1;
for(var i=1 ; i<=number ;i++ ){
 
  fac=fac*i
}
alert(fac);

}
var selectedtrtag;
function addtotable(btn){
  var fname=document.getElementById("Fname").value;
  var lname=document.getElementById("Lname").value;


  if(btn.value=="addtotable"){
    var trtag=document.createElement("tr");
    trtag.onmouseover=function(){
      trtag.style.backgroundColor="pink";

    }
    trtag.onmouseout=function(){
      trtag.style.backgroundColor="white";
    }
    var tdfname=document.createElement("td");
    tdfname.innerHTML=fname;
    var tdlname=document.createElement("td");
    tdlname.innerHTML=lname;
    var tdope=document.createElement("td");
    var dellink=document.createElement("a");
    dellink.innerHTML="delete";
    dellink.href="#";
    dellink.onmouseover=function(){
      dellink.style.color="red";
    }
    dellink.onmouseout=function(){
      dellink.style.color="blue";
    }
    dellink.onclick=function(){
      //tdfname.innerHTML="";// edeye khodam:)
      //tdlname.innerHTML="";
      deltrtag(trtag);
    }
    var editlink=document.createElement("a");
    editlink.innerHTML="edit";
    editlink.href="#";
    editlink.onmouseover=function(){
      editlink.style.color="yellow";
    }
    editlink.onmouseout=function(){
      editlink.style.color="blue";
    }
    editlink.onclick=function(){
      /*var newfname=prompt("enter your name:");
      tdfname.innerHTML=newfname;
      var newlname=prompt("enter your lname:");
      tdlname.innerHTML=newlname;*/ //edeye khodam
      edittrtag(trtag);

    }
    var space=document.createTextNode("  ");
       tdope.appendChild(dellink);
       tdope.appendChild(space);
       tdope.appendChild(editlink);
    var tdchk=document.createElement("td")
      tdchk.innerHTML="<input type='checkbox' onclick='chk_click(this)' />"

    trtag.appendChild(tdfname);dddddddd
    trtag.appendChild(tdlname);
    trtag.appendChild(tdope);
    trtag.appendChild(tdchk);
    document.getElementById("person").appendChild(trtag);
  }
  else{
     selectedtrtag.childNodes[0].innerHTML=fname;
     selectedtrtag.childNodes[1].innerHTML=lname;
     selectedtrtag.style.backgroundColor="white";
     document.getElementById("personbtn").value="addtotable"

  }

}
function deltrtag(trtag){
  document.getElementById("person").removeChild(trtag);
}

function edittrtag(trtag){
  selectedtrtag=trtag;
  trtag.style.backgroundColor="red";
  document.getElementById("Fname").value=trtag.childNodes[0].innerHTML;
  document.getElementById("Lname").value=trtag.childNodes[1].innerHTML;
  document.getElementById("personbtn").value="modify";

}

function chkall_click(chk){
  var table=document.getElementById("person");
 // alert(table.childNodes.length);
  if(chk.checked){
    for(var i=2 ; i<=table.childNodes.length ; i++){
      table.childNodes[i].childNodes[3].childNodes[0].checked="checked";
    }
  }
  else
    for(var i=2 ; i<=table.childNodes.length ; i++){
       table.childNodes[i].childNodes[3].childNodes[0].checked="";
    }

}
function chk_click(chk){
   var table=document.getElementById("person");  
   var boxes=table.getElementsByTagName("input");
   
  if(!chk.checked){
    document.getElementById("chkall").checked="";
  }
  /*else{
    for(var i=0 ; i<=boxes.length ; i++){
      if(boxes[i].checked){
        continue;
      }
      else{
        break;
      } 
    }
    if(i==boxes.length){
        document.getElementById("chkall").checked="checked";
      }
  }*/
  
  
}
function firstcheckbox(){
  var Secondbox=document.getElementById("secondbox");
  if(Secondbox.checked){
    document.getElementById("thirdbox").checked="checked";
  }

}
function secondcheckbox(){
  var Firstbox=document.getElementById("firstbox");
  if(Firstbox.checked){
   document.getElementById("thirdbox").checked="checked";
  }

}
function thirdcheckbox(){
  var Thirdbox=document.getElementById("thirdbox")
  if(Thirdbox.checked){
    document.getElementById("firstbox").checked="checked";
    document.getElementById("secondbox").checked="checked";

  }

}

//alert(divslide.childNodes.length);
/*setInterval(function(){slideshow()} , 1000);
function slideshow(){
  var divslide=document.getElementById("slideshow");
  for(var i=1 ; i<divslide.childNodes.length ; i=i+2){
    divslide.childNodes[i].style.display="inline";
    //divslide.childNodes[i].style.display="none";
  }
}*/
 var numberimg=0;
 var image=new Array("index2.jpg","index.jpg","index4.jpg");
function shownext(){
  if(numberimg==0){
     document.getElementById("firstimg").src=image[numberimg];
     numberimg++; 
   }
   else if(numberimg<image.length && numberimg>0){
     document.getElementById("firstimg").src=image[numberimg];
     numberimg++;
   } 
  else if(numberimg==image.length){
     document.getElementById("firstimg").src="index3.jpg";
     numberimg=0;
   }  
}
var imagepre=new Array("index2.jpg","index.jpg","index4.jpg","index3.jpg");
function showprevious(){
   if(numberimg==0){
     document.getElementById("firstimg").src="index4.jpg";
     numberimg=image.length-1
     
   }
   else if(numberimg<imagepre.length && numberimg>0){
     numberimg=numberimg-1;
     document.getElementById("firstimg").src=imagepre[numberimg];
     
   }
   else{
     numberimg=0;
     document.getElementById("firstimg").src=imagepre[numberimg];
     
    }
}
var sssss = setInterval(shownext , 2000);
index=0;
function slider(){
   var slides=document.getElementById("slide").getElementsByTagName("img");
   /*if(index==0){
     slides[index].style.display="none";
     slides[index+1].style.display="inline";
     index++;
   }
   else if(index>0 && index<slides.length){
      slides[index].style.display="none";
      slides[index+1].style.display="inline";
      index++;
   }
   else if(index==slides.length){
     slides[index].style.display="none";
     slides[0].style.display="inline";
     index=0;
    
   }*/
   for(var i=0;i<=slides.length;i++){
     slides[i].style.display="none";
     if(i==slides.length){
       slides[0].style.display="inline";
     }
     else{
     slides[i+1].style.display="inline";
     }
   }
}




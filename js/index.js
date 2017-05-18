function main(){
  
var knop1=document.querySelectorAll("button")[0];
var knop2=document.querySelectorAll("button")[1];
var knop3=document.querySelectorAll("button")[2];
var teletubbies=document.querySelectorAll("img")[0];
var zon=document.querySelectorAll("img")[1];
var nooNoo=document.querySelectorAll("img")[2]


knop1.onmousedown = function(){
  console.log("jippie");
  teletubbies.className="polonaise";
}

knop2.onmousedown=function(){
  console.log("morning");
  zon.className="zon";
}

knop3.onmousedown=function(){
  console.log("noonoo");
  nooNoo.className="nooNoo";
}
}

window.onload=function(){
  main();
}
var a=document.getElementById("text");
console.log(a);
var b=document.getElementsByTagName("h1");
console.log(b[0]);
var c=document.getElementsByClassName("box");
console.log(c[0])
var change=document.getElementById("change");
change.innerText="hello World"
console.log(change);
var content=document.getElementById("content");
function replace(){
    content.innerText="Welcome to Elevation Acedamy";
}
console.log(content);
var heading=document.getElementById("heading");
heading.style.color="red";
console.log(heading);
var card=document.getElementsByClassName("card");
function bottom(){
    card[0].style.flexDirection="column";
}
console.log(card[0]);

function clock(){
let date=new Date();
let hours=date.getHours();
let minutes=date.getMinutes();
let seconds=date.getSeconds();

if(hours>12)
{
    hours=hours-12;
}
console.log(hours,minutes,seconds);
let hour=document.getElementById("hour");
hour.innerText=hours;
let min=document.getElementById("min");
min.innerText=minutes;
let sec=document.getElementById("sec");
sec.innerText=seconds;
}

setInterval(()=>{
    clock();
},1000)

let date=new Date();
let hours=date.getHours();
if(hours>=12)
{
    let ampm=document.getElementById("ampm");
    ampm.innerText="PM";
}
else
{
    let ampm=document.getElementById("ampm");
    ampm.innerText="AM";
}



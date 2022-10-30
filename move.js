var b = document.querySelector("button") ;
b.addEventListener("click",change);
function change()

{
    var i = Math.floor(Math.random()*500)+1;
    var j = Math.floor(Math.random()*500)+1;
    b.style.left = i+"px";
    b.style.top = j+"px";
}
ype = "text/javascrpt"
setInterval(changeColor,1000);
    function changeColor() {
        var x=document.getElementById("change1");
        if(x.style.color=="black")
           x.style.color="red";
        else if(x.style.color=="red")
           x.style.color="green";
        else if(x.style.color=="green")
           x.style.color="black";
        else x.style.color="black";  
    }



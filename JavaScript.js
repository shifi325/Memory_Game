var targ;
var prev;
var p;
var find=0;
var sum=0;
var count = 0;
function start() {
   
    for (var i = 0; i <2; i++)
    {
        for (var j = 1; j < 10; j++)
        {
            var x = document.createElement("div");
            x.setAttribute("data-game", "set" + j);
            x.setAttribute("data-find", "of");
            document.getElementById("warp").appendChild(x);
        }
    }
}
function check()
{
    if (event.target == event.currentTarget)
        return;
    if (count==2|| event.target.getAttribute("data-find" == "on"))
        return;
    p = event.target;
    if (p == prev)
        return;
    p.classList.add(p.getAttribute("data-game"))
    if (count == 0)
    {
        prev = p;
        count = 1;
    }
    else
    {
        count = 2;
        window.setTimeout("close()", 1000);
    }
}
function close()
{
    if (prev.getAttribute("data-game") == p.getAttribute("data-game")) {
        find += 1;
        sum += 10;
        document.getElementById("score").innerHTML = sum;
    
        prev.style.opacity = "0.5";
        p.style.opacity = "0.5";
        if (sum == 90) { 
            document.getElementById("score").innerHTML = "you win!";
            end();
        }
    }
    else
    {
        prev.classList.remove(prev.getAttribute("data-game"));
        p.classList.remove(p.getAttribute("data-game"));
    }
    count = 0;
    prev = p = null;
}
function end()
{
    document.getElementById("end1").style.display = "grid";
    document.getElementsByClassName("finish")[0].style.display = "grid";


}



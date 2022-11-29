// exercice 2.1//
var x = document.querySelectorAll(".important");
for (elem of x){
    elem.setAttribute("title","This is an important item");
}

//exercice 2.2//
var y= document.querySelectorAll("img");
for (elem of y)
{

    if (elem.classList.contains("important"))
    {
       elem.style.display = "block";
    }
    else {
        elem.style.display = "none";
    }
}

//exercice 2.3//
var para = document.querySelectorAll("p")

for (elem of para) {
    if (elem.hasAttribute ("class"))
    {
        console.log(elem.textContent,elem.classList)
    }
}

//exercice 2.4//
var para = document.querySelectorAll("p")
for (elem of para){
    if (elem.hasAttribute("class")){
        elem.style.color = "rgb(0,0,0)";
    }
    else{
        function randomRgbColor() {
            let r = Math.floor(Math.random()*255 +1);
            let g = Math.floor(Math.random()*255 +1);
            let b = Math.floor(Math.random()*255 +1);
            return "rgb("+r+","+g+","+b+")";
        }
        elem.style.color = randomRgbColor()
         
    }
}
       
console.log(randomRgbColor());
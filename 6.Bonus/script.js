const list=document.querySelector("ul").childNodes
const ul = document.querySelector("ul")
const fast= ul.children[5]
console.log(fast)
for (elem of list)
{
    if ((elem.nodeType === 1) && (elem.textContent == "Fast and Furious")){
        ul.insertBefore(fast,ul.firstChild)
        fast.classList.add("important")
    }
    
    elem.addEventListener('click',(e)=>{
        if (e.target.textContent == "Fast and Furious"){
            alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.")
        }
        else {
            window.alert(e.target.textContent)
        }
    })
}


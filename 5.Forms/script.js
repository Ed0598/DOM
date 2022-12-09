//exercice 1
const input = document.getElementById("firstname")
const span = document.getElementById("display-firstname")

input.addEventListener('keyup', () =>{
    span.textContent = input.value
})


//exercice 2

const age = document.getElementById("age")
const sec = document.getElementById("a-hard-truth")
age.addEventListener('keyup', () =>{
    if (age.value<18){
        sec.style.visibility = "hidden"
    }

    else{
        sec.style.visibility = "visible"
    }
})

//exercice 3 

const pwd = document.getElementById("pwd")
const pwd2= document.getElementById("pwd-confirm")

pwd.addEventListener('keyup', () =>{

    if (pwd.value.length < 6){
        pwd.style.backgroundColor ="red"
    }
        
    else{
        pwd.style.backgroundColor="white"

    }
    

})
pwd2.addEventListener('keyup', () =>{

    if (pwd2.value.length < 6 || pwd2.value != pwd.value){
        pwd2.style.backgroundColor ="red"
    }
        
    else{
        pwd2.style.backgroundColor="white"
    }
})

//exercice 4 
const button= document.getElementById("toggle-darkmode")
button.addEventListener('change', (e) =>{

    if (e.target.value == "dark")
    {
    document.body.style.backgroundColor= "black"
    document.body.style.color="white"
    }

    else
    {
    document.body.style.backgroundColor= "white"
    document.body.style.color="black"
    }

})




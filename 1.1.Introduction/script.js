/* exercice 1.1*/
document.title = "Exploring the DOM";
console.log(document.title);

/*exercice 1.2*/
document.title = "Modifying the DOM";

/*exercice 1.3*/
document.body.style.backgroundColor ="#FF69B4"

/*bonus exercice 1.3*/
document.body.style.backgroundColor = "rgb(1,50,200)"

/* exercice 1.4*/
for (elem of document.body.children){
    console.log(elem)
}
const liste=document.querySelector('ol')
const firstChild= liste.firstChild
const child=liste.children[4]
liste.insertBefore(child,firstChild)


//
const main= document.querySelector('main')
const section3= main.children[2]
const section2=main.children[1]
const titre2= section2.children[0]
const titre3=section3.children[0]
section2.appendChild(titre3)
section3.appendChild(titre2)
//
main.removeChild(section3)



//exercice 3.1//
 function randomizelist (Keller5){
    l= Keller5.length
    let randomlist=[]
    for (i=0;i<l;i++)
    {
        let random = Math.floor(Math.random ()*l)
        while (randomlist.includes (Keller5[random]))
        {
            random = Math.floor(Math.random ()*l) 
        }
            randomlist.push(Keller5[random])

    }
    return randomlist
}



function randomcolor(){
    r=Math.floor(Math.random()*255+1)
    g=Math.floor(Math.random()*255+1)
    b=Math.floor(Math.random()*255+1)
    color="rgb(" + r + "," + g + "," + b + ")"
    return color;
}
let Keller5 = ["Arno Volts" ,"Aurélien Mariaule" ,"Aurore Lemaire" ,"Benjamin Porsont" ,"Céline Verreydt" ,"Corentin Miserque" ,"Dominique Coppée" ,"Edouard de Romrée de Vichenet" ,"Hugo Goorickx ","Jofrey Houyoux" ,"Jonathan Manes" ,"jonathan bajoux" ,"Laura Wilhelmi" ,"Lysie Soyez" ,"Marnie Benalia" ,"Mathil de Cornelis" ,"Milo Bonnet" ,"Nadim El Nakadi" ,"Nathalie Vanden Abeele" ,"Nathalie Goffette" ,"Nour Everaert" ,"Pierre Mauriello" ,"Quentin Bource ","Virginie Dourson"]
let classaléatoire= randomizelist (Keller5)
i=0
for (elem of classaléatoire)
{
    backgroundColor= randomcolor()
    learner_elem = document.createElement("section");
    learner_elem.style.backgroundColor= backgroundColor;
    para=document.createElement("p")
    para.innerText=elem
    para.style.color= getTextColor(backgroundColor)
    document.getElementsByTagName('article')[0].appendChild(learner_elem);
    document.getElementsByTagName('section')[i].appendChild(para)
    i++
    
}

//exercice 3.2//
function getTextColor(rgb) 
{
    rgb = rgb.match(/\d+/g);
    if ((rgb[0] * 0.299) + (rgb[1] * 0.587) + (rgb[2] * 0.114) > 150) {
        return 'black';
    } else {
        return 'white';
    }
}




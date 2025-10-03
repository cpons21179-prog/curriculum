function claudia(){
    let nom = prompt("¿COMO QUIERES LLAMARTE?")
    document.getElementById("nom").innerHTML = "Nom: "+nom;
}

function canvifoto(){
    let foto = prompt("Que quieres ser?");
    document.getElementById("foto").src = foto
}

function harrypotter(){
    if(document.getElementById("foto").hidden == true){
        document.getElementById("foto").hidden = false
    }else{
        document.getElementById("foto").hidden = true
    }
}

function canviafons(){
   let body = document.getElementsByTagName("body")[0]
   let foto = prompt("DONDE QUIERES VIAJAR?")
   body.style = "background-image: url('"+foto+"'); background-size: cover;"
}

function tradueix(){
    document.getElementsByTagName("body")[0]
    body.style = ""
}

function afegirInfo(){
    let llista = document.getElementById("expL");
    let element = document.createElement("li");
    element.innerHTML = prompt("QUE VOLS AFEGIR")
    llista.appendChild(element)
}
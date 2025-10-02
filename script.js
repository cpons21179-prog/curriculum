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
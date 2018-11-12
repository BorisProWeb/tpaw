function validation() {
    document.getElementById("resultat").innerHTML = "";
    document.getElementById("error").innerHTML = "";
    
    if(validationItem("firstname") && validationItem("name") && validationItem("date")){
        document.getElementById("resultat").innerHTML = "Bonjour " + document.getElementById("name").value + " " + document.getElementById("firstname").value;
        document.getElementById("error").innerHTML = "";
    }
    if(document.getElementById("adresse").value.length < 5)
    {
        document.getElementById("error").innerHTML = "Le champs  " + document.querySelector('label[for="adresse"]') + "doit contenir au moins 5 caractères";
        document.getElementById("resultat").innerHTML = "";
    }else if(document.getElementById("adresse").value.length > 50){
        document.getElementById("error").innerHTML = "Le champs  " + document.querySelector('label[for="adresse"]') + "doit contenir au plus 50 caractères";
        document.getElementById("resultat").innerHTML = "";
    }
    if(document.getElementById("mail").value.length < 5)
    {
        document.getElementById("error").innerHTML = "Le champs  " + document.querySelector('label[for="mail"]') + "doit contenir au moins 5 caractères";
        document.getElementById("resultat").innerHTML = "";
    }else if(document.getElementById("mail").value.length > 30){
        document.getElementById("error").innerHTML = "Le champs  " + document.querySelector('label[for="mail"]') + "doit contenir au plus 30 caractères";
        document.getElementById("resultat").innerHTML = "";
    }
   /* if (document.getElementById("firstname").value.length < 5)
    
        document.getElementById("error").innerHTML = "Le champs 'Nom' doit contenir au moins 5 caractères";
    else if(document.getElementById("name").value.length < 5){
        document.getElementById("error").innerHTML = "Le champs 'Prénom' doit contenir au moins 5 caractères";
        document.getElementById("resultat").innerHTML=""
    }
    else if(document.getElementById("date").value.length < 5){
        document.getElementById("error").innerHTML = "Le champs doit 'Date de naissance' contenir au moins 5 caractères";
        document.getElementById("resultat").innerHTML=""
    }else if(document.getElementById("adresse").value.length < 5){
        document.getElementById("error").innerHTML = "Le champs 'Adresse' doit contenir au moins 5 caractères";
        document.getElementById("resultat").innerHTML="";
    }else if(document.getElementById("mail").value.length < 5){
        document.getElementById("error").innerHTML = "Le champs 'Mail' doit contenir au moins 5 caractères";
        document.getElementById("resultat").innerHTML="";
    }
    else {
     document.getElementById("resultat").innerHTML = "Bonjour " + document.getElementById("name").value + " " + document.getElementById("firstname").value;
     document.getElementById("error").innerHTML = "";
    }*/
}

function validationItem(_id){
    if(document.getElementById(_id).value.length < 5){

        document.getElementById("error").innerHTML = "Le champs '"+document.querySelector('label[for="'+_id+'"]').textContent +"' doit contenir au moins 5 caractères <br/>";
        return false;
    }
    else if(document.getElementById(_id).value.length > 20){

        document.getElementById("error").innerHTML = "Le champs '"+document.querySelector('label[for="'+_id+'"]').textContent +"' doit contenir au plus 20 caractères <br/>";
        return false;
    }
    return true;
}
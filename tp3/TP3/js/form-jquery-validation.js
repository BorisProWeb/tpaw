$(document).ready(function () {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log("DOM ready!");
    $('[type="submit"]').on("click", function (event) {
        event.preventDefault();
        console.log("click");
        $(".modal-title").text("");
        $(".modal-body").text("");
        $(".modal-body").html("");

        if ($("#nom").val().length > 3 && $("#prenom").val().length > 3 && $("#date").val().length > 3 && $("#adresse").val().length > 3 && $("#email").val().length > 3) {


            $(".modal-title").text("Bienvenue " + $("#prenom").val() +" "+ $("#nom").val());
            $(".modal-body").html("Vous etes né le " + $("#date").val()) + "<br>"; 
            $(".modal-body").append('<img src="https://maps.googleapis.com/maps/api/staticmap?markers=' + $("#adresse").val() + '&zoom=15&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/><br>');
            $(".modal-body").append('<a href="http://maps.google.com/maps?q=' + $("#adresse").val() +'" ' + 'alt="Le lien vers Google Maps">' + $("#adresse").val() +'</a>');
            $('#myModal').modal("show");
        }
        else {
            $(".modal-title").text("Il y a une erreur de saisie");
            $(".modal-body").text("Veuillez saisir tous les champs du formulaire et respecter la regle : AU moins 7 caratères pour l'adresse");
            $('#myModal').modal("show");
        }
    });
});
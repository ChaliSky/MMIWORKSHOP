$(document).ready(function(){

    // Redimenssionnement texte

    // Menu hamburger format mobile

    var toggle = document.querySelector(".nav-toggle");
    var menu = document.querySelector(".nav_principale");
    //La fonction permettent de basculer l'affichage en ajoutant/supprimant des classes
    function doToggle(){
      menu.classList.toggle("open");
      toggle.classList.toggle("active");
    }
    toggle.addEventListener('click', doToggle);

    // Carousel Card Info
    $("section.ws-right .ws-info").hover(function(){
        $(this).toggleClass("active");
    });

    // Animation bouton en savoir plus
    $("section.ws-right .ws-info").hover(function(){
        $("section.ws-right .ws-info > a").toggleClass("active");
    });


    // Nav soulignement orange

    $("header > #header_nav ul li a").hover(function(){
      $(this).children().toggleClass("active");
    })
});

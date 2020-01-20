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

    // Nav soulignement orange

    $("header > #header_nav ul li a").hover(function(){
      $(this).children().toggleClass("active");
    });


    // Range Slider 
    var rangeSlider = document.getElementById("form_nbpers");
    var rangeBullet = document.getElementById("form_bulle");

    rangeBullet.innerHTML = "Nombre de personnes : " + rangeSlider.value;

    rangeSlider.addEventListener("input", showSliderValue, false);

    function showSliderValue() {
      rangeBullet.innerHTML = "Nombre de personnes : " + rangeSlider.value;
    }
});

$(document).ready(function(){

    // Menu

    var toggle = document.querySelector(".nav-toggle");

    toggle.innerHTML = '<i class="fas fa-bars"></i>';
    function doToggle() {
        $("#header_nav").toggleClass("open");
        $(".nav-toggle").toggleClass("active");
        $("#header_nav a.logo").toggleClass("active");
    }

    $('.nav-toggle').click(doToggle);
    
    // Carousel Card Info

    $("section.ws-right .ws-info").hover(function(){
        $(this).toggleClass("active");
    });

});
$(document).ready(function(){

    // Menu

    var toggle = document.querySelector(".nav-toggle");
    var menu = document.querySelector("#header_nav");
    var icon = document.querySelector("#header_nav a.logo");

    toggle.innerHTML = '<i class="fas fa-bars"></i>';
    function doToggle() {
        menu.classList.toggle("open");
        toggle.classList.toggle("active");
        icon.classList.toggle("active");
    }

    $('.nav-toggle').click(doToggle);


});
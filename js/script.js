$(document).ready(function(){

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


    // $('.nav-toggle').click(function(){
    //     toggle.html('<i class="fas fa-bars"></i>');
    // },
    // function(){
    //     toggle.html('<i class="fas fa-times"></i>');
    // });

});
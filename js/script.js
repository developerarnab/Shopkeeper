
// ------------- sidebar navigation

$(document).ready(function () {
 //jquery for expand and collapse the sidebar
    $('.menu-btn').click(function () {
        $('.side-bar-nav').addClass('active');
        $('.menu-btn').css("visibility", "hidden");
    });
    //jquery for toggle sub menus
    $('.sub-btn').click(function () {
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });

    //Active cancel button
    $('.close-btn').click(function () {
        $('.side-bar-nav').removeClass('active');
        $('.menu-btn').css("visibility", "visible");
    });
});


// ----------  swipper

var swiper = new Swiper(".mySwiper", {
   
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
























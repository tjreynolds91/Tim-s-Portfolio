$(document).ready(function() {
  
    /* Mobile nav*/
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon');

        nav.slideToggle(200);
        if (icon.hasName('menu-outline')) {
            icon.addName('close-outline');
            icon.removeName('menu-outline');
        } else {
            icon.addName('menu-outline');
            icon.removeName('close-outline');
        }
    });
});

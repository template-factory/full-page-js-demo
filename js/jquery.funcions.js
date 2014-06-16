$(window).load(function(){
    $(document).ready(function () {
        /* demo bar */
        $('.demo-bar').delay(1000).slideToggle('slow');
    });
});

$(document).ready(function() {

    /* Notice window close action */
    $("#close-info-window").click(function () {
        $('.demo-bar').slideToggle('slow');
        return false;
    });

    /* Full-page initialization */
    $('#fullpage').fullpage({
        'slidesColor': ['#FFF', '#fff', '#fff', '#fff'],
        'verticalCentered': true,/* center the screen*/
        navigation: true,
        navigationPosition: 'right',
        easing: 'easeOutSine',
        scrollingSpeed: 750
    });

});
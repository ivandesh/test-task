$(function() {
    $('.menu-toggle').click(function(e){
        e.preventDefault()
        $('.menu-overlay').fadeIn(300)
    })
    $('.menu-close').click(function(e){
        e.preventDefault()
        $('.menu-overlay').fadeOut(300)
    })
    $('.menu-overlay').click(function(){
        $('.menu-overlay').fadeOut(300)
    })

    var $root = $('html, body');

    $('a[href^="#"]').click(function () {
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 50
        }, 2000);

        return false;
    });
    $('a[href^="/"]').click(function (e) {
        e.preventDefault()
    });
    wow = new WOW(
        {
            boxClass:     'wow',
            animateClass: 'animated',
            offset:       150,
            mobile:       false,
            live:         true
        }
    )
    wow.init();
});

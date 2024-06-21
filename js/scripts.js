console.log ("Hi! Welcome to my Portfolio Site");

$(document).ready(function() {
    // Toggle mobile menu
    $('.menu-icon').click(function() {
        $('.nav-list').toggleClass('open');
    });

    // Smooth scrolling
    $('.nav-item a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});
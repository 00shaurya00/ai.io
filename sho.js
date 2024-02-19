$(document).ready(function () {
    $(window).scroll(function () {
        var offset = 200;

        $('.animate-on-scroll').each(function () {
            var elementPosition = $(this).offset().top;

            if ($(window).scrollTop() + $(window).height() > elementPosition + offset) {
                $(this).addClass('visible');
            }
        });
    });
});

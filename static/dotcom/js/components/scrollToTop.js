define(["jquery"], function (i) {
    return function () {
        var n = "scroll-to-top";
        i(window).scrollTop() >= 150 && (n += " is-visible"), i("body").append('<button class="' + n + '"><i class="fas fa-angle-up"</button>');
        var o = i(".scroll-to-top");
        o.on("webkitTransitionEnd mozTransitionEnd MSTransitionEnd otransitionend transitionend", function () {
            o.hasClass("is-visible") || o.hide()
        }), i(window).scroll(function (n) {
            i(this).scrollTop() > 150 ? o.hasClass("is-visible") || o.show(function () {
                o.addClass("is-visible")
            }) : o.removeClass("is-visible")
        }), o.on("click", function (n) {
            n.preventDefault(), i("body,html").animate({scrollTop: 0}, 200)
        })
    }
});
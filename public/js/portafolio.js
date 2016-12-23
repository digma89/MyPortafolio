function test() {
    var a, b, c, d;
    a = $("#inputName").val(), b = $("#inputEmail").val(), c = $("#inputSubject").val(), d = $("#inputMessage").val(), $("#message").text("Sending E-mail...Please wait"), $.post("/", { inputName: a, inputEmail: b, inputSubject: c, inputMessage: d }, function(a) { "sent" == a ? ($("#successButton").remove(), $("#respuestaAEnvio").addClass("alert alert-success"), $("#respuestaAEnvio").append("El mensaje fue enviado exitosamente, gracias.")) : ($("#successButton").remove(), $("#respuestaAEnvio").addClass("alert alert-danger"), $("#respuestaAEnvio").append("Se produjo un error, por favor inténtelo más tarde.")) })
}! function(a) {
    "use strict";
    a("a.page-scroll").bind("click", function(b) {
        var c = a(this);
        a("html, body").stop().animate({ scrollTop: a(c.attr("href")).offset().top - 50 }, 1250, "easeInOutExpo"), b.preventDefault()
    }), a("body").scrollspy({ target: ".navbar-fixed-top", offset: 51 }), a(".navbar-collapse ul li a").click(function() { a(".navbar-toggle:visible").click() }), a("#mainNav").affix({ offset: { top: 100 } })
}(jQuery);
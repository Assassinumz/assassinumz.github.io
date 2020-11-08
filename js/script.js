$(".nav-link").mouseenter(function() {
    $(this).prev('.prefix').css('display', 'inline')
})
$(".nav-link").mouseleave(function() {
    $(this).prev('.prefix').css('display', 'none')
})

const menu = document.getElementById('menu-icon')
menu.addEventListener("click", function() {
    var mobile = document.getElementById('mobile-nav')
    
    if(!mobile.classList.contains('mobile-activate')) {
        mobile.classList.add('mobile-activate')
    }

    else {
        mobile.classList.remove('mobile-activate')
    }
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;

if (document.getElementById('mobile-nav').classList.contains('mobile-activate')) {
    return
}

else if (prevScrollpos > currentScrollPos) {
    $("#navbar").css("top", "0")
} else {
    $("#navbar").css("top", "-70px")
}
prevScrollpos = currentScrollPos;
}

$(window).on('load', function() {
    $('.loader').delay(500).fadeOut()
    $('body').css('overflow', 'visible')
})

ScrollReveal({reset: true, delay: 150})
ScrollReveal().reveal('#Whoami')
ScrollReveal().reveal('#Skills')
ScrollReveal().reveal('#Projects')

var app = document.getElementById('IAM');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString("I'm Assassin umz.")
    .pauseFor(2500)
    .deleteAll()
    .typeString("I'm a 1337.")
    .pauseFor(2500)
    .deleteAll()
    .typeString("I'm a Developer.")
    .pauseFor(2500)
    .deleteAll()
    .typeString("I'm a Gamer.")
    .pauseFor(2500)
    .start();
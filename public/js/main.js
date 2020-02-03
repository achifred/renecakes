$(document).ready(function() {
    $(".sidenav").sidenav();
    $(".modal").modal();
    $(".carousel").carousel({
        indicators: true,
        numVisible: 3,
        shift: 10,
        duration: 200
    });
    /* $(".carousel")
        .carousel()
        .next();*/

    /*if (window.matchMedia("(max-width:700px)").matches) {
        $("#introcontainer ").addClass("s12");
        $("#introcontainer ").removeClass("s7");
    } else {
        $("#introcontainer ").removeClass("s7");
    }*/
    var textWrapper = document.querySelector(".orderbtn");
    /*textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='orderbtn'>$&</span>"
    );*/
    anime.timeline({ loop: true }).add({
        targets: ".orderbtn",
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 3250,
        delay: (el, i) => 150 * (i + 1)
    });

    anime
        .timeline({ loop: true })
        .add({
            targets: ".orderbtn",
            rotateY: [-90, 0],
            duration: 1300,
            delay: (el, i) => 45 * i
        })
        .add({
            targets: ".orderbtn",
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
});

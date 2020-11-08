var
    easer1 = "Circ.easeInOut",
    easer2 = "Quad.easeInOut",
    easer3 = "Circ.easeIn",
    easer4 = "Circ.easeOut",
    easer5 = "Quad.easeOut";

var splashtag = document.getElementById('splashtag');

// var $splashtag_anim = $("#splashtag");


setTimeout(() => {
    // var x = document.getElementById("splashtag");
    // x.style.display = "none";
    $("#splashtag").css("display", "block");
    splashtag_anim();
}, 6000);


function splashtag_anim() {
    var st_gs = new SplitText(splashtag, { type: "words,chars" }),
        st_chars = st_gs.chars,
        st_l = st_gs.chars.length;

    for (i = 0; i < st_l / 2; i++) {
        TweenMax.from(splashtag, 1.5, { autoAlpha: 1, ease: easer5 });
        TweenMax.from([st_chars[Math.floor(st_l / 2) + i], st_chars[Math.floor(st_l / 2) - i]], 1, { y: 100, opacity: 0, ease: Back.easeOut, delay: i * 0.2 });
    };
    $init_done = "true";
    // initlogoscale();
}
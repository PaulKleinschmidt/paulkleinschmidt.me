import anime from '/lib/anime.es.js';

anime({
    targets: 'div.box',
    rotate: {
        value: 1080,
        duration: 6000,
        easing: 'easeInOutSine'
    },
    loop: true,
    easing: 'easeInOutSine',
});

var tl = anime.timeline({
    targets: 'div.box',
    direction: 'alternate',
    loop: true,
    duration: 500,
    easing: 'easeInOutSine',
    update: function(anim) {
        controlsProgressEl.value = tl.progress;
    }
});

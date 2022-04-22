/* eslint-disable no-undef */

jQuery(document).ready(function ($) {
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: `onLeave`,
        }
    });

    new ScrollMagic.Scene({
        triggerElement: `#header`,
        duration: $(`#header`).height(), offset: -56
    })
        .setClassToggle(`#navbar`, `is-primary`)
        .setClassToggle(`#navbar`, `is-transparent`)
        // .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: `#header`,
        duration: $(`#header`).height(), offset: -56
    })
        .setClassToggle(`#navbar #navbarMyName`, `is-hidden`)
        // .addIndicators()
        .addTo(controller);

    // create tween
    var logol = $("#animate-logo-l");
    var logom = $("#animate-logo-m");
    var headerH = $(`#header`).height();
    var tweenl = new TimelineMax().to(logol, headerH, {
        transform: 'matrix(0.15, 0, 0, 0.15, -15, 240)', //matrix(echelleX, 0, 0, echelleY, deplacementX, deplacementY)
    })
    new ScrollMagic.Scene({ triggerElement: `#header`, duration: headerH })
        .setTween(tweenl)
        .addTo(controller);
    var tweenm = new TimelineMax().to(logom, headerH, {
        transform: 'matrix(0.15, 0, 0, 0.15, -5, 125)',
    })
    new ScrollMagic.Scene({ triggerElement: `#header`, duration: headerH })
        .setTween(tweenm)
        .addTo(controller);

    //////////////
    var tweene = new TimelineMax().to($("#animate-logo-e"), headerH, {
        transform: 'matrix(1, 0, 0, 1, 0, 350)',
        opacity: 0
    })
    new ScrollMagic.Scene({ triggerElement: `#header`, duration: headerH })
        .setTween(tweene)
        .addTo(controller);
    var tweeno = new TimelineMax().to($("#animate-logo-o"), headerH, {
        transform: 'matrix(1, 0, 0, 1, 0, 300)',
        opacity: 0
    })
    new ScrollMagic.Scene({ triggerElement: `#header`, duration: headerH })
        .setTween(tweeno)
        .addTo(controller);
    //////////////////
    var tweenee = new TimelineMax().to($("#animate-logo-ee"), headerH, {
        transform: 'matrix(1, 0, 0, 1, 0, 200)',
        opacity: 0
    })
    new ScrollMagic.Scene({ triggerElement: `#header`, duration: headerH })
        .setTween(tweenee)
        .addTo(controller);
    var tweeny = new TimelineMax().to($("#animate-logo-y"), headerH, {
        transform: 'matrix(1, 0, 0, 1, 0, 200)',
        opacity: 0
    })
    new ScrollMagic.Scene({ triggerElement: `#header`, duration: headerH })
        .setTween(tweeny)
        .addTo(controller);
    var tweenn = new TimelineMax().to($("#animate-logo-n"), headerH, {
        transform: 'matrix(1, 0, 0,1, 0, 225)',
        opacity: 0
    })
    new ScrollMagic.Scene({ triggerElement: `#header`, duration: headerH })
        .setTween(tweenn)
        .addTo(controller);
    var tweeni = new TimelineMax().to($("#animate-logo-i"), headerH, {
        transform: 'matrix(1, 0, 0, 1, 0, 175)',
        opacity: 0
    })
    new ScrollMagic.Scene({ triggerElement: `#header`, duration: headerH })
        .setTween(tweeni)
        .addTo(controller);
    var tweeneee = new TimelineMax().to($("#animate-logo-eee"), headerH, {
        transform: 'matrix(1, 0, 0, 1, 0, 250)',
        opacity: 0
    })
    new ScrollMagic.Scene({ triggerElement: `#header`, duration: headerH })
        .setTween(tweeneee)
        .addTo(controller);
    var tweenll = new TimelineMax().to($("#animate-logo-ll"), headerH, {
        transform: 'matrix(1, 0, 0, 1, 0, 275)',
        opacity: 0
    })
    new ScrollMagic.Scene({ triggerElement: `#header`, duration: headerH })
        .setTween(tweenll)
        .addTo(controller);


    // var letterOut = $(`#header`).find(".letterOut")
    // var timelineMaxForLetter = new TimelineMax;
    // letterOut.each(function () {
    //     var r = Math.round(10 * (Math.random() / 2 + .5)) / 10 * headerH;
    //     console.log(r)
    //     timelineMaxForLetter.to(this, headerH, {
    //         transform: 'matrix(0.15, 0, 0, 0.15, 0, 100)', //matrix(echelleX, 0, 0, echelleY, deplacementX, deplacementY)
    //         origin: 'top left',
    //     })
    // })
    // new ScrollMagic.Scene({
    //     triggerElement: `#header`,
    //     duration: headerH, offset: -56
    // }).setTween(timelineMax).setPin(letterOut[0]).addTo(controller);


    new ScrollMagic.Scene({
        triggerElement: `#timeline`,
        duration: $(`#timeline`).height(), offset: -56
    })
        .setClassToggle(`#timeline-anchor`, `is-active is-tab`)
        .setClassToggle(`#navbar`, `is-primary`)
        // .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: `#skills`,
        duration: $(`#skills`).height(), offset: -56
    })
        .setClassToggle(`#skills-anchor`, `is-active is-tab`)
        .setClassToggle(`#navbar`, `is-light`)
        // .addIndicators()
        .addTo(controller);

    var skills = $(`#skills`);
    var columnOne = skills.find(".column-one")
        , columnTwo = skills.find(".column-two")
        , columnTwoClone = columnOne.add(columnTwo)
        , timelineMax = new TimelineMax;
    columnTwoClone.each(function () {
        var itemLogos = $(this)
            , e = itemLogos.find(".item-logo")
            , itemLogosClone = e.length;
        e.each(function (itemLogos) {
            var e = itemLogosClone - itemLogos
                , n = Math.round(10 * (Math.random() / 2 + .5)) / 10 * e;
            timelineMax.to(this, 1, {
                className: "+=visible",
                ease: Power2.easeInOut
            }, n)
        })
    });
    new ScrollMagic.Scene({
        triggerElement: `#skills`,
        duration: $(`#skills`).height(), offset: -56
    }).setTween(timelineMax).setPin(skills[0]).addTo(controller);



    var durationTimeline = Number.parseInt($(`#timeline`).height());
    durationTimeline += -300;
    new ScrollMagic.Scene({
        triggerElement: "#timeline",
        duration: durationTimeline,
    })
        .setPin("#formation-experience")
        .addTo(controller);


    controller.scrollTo(function (target, options) {
        if (options.isSkills) {
            target = target + $(`#skills`).height()
        }
        TweenMax.to(window, 0.8, {
            scrollTo: {
                y: target,
                autoKill: true
            },
            ease: Cubic.easeInOut
        });
    });

    $(document).on(`click`, `a[href^=\\#]`, function (e) {
        var id = $(this).attr(`href`);
        if ($(id).length > 0) {
            e.preventDefault();
            controller.scrollTo(id, { isSkills: (id === '#skills') });
            if (window.history && window.history.pushState) {
                history.pushState(``, document.title, id);
            }
        }
    });

});

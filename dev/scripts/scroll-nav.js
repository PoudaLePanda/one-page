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

    var durationTimeline = Number.parseInt($(`#timeline`).height());
    durationTimeline += -300;
    new ScrollMagic.Scene({
        triggerElement: "#timeline",
        duration: durationTimeline,
    })
        .setPin("#formation-experience")
        // .addIndicators({ name: "1 (duration: " + durationTimeline + ")" }) // add indicators (requires plugin)
        .addTo(controller);

    // // build tween
    // var tween = TweenMax.staggerFromTo(".item-logo", 2, { top: 700 }, { top: 0, ease: Back.easeOut }, 0.15);
    // // build scene
    // new ScrollMagic.Scene({ triggerElement: "#skills", duration: 300 })
    //     .setTween(tween)
    //     .addIndicators({ name: "staggering" }) // add indicators (requires plugin)
    //     .addTo(controller);
    var skills = $(`#skills`);
    var columnOne = skills.find(".column-one")
        , columnTwo = skills.find(".column-two")
        , columnTwoClone = columnOne.add(columnTwo)
        // , I = skills.find(".header-wrapper")
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

    // new ScrollMagic.Scene({
    //     triggerElement: "#reveal-timeline-1",
    //     triggerHook: 0.9, // show, when scrolled 10% into view
    //     duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
    //     offset: 50 // move trigger to center of element
    // })
    //     .setClassToggle("#reveal-timeline-1", "visible") // add class to reveal
    //     .addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);



    controller.scrollTo(function (target) {
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
            controller.scrollTo(id);
            if (window.history && window.history.pushState) {
                history.pushState(``, document.title, id);
            }
        }
    });

});

/* eslint-disable no-undef */

jQuery(document).ready(function ($) {
    // init controller
    var controller = new ScrollMagic.Controller();
    //fade
    $(`.fade`).each(function () {
        $(this).addClass(`out`);
        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.75
        })
            .on(`enter`, function (ev) { $(ev.target.triggerElement()).removeClass(`out`); })
            .on(`leave`, function (ev) { $(ev.target.triggerElement()).addClass(`out`); })
            .addTo(controller);
    });
    //enter-left
    $(`.enter-left`).each(function () {
        $(this).addClass(`out`);
        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.70
        })
            .on(`enter`, function (ev) { $(ev.target.triggerElement()).removeClass(`out`); })
            .on(`leave`, function (ev) { $(ev.target.triggerElement()).addClass(`out`); })
            .addTo(controller);
    });
    //enter-right
    $(`.enter-right`).each(function () {
        $(this).addClass(`out`);
        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.70
        })
            .on(`enter`, function (ev) { $(ev.target.triggerElement()).removeClass(`out`); })
            .on(`leave`, function (ev) { $(ev.target.triggerElement()).addClass(`out`); })
            .addTo(controller);
    });
});


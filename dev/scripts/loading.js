/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
$(document).ready(function () {
    $(`.bcg`).imagesLoaded({
        background: true
    }).progress(function (instance, image) {
        loadProgress();
    });
    // number of loaded images for preloader progress
    var loadedCount = 0; //current number of images loaded
    var imagesToLoad = $(`.bcg`).length; //number of slides with .bcg container
    var loadingProgress = 0; //timeline progress - starts at 0
    function loadProgress(imgLoad, image) {
        //one more image has been loaded
        loadedCount++;
        loadingProgress = (loadedCount / imagesToLoad);
        //console.log(loadingProgress);
        // GSAP timeline for our progress bar
        TweenLite.to(progressTl, 0.7, {
            progress: loadingProgress,
            ease: Linear.easeNone
        });
    }
    //progress animation instance. the instance's time is irrelevant, can be anything but 0 to void  immediate render
    var progressTl = new TimelineMax({
        paused: true,
        onUpdate: progressUpdate,
        onComplete: loadComplete
    });
    progressTl
        .to($(`progress`), 1, {
            value: 100,
            ease: Linear.easeNone
        });
    //as the progress bar witdh updates and grows we put the precentage loaded in the screen
    function progressUpdate() {
        //the percentage loaded based on the tween's progress
        loadingProgress = Math.round(progressTl.progress() * 100);
        //we put the percentage in the screen
        $(`.percent`).text(loadingProgress + `%`);
    }
    function loadComplete() {
        // preloader out
        var preloaderOutTl = new TimelineMax();
        preloaderOutTl
            .set($(`progress`), {
                className: `+=animate__fadeOutDown`
            }, "+=0.2")
            .set($(`.percent`), {
                className: `+=animate__fadeOutDown`
            }, "+=0.2")
            .set($(`.loading`), {
                className: `+=animate__fadeOutDown`
            }, "+=0.2")
            .set($(`.preloader-article`), {
                className: `+=animate__fadeOutDown`
            }, "+=0.2")
            .set($(`#preloader`), {
                className: `+=animate__fadeOutDown`
            }, "+=0.2")
            .set($(`body`), {
                className: `-=is-loading`
            })
            .set($(`body`), {
                className: `+=is-loaded`
            })
            // .set($(`#header .desk-illustration`), {
            //     className: `+=animate__jackInTheBox`
            // }, "+=0.2")
            .set($(`#header .title`), {
                className: `+=animate__zoomIn`
            }, "+=0.2")
            .set($(`#header .subtitle`), {
                className: `+=animate__zoomIn`
            }, "+=0.2")
        // .to($(`progress`), 0.3, {
        //     y: 100,
        //     autoAlpha: 0,
        //     ease: Back.easeIn
        // })
        // .to($(`.percent`), 0.3, {
        //     y: 100,
        //     autoAlpha: 0,
        //     ease: Back.easeIn
        // }, 0.1)
        // .to($(`.loading`), 0.3, {
        //     y: 100,
        //     autoAlpha: 0,
        //     ease: Back.easeIn
        // }, 0.1) /// 0.5ms
        // .to($(`.preloader-article`), 0.5, {
        //     y: 100,
        //     autoAlpha: 0,
        //     ease: Back.easeIn
        // }, 0.5)
        // .set($(`body`), {
        //     className: `-=is-loading`
        // })
        // .set($(`body`), {
        //     className: `+=is-loaded`
        // })
        // .to($(`#preloader`), 0.3, {
        //     opacity: 0,
        //     ease: Power4.easeInOut
        // }, 0.5)
        // .set($(`#preloader`), {
        //     className: `+=is-hidden`
        // })
        // .from($(`#intro .title`), 1, {
        //     autoAlpha: 0,
        //     ease: Power1.easeOut
        // }, `-=0.2`)
        // .from($(`#intro .sub-title`), 0.7, {
        //     autoAlpha: 0,
        //     ease: Power1.easeOut
        // }, `+=0.2`)
        // .from($(`.scroll-hint`), 0.3, {
        //     y: -20,
        //     autoAlpha: 0,
        //     ease: Power1.easeOut
        // }, `+=0.1`);
        return preloaderOutTl;
    }
});

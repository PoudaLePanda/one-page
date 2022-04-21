/* eslint-disable no-undef */
var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: false,
    delay: 30,
});

typewriter
    .pauseFor(2000)
    .typeString('Hello world ! Je suis <strong><span style="color: #79f2e6;">Web Designer</span></strong>')
    .pauseFor(300)
    .deleteChars(12)
    .typeString('<strong><span style="color: #79f2e6;">Front-end Developer</span></strong>')
    .pauseFor(1000)
    .start();

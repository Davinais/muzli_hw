/* global document TweenMax TimelineMax Power2 */
document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    var tl = new TimelineMax({yoyo: true, repeat: -1, repeatDelay: 0.4});

    TweenMax.set("#redCirc", {transformOrigin: "35% 45%"});
    TweenMax.set("#blueCirc", {transformOrigin: "65% 55%"});
    tl.addLabel("rectScale")
        .to(".rect01", 0.4, {attr: { height: 50 }, ease: Power2.easeIn}, "rectScale")
        .to(".rect02a", 0.4, {attr: { height: 0 }, ease: Power2.easeIn}, "rectScale")
        .to(".rect03a", 0.4, {attr: { height: 0 }, ease: Power2.easeIn}, "rectScale")
        .to(".rect04a", 0.4, {attr: { height: 0 }, ease: Power2.easeIn}, "rectScale")
        .to(".rect05a", 0.4, {attr: { height: 0 }, ease: Power2.easeIn}, "rectScale")
        .to(".rect02b", 0.4, {attr: { y: 45, height: 35 }, ease: Power2.easeIn}, "rectScale")
        .to(".rect03b", 0.4, {attr: { y: 30, height: 40 }, ease: Power2.easeIn}, "rectScale")
        .to(".rect04b", 0.4, {attr: { y: 55, height: 33 }, ease: Power2.easeIn}, "rectScale")
        .to(".rect05b", 0.4, {attr: { y: 35, height: 40 }, ease: Power2.easeIn}, "rectScale")
        .to(".rect06", 0.4, {attr: { height: 60 }, ease: Power2.easeIn}, "rectScale")
        .to(".rect07", 0.4, {attr: { height: 70 }, ease: Power2.easeIn}, "rectScale")
        .to(".rect08", 0.4, {attr: { height: 40 }, ease: Power2.easeIn}, "rectScale")
        .to(".rect09", 0.4, {attr: { height: 25 }, ease: Power2.easeIn}, "rectScale")
        .to(".rect10", 0.4, {attr: { height: 45 }, ease: Power2.easeIn}, "rectScale")
        .to(".rect11", 0.4, {attr: { height: 30 }, ease: Power2.easeIn}, "rectScale")
        .to(".rect12", 0.4, {attr: { height: 80 }, ease: Power2.easeIn}, "rectScale")
        .to(".rect13", 0.4, {attr: { height: 75 }, ease: Power2.easeIn}, "rectScale")
        .to(".rect14", 0.4, {attr: { height: 65 }, ease: Power2.easeIn}, "rectScale")
        .addLabel("rectOut")
        .to(".rect01", 0.4, {attr: { height: 0 }, ease: Power2.easeOut}, "rectOut")
        .to(".rect02b", 0.4, {attr: { y: -35 }, ease: Power2.easeOut}, "rectOut")
        .to(".rect03b", 0.4, {attr: { y: -40 }, ease: Power2.easeOut}, "rectOut")
        .to(".rect04b", 0.4, {attr: { y: -33, height: 43 }, ease: Power2.easeOut}, "rectOut")
        .to(".rect05b", 0.4, {attr: { y: -40 }, ease: Power2.easeOut}, "rectOut")
        .to(".rect06", 0.4, {attr: { height: 0 }, ease: Power2.easeOut}, "rectOut")
        .to(".rect07", 0.4, {attr: { height: 0 }, ease: Power2.easeOut}, "rectOut")
        .to(".rect08", 0.4, {attr: { height: 0 }, ease: Power2.easeOut}, "rectOut")
        .to(".rect09", 0.4, {attr: { height: 0 }, ease: Power2.easeOut}, "rectOut")
        .to(".rect10", 0.4, {attr: { height: 0 }, ease: Power2.easeOut}, "rectOut")
        .to(".rect11", 0.4, {attr: { height: 0 }, ease: Power2.easeOut}, "rectOut")
        .to(".rect12", 0.4, {attr: { height: 0 }, ease: Power2.easeOut}, "rectOut")
        .to(".rect13", 0.4, {attr: { height: 0 }, ease: Power2.easeOut}, "rectOut")
        .to(".rect14", 0.4, {attr: { height: 0 }, ease: Power2.easeOut}, "rectOut")
        .to("#redCirc", 0.4, {css: { rotation: 240 }}, "rectOut")
        .to("#blueCirc", 0.4, {css: { rotation: 240 }}, "rectOut");
});

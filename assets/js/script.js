const ani7 = gsap.timeline();
ani7.from(".intro1 .intro-textbox .t1", {autoAlpha:0, duration:1, y: 50}, "+=1")
.from(".intro1 .intro-textbox .t2", {autoAlpha:0, duration:1, y: 50}, "+=1")
.from(".intro1 .intro-textbox .t3", {autoAlpha:0, duration:1, y: 50}, "+=1")
.from(".intro1 .intro-textbox .t4", {autoAlpha:0, duration:1, y: 50}, "+=1")
    
ScrollTrigger.create({
    animation: ani7,
    trigger: ".intro1 .intro-textbox",
    start:"top top",
    end: "+=6000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: true,
}); 




const ani5 = gsap.timeline();
ani5.to(".showcase .img1 .txt1", {xPercent: 300},"text")
    .to(".showcase .img1 .txt2", {xPercent: 0},"text")
    .to(".showcase .img1 .txt3", {xPercent: -300},"text")

ScrollTrigger.create({
    animation: ani5,
    trigger: ".img1",
    start:"top top",
    end: "+=2000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: true,
}); 
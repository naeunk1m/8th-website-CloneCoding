const ani7 = gsap.timeline();
ani7.fromTo(".intro-textbox .t1", {autoAlpha:0}, {autoAlpha:1, duration:1 })
ani7.fromTo(".intro-textbox .t2", {autoAlpha:0}, {autoAlpha:1, duration:1 })
ani7.fromTo(".intro-textbox .t3", {autoAlpha:0}, {autoAlpha:1, duration:1 })
ani7.fromTo(".intro-textbox .t4", {autoAlpha:0}, {autoAlpha:1, duration:1 })

    
ScrollTrigger.create({
    animation: ani7,
    trigger: ".intro-textbox",
    start:"top top",
    end: "+=3000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: true,
    id:"text-trigger",
}); 




// 이미지 슬라이드
const panel = document.querySelector(".bg-area.slide")

gsap.utils.toArray(".bg-area.slide").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
        
    })
})

// 텍스트 애니메이션

    const ani5 = gsap.timeline();
    ani5.to(".sc-showcase .t1", { xPercent: 300 }, "text")
        .to(".sc-showcase .t2", { xPercent: -300 }, "text")
        .to(".sc-showcase .t3", { xPercent: 300 }, "text")

    ScrollTrigger.create({
        animation: ani5,
        trigger: ".bg-area",
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        // markers: true,
    }); 

// 텍스트 애니메이션
// 이미지 슬라이드

gsap.to('.sc-showcase2 .bg',{
    scrollTrigger:{
        trigger:'.sc-showcase2',
        start:"50% 50%",
        end:"50% 50%",
        markers:true,
        scrub:0,
    },
    width:0,
})


// sc-possibility

const horizontal = document.querySelector("#horizontal");
const sections = gsap.utils.toArray("#horizontal .scroll");

gsap.to( sections, {
    xPercent: -100,
    ease: "none",
    scrollTrigger: {
        trigger: horizontal,
        start: "top top",
        end: () =>  "+=" + (horizontal.offsetWidth - innerWidth),
        pin: true,
        scrub: 1,
        snap: {
            snapTo: 1 / (sections.length - 1),
            inertia: false,
            duration: {min: 0.1, max: 0.1}
        },
        invalidateOnRefresh: true,
        anticipatePin: 1
    }
});

// sc-possibility


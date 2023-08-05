
var allText = document.querySelectorAll('.text'); 
window.addEventListener('scroll', function(){
    var dis = window.pageYOffset / ((document.querySelector('.intro1').offsetHeight - this.window.innerHeight) / 4);
    var gap = 1; 
    allText.forEach(function(arr, index) {
        arr.style = '--progress:' + (Math.max(0, dis - (index * gap))) + '';
    })
})


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
    ani5.to(".sc-showcase .t1", { xPercent: 600 }, "text")
        .to(".sc-showcase .t2", { xPercent: 0 }, "text")
        .to(".sc-showcase .t3", { xPercent: -600 }, "text")

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

// sc-showcase2

gsap.to(".showcase2-text1.t1", {
    x: -300, 
    duration:1, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".sc-showcase2",
        start: "top top",
        end: "bottom",
        scrub: true,
        // markers: true,
        id: "textani"

    }
})

gsap.to(".showcase2-text1.t3", {
    x: 300, 
    duration:1, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".sc-showcase2",
        start: "top top",
        end: "bottom",
        scrub: true,
        // markers: true,
        id: "textani",
        debug: true,
    }
})

gsap.to(".right", {
    width: 300,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".sc-showcase2",
        start: "top 50%",
        end: "bottom ",
        scrub: true,
        // markers: true,
    }
});

gsap.to(".left", {
    width: 300,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".sc-showcase2",
        start: "top 50%",
        end: "bottom ",
        scrub: true,
        // markers: true,
    }
});

// sc-showcase2

// sc-possibility


gsap.to('.group-poss',{
    scrollTrigger:{
        trigger:"#horizontal",
        start:"0% 0%",
        end:"100% 100%",
        markers: true,
        id: "name",
        scrub: true,
        pin: true,
        invalidateOnRefresh: true
    },
    xPercent:-100,
    x:function(){
        return window.innerWidth;
    }
})



// sc-possibility


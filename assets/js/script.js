// header

ScrollTrigger.create({
    trigger:'body',
    start:"1000px 0%",
    end:"100% 100%",
    markers:false,
    onEnter:function(){
        $('.header').addClass('fixed')
    },
    onLeaveBack:function(){
        $('.header').removeClass('fixed')
    }
})

// header

// intro

const intro = gsap.timeline();
intro
    .addLabel('a')
    .to(".sc-intro .text-bg", {backgroundColor:"rgba(0,0,0,0.6)", duration: 100},'a')
    .from(".sc-intro .txt1", {autoAlpha: 0, duration: 100},'a')
    .to(".sc-intro .txt1", {autoAlpha: 0, duration: 100},"+=1")
    .from(".sc-intro .txt2", {autoAlpha: 0, duration: 100}, "+=1")
    .to(".sc-intro .txt2", {autoAlpha: 0, duration: 100},"+=1")
    .from(".sc-intro .txt3", {autoAlpha: 0, duration: 100}, "+=1")
    .to(".sc-intro .txt3", {autoAlpha: 0, duration: 100},"+=1")
    .from(".sc-intro .txt4", {autoAlpha: 0, duration: 100}, "+=1")
     
ScrollTrigger.create({
    animation: intro,
    trigger: ".sc-intro",
    start: "top top",
    end: "+=7000",
    scrub: true,
    pin: true,
    markers: false,
    toggleClass:{
        targets:"#topBtn", className:"hide"
    }
});

// intro

// showcase
const showcase = gsap.timeline();
showcase
    .addLabel('a')
    .fromTo(".sc-showcase .group-text .text-bg", {backgroundColor:"rgba(0,0,0,0.0)"}, {backgroundColor:"rgba(0,0,0,0.6)",duration:20},"a")
    .from(".sc-showcase .group-text", {autoAlpha:0,duration:20},"a")
    

    .addLabel('b')
    .to(".sc-showcase .group-text .text-bg", {backgroundColor:"rgba(0,0,0,0.0)",duration:20},"b")
    .to(".sc-showcase .txt1", {xPercent:100,duration:20},'b')
    .to(".sc-showcase .txt3", {xPercent:-100,duration:20},'b')
    
    .addLabel('c')
    .to(".sc-showcase .txt1", {autoAlpha:0,duration:20},'c')
    .to(".sc-showcase .txt2", { autoAlpha:0,duration:20},'c')
    .to(".sc-showcase .txt3", {autoAlpha:0,duration:20},'c')

    .to(".sc-showcase .img-box:nth-child(3)",{height:0,duration:20})
    
    .to(".sc-showcase .img-box:nth-child(2)",{height:0,duration:20})
    .to(".sc-showcase .desc .text-bg",{backgroundColor:"rgba(0,0,0,0.4)", duration:20},)
    .from(".sc-showcase .desc",{autoAlpha:0,duration:20})

ScrollTrigger.create({
    animation:showcase,
    trigger:".sc-showcase",
    start: "top top",
    end: "+=9000",
    pin:true,
    scrub: true,
    markers: false,
})

// showcase

// anyone

const Anyone = gsap.timeline();
Anyone
    .addLabel("a")
    .from(".sc-anyone .right",1,{xPercent:100, duration:1},"a")
    .from(".sc-anyone .left",{xPercent:-100, duration:1},"a")
    .to(".sc-anyone .t1",{xPercent:-165, duration:1},"a")
    .to(".sc-anyone .t3",{xPercent:130, duration:1},"a")

ScrollTrigger.create({
    animation:Anyone,
    trigger:".sc-anyone",
    start: "-10% 52%",
    end: "45% 52%",
    markers:false,
    scrub:true,
})

// anyone


// talent
ScrollTrigger.create({
    trigger:".sc-talent",
    start: "top top",
    end: "100% 100%",
    pin:".title-area",
    markers:false,
    scrub:true,
})

// talent

// sc-possibility

ScrollTrigger.create({
    trigger:".sc-possibility",
    start: "-15% 55%",
    end:"45% 55%",
    markers: false,
    onEnter:function(){
        $('body').addClass('dark')
    },
    onLeaveBack:function(){
        $('body').removeClass('dark')
    }
})

const possibility = gsap.timeline();
let horiWidth1 = $('.hor-area01').width();
possibility
    .addLabel("a")
    .to('.sc-possibility .group-horizontal',{x:-horiWidth1},"a")
ScrollTrigger.create({
    animation:possibility,
    trigger:".sc-possibility",
    start: "top top",
    end:"+=3000",
    pin:true,
    markers:false,
    scrub:true,
})

// sc-possibility

// sc-banner1

const banner1 = gsap.timeline();
banner1
    .addLabel("a") 
    .from('.sc-banner1 .bnr-left',{x:-200, duration:1},"a")
    .from('.sc-banner1 .bnr-right',{x:200, duration:1},"a")
    .addLabel("b")
    .from(".sc-banner1 .text-area",{autoAlpha:0,duration:1,delay:1},"b")

ScrollTrigger.create({
    animation:banner1,
    trigger:".sc-banner1",
    start:"-10% 85%",
    end: "320% 85%",
    markers:false,
    scrub:true,
})

// sc-banner1

// safety
let cardWidth = $('.card-list').width();

const safety = gsap.timeline();
safety
    .addLabel("a")
    .to(".sc-safety .group-hori",{x:-515,duration:3},"a")
    
    .addLabel("b")
    .to(".sc-safety .group-hori .card-list",{x:-cardWidth+400,duration:3},"b")
    .to(".sc-safety .group-hori .card-item:nth-child(3)",{x:440,duration:3},"b")
    .to(".sc-safety .group-hori .card-item:nth-child(2)",{x:880,duration:3},"b")
    .to(".sc-safety .group-hori .card-item:nth-child(1)",{x:1320,duration:3},"b")
    .to(".sc-safety .ic-unlock",{autoAlpha:0,duration:1},"b")
    .from(".sc-safety .ic-lock",{autoAlpha:0,delay:1,duration:1},"b")
    .to(".sc-safety .group-hori .card-item",{autoAlpha:0,duration:1})
    .to(".sc-safety .ic-lock",{autoAlpha:0,duration:1})
    .from(".sc-safety .card-text",{autoAlpha:0})

    .addLabel("c")
    .from(".sc-safety .group-scroll",{autoAlpha:0},"c")
    .from(".sc-safety .group-scroll",{yPercent:100,y:"-200",duration:8,ease: "none"},"c")
    .from(".sc-safety .group-scroll .card-lock",{autoAlpha:0})
    .addLabel("d")
    .to(".sc-safety .group-scroll .card-item:nth-child(2)",{x:-440,duration:3},"d")
    .to(".sc-safety .group-scroll .card-item:nth-child(3)",{x:-880,duration:3},"d")
    .to(".sc-safety .group-scroll .card-item:nth-child(4)",{x:-1320,duration:3},"d")
    .addLabel("e")
    .from(".sc-safety .group-scroll .card-lock .light",{autoAlpha:0,duration:3},"e")
    .from(".sc-safety .group-scroll .end-text-box",{autoAlpha:0,duration:3},"e")

    
ScrollTrigger.create({
    animation:safety,
    trigger:".sc-safety",
    start:"top top",
    end: "+=9000",
    markers:false,
    scrub:true,
    pin:true,
    onEnter:function(){
        $('.sc-safety .group-hori .middle-area').addClass("fade");
    }
})

ScrollTrigger.create({
    trigger:".sc-safety .group-scroll ",
    start: `180% top`,
    end:"200% bottom",
    markers: false,
    onEnter:function(){
        $('.sc-safety .bg').addClass('blur')
        $('.sc-safety .group-scroll .middle-area').fadeIn();
    },
})

// safety

// change
ScrollTrigger.create({
    trigger:".sc-change",
    start: "-15% 55%",
    end:"45% 55%",
    markers: false,
    onEnter:function(){
        $('body').removeClass('dark')
    },
    onLeaveBack:function(){
        $('body').addClass('dark')
    }
})

// change

// takeoff
const takeoff = gsap.timeline();
takeoff
    .addLabel("a")
    .from(".sc-takeoff .right",1,{xPercent:100, duration:1},"a")
    .from(".sc-takeoff .left",{xPercent:-100, duration:1},"a")
    .to(".sc-takeoff .t1",{xPercent:-115, duration:1},"a")
    .to(".sc-takeoff .t3",{xPercent:120, duration:1},"a")

ScrollTrigger.create({
    animation:takeoff,
    trigger:".sc-takeoff",
    start: "-10% 52%",
    end: "45% 52%",
    markers:false,
    scrub:true,
})

// takeoff

//economy
const economy = gsap.timeline();

economy
    .addLabel("a")
    .to(".sc-economy .group-hori",{xPercent:-100,x:"100vw",duration:4},"a")
    .from(".sc-economy .group-arrow",{autoAlpha:0,duration:1},"a")
    .from(".sc-economy .group-arrow .fade",{autoAlpha:0,delay:1,duration:1},"a")

ScrollTrigger.create({
    animation:economy,
    trigger:".sc-economy",
    start:"top top",
    end:"+=1500",
    pin:true,
    markers:false,
    scrub:true,
    onEnter:function(){
        $('.sc-economy .bg').addClass('blur')
    },
    onLeave:function(){
        $(".sc-economy .group-arrow").fadeOut();
    },
    onEnterBack:function(){
        $(".sc-economy .group-arrow").fadeIn();
    },
})
//economy

//choi
const choi = gsap.timeline();

choi
    .from(".sc-choi .group-text",{autoAlpha:0,duration:5})
    .from(".sc-choi .group-icon",{autoAlpha:0,duration:1})
    .addLabel("a")
    .to(".sc-choi .group-text",{autoAlpha:0,duration:1},"a")
    .to(".sc-choi .group-icon",{autoAlpha:0,duration:1},"a")

ScrollTrigger.create({
    animation:choi,
    trigger:".sc-choi",
    start:"top top",
    end:"+=2000",
    pin:true,
    scrub:true,
})
//choi

//data
let dataWidth = $(window).width() 
                 - $(".sc-data .title-area").width() 
                 - $(".sc-data .card-list").width() 
                 - $(".sc-data .desc-area").width() 
                 - 500;
const data = gsap.timeline();
data
    .to(".sc-data .group-hori",{xPercent:-100,x:"100vw"})
    
ScrollTrigger.create({
    animation:data,
    trigger:".sc-data",
    start:"top top",
    end:"+=1500",
    pin:true,
    scrub:true,
    onEnter:function(){
        $('.sc-data .bg').addClass('blur');
        $('.sc-data .middle-area').fadeIn();

    },
})


ScrollTrigger.create({
    trigger: ".footer",
    start: "0% 100%",
    end: "110% 100%",
    scrub: true,
    markers: false,
    toggleClass:{
        targets:"#topBtn", className:"on2"
    },
    onEnter:function(){
        $('#topBtn a').addClass('fixed');
        $('.sc-banner02').addClass('on');
    },
    onLeaveBack:function(){
        $('#topBtn a').removeClass('fixed');
        $('.sc-banner02').removeClass('on');
    }
});

//data

// topBtn

let lastScroll = 0;

$(window).scroll(function(){

    let curr = $(this).scrollTop();

    if(curr < lastScroll){
        $('#topBtn').addClass('on');
    } else {
        $('#topBtn').removeClass('on');
    }
    lastScroll = curr;
})

$('#topBtn a').click(function(e){
    e.preventDefault();
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

// topBtn
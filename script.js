

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



























var tl = gsap.timeline()

tl.from("#loader .img1", {
    opacity: 0,
    duration: .2,
    display: "block"
});



tl.from("#loader .img2", {
    opacity: 0,
    duration: .2,
    display: "block"
})



tl.from("#loader .img3", {
    opacity: 0,
    duration: .2,
    display: "block"
})



tl.from("#loader .img4", {
    opacity: 0,
    duration: .2,
    display: "block"
})



tl.from("#loader .img5", {
    opacity: 0,
    duration: .2,
    display: "block"
})



tl.from("#loader .img6", {
    opacity: 0,
    duration: .2,
    display: "block"
})


tl.from("#loader .img7", {
    opacity: 0,
    duration: .2,
    display: "block"
})



tl.from("#loader .img8", {
    opacity: 0,
    duration: .2,
    display: "block"
})



tl.from("#loader .img9", {
    opacity: 0,
    duration: .2,
    display: "block"
})


tl.from("#loader .img10", {
    opacity: 0,
    duration: .2,
    display: "block"
})

tl.to("#loader", {
   y: "-100%",
   duration: 1,
   ease: "power2.in"
})

tl.to("#nav", {
   display: "flex",

 })

 tl.from("#page1 h1 span", {
    y: 500,
    opacity: 0,
    duration: 3,
    stagger: .2
})

tl.to(" #nav", {
    y: -100,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        // markers: true,
        start: "top 0%",
        end: "top -10%",
        scrub: true
    }
})


gsap.to("#page2 video",{
    width: "100%",
    // duration: 2,
    scrollTrigger:{
        trigger: "#page2",
        scroller: "#main",
        // markers: true,
        start:"top 100%",
        end:"top 0%",
        scrub:2,
    }
})

tl.from("#page3 h1", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 1,
    scrollTrigger:{
        trigger: "#page3",
        scroller: "#main",
        // markers: true,
        start:"top 60%",
        end:"top 10%",
        scrub: true
    }
})

var box1 = document.querySelector("#page4 #box1")
var box2 = document.querySelector("#page4 #box2")
var box3 = document.querySelector("#page4 #box3")
var box4 = document.querySelector("#page4 #box4")
var box5 = document.querySelector("#page4 #box5")

box1.addEventListener("mouseenter", function(){
    gsap.to("#page4 #box1, #page4 #box1 video",{
      scale: 1.1,
    })
})

box1.addEventListener("mouseleave", function(){
    gsap.to("#page4 #box1, #page4 #box1 video",{
        scale: 1, 
    })
})

box1.addEventListener("mousemove", function(dets){
    gsap.to("i",{
        top:dets.y,
        left:dets.x,
        display: "initial"
    })
})
box1.addEventListener("mouseleave", function(dets){
    gsap.to("i",{
        top:dets.y,
        left:dets.x,
        display: "none",
        duration:0
    })
})


box1.addEventListener("mouseenter", function(){
    gsap.to("#page4 #box1",{
       scale: .96
    
    })
})
box1.addEventListener("mouseleave", function(){
    gsap.to("#page4 #box1",{
        scale: 1
    })
})
///
box2.addEventListener("mouseenter", function(){
    gsap.to("#page4 #box2 img",{
      scale: 1.2,
    })
})

box2.addEventListener("mouseleave", function(){
    gsap.to("#page4 #box2 img",{
        scale: 1, 
    })
})
box2.addEventListener("mouseenter", function(){
    gsap.to("#page4 #box2",{
       scale: .95
    
    })
})
box2.addEventListener("mouseleave", function(){
    gsap.to("#page4 #box2",{
        scale: 1
    })
})
box2.addEventListener("mousemove", function(dets){
    gsap.to("i",{
        top:dets.y,
        left:dets.x,
        display: "initial"
    })
})
box2.addEventListener("mouseleave", function(dets){
    gsap.to("i",{
        top:dets.y,
        left:dets.x,
        display: "none"
    })
})

//////////////////

box3.addEventListener("mouseenter", function(){
    gsap.to("#page4 #box3 img",{
      scale: 1.2,
    })
})

box3.addEventListener("mouseleave", function(){
    gsap.to("#page4 #box3 img",{
        scale: 1, 
    })
})
box3.addEventListener("mouseenter", function(){
    gsap.to("#page4 #box3",{
       scale: .95
    
    })
})
box3.addEventListener("mouseleave", function(){
    gsap.to("#page4 #box3",{
        scale: 1
    })
})
box3.addEventListener("mousemove", function(dets){
    gsap.to("i",{
        top:dets.y,
        left:dets.x,
        display: "initial"
    })
})
box3.addEventListener("mouseleave", function(dets){
    gsap.to("i",{
        top:dets.y,
        left:dets.x,
        display: "none"
    })
})


/////////////


box4.addEventListener("mouseenter", function(){
    gsap.to("#page4 #box4 img",{
      scale: 1.2,
    })
})

box4.addEventListener("mouseleave", function(){
    gsap.to("#page4 #box4 img",{
        scale: 1, 
    })
})
box4.addEventListener("mouseenter", function(){
    gsap.to("#page4 #box4",{
       scale: .95
    
    })
})
box4.addEventListener("mouseleave", function(){
    gsap.to("#page4 #box4",{
        scale: 1
    })
})
box4.addEventListener("mousemove", function(dets){
    gsap.to("i",{
        top:dets.y,
        left:dets.x,
        display: "initial"
    })
})
box4.addEventListener("mouseleave", function(dets){
    gsap.to("i",{
        top:dets.y,
        left:dets.x,
        display: "none"
    })
})

/////


box5.addEventListener("mouseenter", function(){
    gsap.to("#page4 #box5 video",{
      scale: 1.2,
    })
})

box5.addEventListener("mouseleave", function(){
    gsap.to("#page4 #box5 video",{
        scale: 1, 
    })
})
box5.addEventListener("mouseenter", function(){
    gsap.to("#page4 #box5",{
       scale: .95
    
    })
})
box5.addEventListener("mouseleave", function(){
    gsap.to("#page4 #box5",{
        scale: 1
    })
})
box5.addEventListener("mousemove", function(dets){
    gsap.to("i",{
        top:dets.y,
        left:dets.x,
        display: "initial"
    })
})
box5.addEventListener("mouseleave", function(dets){
    gsap.to("i",{
        top:dets.y,
        left:dets.x,
        display: "none"
    })
})


////

gsap.to("#page5 h1, #page5 .img1, #page5 .img2, #page5 .img3, #page5 .img4",{
    transform: "translateX(-100%)",
    scrollTrigger:{
        trigger: "#page5",
        scroller: "#main",
        // markers: true,
        start:"top 0%",
        end:"top -100%",
        scrub:3,
        pin:true
    }
})

///

gsap.from("#page8 > h1", {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page8",
        scroller: "#main",
        // markers: true,
        top: "top 100%",
        end: "top 40%",
        scrub: 2
    }
})


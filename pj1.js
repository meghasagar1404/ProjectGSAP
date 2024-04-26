let tl= gsap.timeline()
tl.from("#nav h3",{
    y: -50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.3,
})


tl.from("#main h1",{
    x: -500,
    opacity: 0,
    duration: 0.8,
    staggger: 0.4,
})

tl.from("img",{
    x: 100,
    rotate: 45,
    opacity:0,
    duration:0.8,
    stagger: 0.5,
})

tl.from("#footer h3",{
    y: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.5
})


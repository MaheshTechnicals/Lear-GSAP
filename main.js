let tl = gsap.timeline()

tl.to("#box", {
  x: 330,
  duration: 2,
  delay: 1,
  rotate: 360,
  scale: 1,
  repeat: -1,
  yoyo: true,
  backgroundColor: "red",


})
// Add .reveal-wrapper to every parent section & .reveal to every animated element

const sections = document.querySelectorAll('.reveal-wrapper')
const length = sections.length

for(let i = 0; i < length; i ++) {
  const section = sections[i]
  const childs = section.querySelectorAll('.reveal')
  const tl = gsap.timeline({ paused: true })
  for(let i = 0; i < childs.length; i ++) {
    tl.from(childs[i], {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.3")
  }

  ScrollTrigger.create({  
    trigger: section,
    start: 'top center+=120',
    animation: tl,
  })
}

function loadedGSAP() {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin);

  /*animation de call to action*/

  var animation = gsap.to('.mouse', {
      duration: 0.5,
      repeat: '-1',
      scale: '1.2',
      yoyo: 'true'
    });

  /*animation ch1 */
  let timeLinetext = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre_1",
      scrub:true,
      start: "top top",
      end:"100% 0%",
      pin: true,
    }
  }
  )
  .fromTo(".elle",{
    opacity:0,
    
  },{
    opacity:1,
    duration:"5"
  })

  let timeLineParalaxe = gsap.timeline({
      scrollTrigger: {
        trigger: "#chapitre_1",
        scrub:true,
        start: "85% 65%",
        end:"100% 0%",
        pin: true,
      }
    }
  )
  .from(".branches.rouges", {
    y: "150%"
  })

  .from(".branches.brun", {
    y: "400%"
  },"<")

  .from(".branches.noir", {
    y: "900%"
  },"<")

  /* animation ch2*/



  let timeLineWalk1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre_2",
      scrub:true,
      start: "10% 10%",
      end:"800% 0%",
      pin: true,
    }
  }
  )
  .fromTo(".text-ch2",{
    opacity:0,
    
  },{
    opacity:1,
    duration:"3"
  })  

  .to('.walk1', {
    x: '100vw',
    delay:1,
    ease: 'none',
    duration:12
  },"-=4");



  /*animation ch3*/

  let timeLineMonstre = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre_3",
      start: "top top",
      end:"800% 0%",
      pin: true,
      toggleActions: 'restart complete reverse reset',
    }
  }
  )

  timeLineMonstre.from('.monstre1', {
    opacity: 0,
    delay: 1,
    duration:2
  });

  timeLineMonstre.to('.monstre1', {
    opacity: 0,
    duration:2
  }, '<1');

  timeLineMonstre.from('.monstre2', {
    opacity: 0,
    duration:2
  }, '<2');

  timeLineMonstre.to('.monstre2', {
    opacity: 0,
    duration:2
  }, '<1');


  timeLineMonstre.from('.monstre3', {
    x: '100vw',
    ease: 'ease in',
    duration:0.08
  }, '<2');

  timeLineMonstre.fromTo(".text-ch3",{
    opacity:0,
    
  },{
    opacity:1,
    duration:"3"
  },"-=4")

  /*animation ch4*/ 

  let timeLineWalkingJade = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre_4",
      start: "top top",
      end:"800% 0%",
      pin: true,
      scrub:true
    }
  }
  )

  timeLineWalkingJade.to(".walk2", {
    motionPath:{
      path:".suivre",  align: ".suivre"
    }, duration:20
  })

  timeLineWalkingJade.fromTo(".run", {
    opacity:0
    },{opacity:1, duration:6},"-=")

  let timelinech4 = gsap.timeline({repeat: -1})
  timelinech4.from('.creepy1', {
    opacity: 0,
    delay: 2,
    duration:3
  });

  timelinech4.to('.creepy1', {
    opacity: 0,
    duration:1
  }, '<2');

  timelinech4.from('.creepy2', {
    opacity: 0,
    duration:3
  }, '<4');

  timelinech4.to('.creepy2', {
    opacity: 0,
    duration:1
  }, '<2');

  timelinech4.from('.creepy3', {
    opacity: 0,
    duration:3
  }, '<6');

  timelinech4.to('.creepy3', {
    opacity: 0,
    duration:1
  }, '<2');



  /*animation ch5*/

  let timeLinePlante = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre_5",
      start: "top top",
      end:"300% 0%",
      pin: true,
      scrub:true
    }
  }
  )


  timeLinePlante.from('.fillep', {
    opacity: 0,
    duration:5
  });

  timeLinePlante.from('.grrr', {
    opacity: 0,
    duration:4
    }, 1);

    timeLinePlante.to('.grrr',{
    scale:0.5,
    y: '18vh',
    ease:'ease out',
    duration: 4
  }, '<1')

  timeLinePlante.fromTo(".oh-non",{
    opacity:0,
    
  },{
    opacity:1,
    duration:"3"
  },"-=3")
  /*animation ch6*/
  let timeLineJade = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre_6",
      start: "top top",
      end:"300% 0%",
      pin: true,
      scrub:true
    }
  }
  )


  timeLineJade.from('.fille', {
    opacity: 0,
    delay:1,
    duration:4
  });
  let timelinech6girl = gsap.timeline({})
  timelinech6girl.from('.fille', {
    x: '4.9999999999999999999999999999999999999999999999vw',
    yoyo: 'true',
    duration: 0.0009,
    repeat: -1
  },1);

  timeLineJade.fromTo('.cloud', {
    opacity: 0,
    x:"-10vw",
    delay:1,
  },{
    opacity:1,
    x: "100vw",
    duration:8
  });

  timeLineJade.from('.main', {
  y:'100vh',
  opacity:0,
  delay: 2,
  duration: 3
  },1);

  timeLineJade.fromTo(".peur", {
    opacity:0
    },{opacity:1, duration:6},"-=8")

  /*animation ch6 suite*/

  gsap.set(".bave",{drawSVG:"0% 0%"});



  let timeLinebook = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre_6_suite",
      start: "5% 5%",
      end:"300% 10%",
      pin: true,
      scrub:true
    }
  }
  ) 

  timeLinebook.fromTo(".bave", {
    drawSVG: "0% 0%"
  },{drawSVG:"100% 0%", duration:5, ease:"none",})

  timeLinebook.fromTo(".bave", {
    opacity:1
  },{opacity:0, duration:20},"+=1")

  timeLinebook.fromTo(".close", {
    opacity:0
    }, {opacity:1, duration:5})

  timeLinebook.to("#eye11", {
  morphSVG:"#eye21",duration:8
  })
  timeLinebook.to("#eye12", {
    morphSVG:"#eye22",duration:8
    },"<")
    timeLinebook.to("#eye13", {
      morphSVG:"#eye23",duration:8
      },"<")
      timeLinebook.to("#eye14", {
        morphSVG:"#eye24",duration:8
        },"<")

  timeLinebook.fromTo(".close", {
    opacity:1
    }, {opacity:0, duration:5}) 

    timeLinebook.fromTo(".bon_matin", {
      opacity:0
      },{opacity:1, duration:6},"-=8")

  timeLinebook.fromTo('#surprise',{
  opacity:0,
  },{opacity:1,x: "-135vh", y:"-315vh" ,delay:2,duration:0.005})

  timeLinebook.to('#surprise',{
    scaleY: 0.108,
    scaleX:0.148,
    rotation: 0,
    x: '-48.5vw',
    y: '-329vh',
    skewX:-13,
    skewY:-13,
    duration:8
    },'<7')



    timeLinebook.from('#ch6-5',{
    opacity:0,
    duration:0.05
  })

  timeLinebook.to('#surprise',{
    x: '-85vw',
    rotation: -10,
    skewX: -22,
    skewY:-22,
    duration:3
    }, '<1')

    timeLinebook.to('.no1',{
    x: '-27vw',
    skewX: -22,
    skewY:-22,
    duration:2.9
    }, '>-2.9')

    timeLinebook.to('.no2',{
    x: '-22vw',
    skewX: -22,
    skewY:-22,
    duration:2.9
    }, '>-2.9')

    timeLinebook.to('.no3',{
    x: '-14vw',
    skewX: -22,
    skewY:-22,
    duration:2.9
    }, '>-2.9')

    
    timeLinebook.to('.no4',{
    x: '-6vw',
    skewX: -22,
    skewY:-22,
    duration:2.9
    }, '>-2.9')

    timeLinebook.to('.no5',{
    x: '2vw',
    skewX: -22,
    skewY:-22,
    duration:2.95
    }, '>-2.95')

    timeLinebook.to('.no6',{
      x: '10vw',
      skewX: -22,
      skewY:-22,
      duration:2.95
      }, '>-2.95')

      timeLinebook.to('.no7',{
        x: '18vw',
        skewX: -22,
        skewY:-22,
        duration:2.95
        }, '>-2.95')
}

if (window.gsap && window.ScrollTrigger && window.motionPath) {
  loadedGSAP();
} 
else {
  window.addEventListener("load", loadedGSAP);
}


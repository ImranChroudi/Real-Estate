import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export let animateAxeX =  {
   x : -50,
   opacity : 0,
   duration : 0.5,
}

export let animateAxeY =  {
    y : 20,
    opacity : 0,
    duration : 0.5,
 }


 export let animateAxeYTop =  {
   y : -20,
   opacity : 0,
   duration : 0.5,
}


export let animateScale=  {
   scale  : 0,
   opacity : 0,
   duration : 0.5,
}


export const handleAnimationXY = (itemsAnimated)=>{
   console.log("handle Animation Xy ")
   itemsAnimated.forEach((element , idx) => {
      if(element.classList.contains("animate-y")){
         console.log("animation axs y")
          gsap.from( element , {
              ...animateAxeY , 
              delay : 0.3 * idx,
              scrollTrigger : {
                trigger : element
              }
          })
      }

      else if(element.classList.contains("animate-x")){
         console.log("animatioin axe x")
          gsap.from( element , {
              ...animateAxeX , 
              delay : 0.3 * idx,
              scrollTrigger : {
                trigger : element
              }
          })
      }

      else if(element.classList.contains("animate-scale")){
         gsap.from( element , {
             ...animateScale , 
             delay : 0.3 * idx,
             scrollTrigger : {
               trigger : element
             }
         })
     }

     else if(element.classList.contains("animate-y-top")){
         gsap.from( element , {
             ...animateAxeYTop , 
             delay : 0.3 * idx,
             scrollTrigger : {
               trigger : element
             }
         })
     }
  });
}




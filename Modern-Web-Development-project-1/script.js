
// smooth scrolling lagane vale hai 
// ✅ 

//1-> attach loco scroll css
//2-> attach locomotive scroll min js
//3-> some code from loco github for js 


// gsap
// -> attach gsap from gsap cdn 



// scrolltrigger


const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});




function firstPageAnim(){
  var tl = gsap.timeline(); // Create a GSAP timeline

  tl.from("#nav", {        // Animate the element with id "nav"
    y: '-10',             // Move from -10px on the Y-axis (downward animation)
    opacity: 0,           // Start from fully transparent (0 opacity)
    duration: 1.5,        // Animation lasts 1.5 seconds
    ease: Expo.easeInOut  // Uses an "Expo.easeInOut" easing function for smooth movement
  })
        .to(".boundingelem", {  // Animates elements with the class "boundingelem"
          y: 0,                // Moves to y = 0 (back to original position)
          ease: Expo.easeInOut, // Smooth animation
          duration: 2,          // Animation lasts 2 seconds
          delay:-1,
          stagger:.2
        })

        .from("#herofooter", {        
          y:-10,
          opacity:0,
          duration:1.5,
          delay:-1,
          ease:Expo.easeInOut
        })    
}






// jab mouse move ho to hum log skew kr paye aur maximum skew and minimum skew define kr paaye , jb mouse move ho to chapta ki value bade, aur jb mouse chalna band ho jaye to chapta hata lo

var timeout;

function circleChaptaKaro(){
  var xPrev=0;
  var yPrev=0;
  var xScale=1;
  var yScale=1;


   window.addEventListener("mousemove",function(dets){
    clearTimeout(timeout);
      var xDiff=dets.clientX-xPrev;
      var yDiff=dets.clientY-yPrev;
      xScale= gsap.utils.clamp(0.8,1.2,xDiff);
      yScale= gsap.utils.clamp(0.8,1.2,yDiff);
      
      xPrev=dets.clientX;
      yPrev=dets.clientY;
      akash(xScale,yScale);
      timeout=setTimeout(function(){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)   scale(1,1)`;
      },100)

   });
}


function akash(xScale,yScale){
  window.addEventListener("mousemove", function(dets){
    document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)   scale(${xScale},${yScale})`;
  });
}

circleChaptaKaro();
akash();
firstPageAnim(); // Calling the function to start the animation

// teeno element ko sleect karo, uske baad teeno par ek mousemove lagao, jab mousemove ho to ye pata karo ki mouse kaha par hai, jiska matlab hai mouse ki x and y position pata karo, ab mouse ki x y position ke badle us image ko show karo and us image ko move karo, move karte waqt rotate karo, and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye

document.querySelectorAll(".elem").forEach(function(elem){
 var rotate=0;
 var diffrot=0;



 elem.addEventListener('mouseleave',function(){
    gsap.to(elem.querySelector("img"),{
      opacity:0,
      visibility: "hidden", // Show image
      ease:Power3,
      duration:0.5
    });
   });


 elem.addEventListener('mousemove',function(dets){
var diff=dets.clientY - elem.getBoundingClientRect().top;
  diffrot=dets.clientX-rotate;
  rotate=dets.clientX;

  
  gsap.to(elem.querySelector("img"),{
    opacity:1,
    visibility: "visible", // Show image
    ease:Power3,
    top:diff,
    left:dets.clientX,
    rotate:gsap.utils.clamp(-20,20,diffrot*0.5)
  });
 });
});




$(document).ready(function(){

  
const name_faders = document.querySelectorAll(".name-animation");

const description_faders = document.querySelectorAll(".description-animation");
const photo_faders = document.querySelectorAll(".photo-animation");




const appearOptions = {
    threshold: 0.25,
    rootMargin: "0px 0px -150px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries, appearOnScroll){

    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });

}, appearOptions);


name_faders.forEach(fader => {
    appearOnScroll.observe(fader);

});



description_faders.forEach(function(slider){
    appearOnScroll.observe(slider);
})


photo_faders.forEach(function(slider){
    appearOnScroll.observe(slider);
})


});


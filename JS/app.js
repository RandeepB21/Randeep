$(document).ready(function(){

const button = $(".nav-button-font" );

button.hover(function(){

    $(event.target).css("text-decoration","underline");
    


},function(){
    $(event.target).css("text-decoration","none");
});


const text_to_bold = $(".bold");

text_to_bold.hover(function(){
    $(event.target).css("font-weight","bold");

},function(){
    $(event.target).css("font-weight","50");
});


});

$(document).ready(function(){
  var hopageSlides = $(".homepage-slide");  
    hopageSlides.owlCarousel({
        items:1,
     loop:true,
     nav:true,
     navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
     autoplay:true,
     dots:false
    }); 
    
  
 hopageSlides.on('translate.owl.carousel', function(event) {
  $(".welcome-inner h4").removeClass("animate__animated animate__bounce");
  $(".welcome-inner h1").removeClass("animate__animated animate__jackInTheBox");
  $(".welcome-inner p").removeClass("animate__animated animate__fadeIn");   
  });  
    
 
    
   hopageSlides.on('translated.owl.carousel', function(event) {  
    
 $(".welcome-inner h4").addClass("animate__animated animate__bounce");
$(".welcome-inner h1").addClass("animate__animated animate__jackInTheBox");
$(".welcome-inner p").addClass("animate__animated animate__fadeIn");   
    
 });    
    
});



/* $(".homepage-slide").owlCarousel({
  items:1,
     loop:true,
     nav:true,
     navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
     autoplay:false,
     dots:false
 });*/


//----------------------------------Javascript for Navbar---------------------------

   

  let navbar = document.querySelector("nav");
  let scrollPrevious = window.pageYOffset;
  window.onscroll = function(){
   let scrollCurrent = window.pageYOffset;
   if(scrollPrevious > scrollCurrent){
     navbar.style.top = "0px";
   }
   else{
     navbar.style.top = "-150px";
   }
   scrollPrevious = scrollCurrent;
  }



      //---------------------------javascript for inquiry option--------------------->


       var inquirybox = document.getElementById("inquirybox");

       function showbox(){
        inquirybox.style.visibility = "visible";
       }

       function hidebox(){
        inquirybox.style.visibility = "hidden";
       }

  
  //------------------------------Javascript for revealing elements on Scroll------------------------>

   type="text/javaScript">
      window.addEventListener('scroll', reveal);

      function reveal(){
       var reveals = document.querySelectorAll('.reveal');

       for(var i = 0; i < reveals.length; i++){

         var windowheight = window.innerHeight;
         var revealtop = reveals[i].getBoundingClientRect().top;
         var revealpoint = 150;

         if(revealtop < windowheight - revealpoint){

           reveals[i].classList.add('active');
         }
         else{

           reveals[i].classList.remove('active');
         }
       }
      }
  

  
   const span= document.querySelector('.fa.fa-times');

   span.addEventListener('click', () =>{
     span.classList.toggle('active');
   });
  
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            
        }else{
            $('.navbar').removeClass("sticky");
        }
        
    });

    //typing animation script 
    var typed = new Typed(".typing" , {
        strings: ["You Tuber" , "Developer", "Blogger" , "Designer" , "Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true

    });
 

    //toggle menu/nav script 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
       
        
        
    });

});
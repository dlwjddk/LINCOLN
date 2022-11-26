$(function(){
    
    $(".slide_wrap").bxSlider({
                captions:true,
        slideWidth: 800,
        speed: 500,
                auto:true,
                minSlides:1,
                autoControls:true,
                maxSlides:3                
    }) 
    
    
    var a=$(".c_img")
    $(window).scroll(function(){
        if($(this).scrollTop() > a.offset().top-1500){
            a.find("li").addClass("slideUp")
        }else{
            a.find("li").removeClass("slideUp")
        }
    })
    
    
    var b=$("#b_ad")
    $(window).scroll(function(){
        if($(this).scrollTop() > b.offset().top-1000){
            b.find("img").addClass("opacity")
        }else{
            b.find("img").removeClass("opacity")
        }
    })
    

    $("#menu").click(function(){
        $("header").fadeIn()
    })
    
    $(".m_close").click(function(){
        $("header").fadeOut()
    })
    
    
})
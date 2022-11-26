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
    

    $(".c1_i").eq(0).click(function(){
        $(".c1_i2").fadeOut(600)
        $(".c1_i2").eq(0).fadeIn(600)
    }) 
    
    $(".c1_i").eq(1).click(function(){
        $(".c1_i2").fadeOut(600)
        $(".c1_i2").eq(1).fadeIn(600)
    })
    
    $(".c1_i").eq(2).click(function(){
        $(".c1_i2").fadeOut(600)
        $(".c1_i2").eq(2).fadeIn(600)
    })
    
    $(".c1_i").eq(3).click(function(){
        $(".c1_i2").fadeOut(600)
        $(".c1_i2").eq(3).fadeIn(600)
    })
    
})
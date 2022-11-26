$(function(){
    $("#btn li").eq(0).click(function(){
        $("#main li").fadeOut(600)
        $("#main li").eq(0).fadeIn(600)
        
        $("#btn li").removeClass("on")
        $("#btn li").eq(0).addClass("on")
        
    })
    
    $("#btn li").eq(1).click(function(){
        $("#main li").fadeOut(600)
        $("#main li").eq(1).fadeIn(600)
        
        $("#btn li").removeClass("on")
        $("#btn li").eq(1).addClass("on")
    })
    
    $("#btn li").eq(2).click(function(){
        $("#main li").fadeOut(600)
        $("#main li").eq(2).fadeIn(600)
        
        $("#btn li").removeClass("on")
        $("#btn li").eq(2).addClass("on")
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
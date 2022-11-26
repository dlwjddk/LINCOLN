$(function(){
    var a=$(".sub")
    $(window).scroll(function(){
        if($(this).scrollTop() > a.offset().top-700){
            a.find("p").addClass("slideUp")
        }else{
            a.find(".p").removeClass("slideUp")
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
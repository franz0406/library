const accordion_ = $(".contents-m").find("dl>dt");

accordion_.click(function(e){
    e.preventDefault();
    $(this).next("dd").stop().slideToggle(200);
    $(this).toggleClass("active");
    $(this).parent().siblings("dl").find("dd").stop().slideUp(200);
    $(this).parent().siblings("dl").find("dt").removeClass("active");
})
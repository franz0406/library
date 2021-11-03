const srchTapList = $(".srch-tap-menu").find("li"),
      srchTaps = $(".srch-taps");

let srchTapIdx = 0;

srchTapList.click(function(e){
    e.preventDefault();
    srchTapIdx = $(this).index();
    srchTapList.eq(srchTapIdx).addClass("active").siblings().removeClass("active");
    srchTaps.eq(srchTapIdx).addClass("active").siblings().removeClass("active");
})
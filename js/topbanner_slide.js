const noticeSlide = document.querySelector(".notice-slide > ul"),
      noticeSliderList = noticeSlide.querySelectorAll("li"),
      noticeSliderPager = document.querySelectorAll(".notice-slide-pagination > ul > li"),
      listLength = noticeSliderList.length,
      listWidth = 295;

let listIdx = 0;

noticeSlide.style.width = listWidth * listLength + "px"; // 슬라이더 가로 값 설정

let autoSlider = setInterval(function(){ //슬라이더 자동함수
    listIdx++;
    if(listIdx > listLength -1){
        listIdx = 0;
    }
    noticeSlide.style.left = `-${listWidth * listIdx}px`;
    pagerActive(listIdx);
},4000);

for(let i = 0; i < listLength; i++){
    noticeSliderPager[i].addEventListener("click",function(e, idx){ // 페이저 클릭 이벤트
        e.preventDefault();
        listIdx = i;
        noticeSlide.style.left = `-${listWidth * listIdx}px`;
        pagerActive(listIdx);
        clearInterval(autoSlider); // 자동함수 중지
        autoSlider = setInterval(function(){ // 자동함수 재 할당
            listIdx++;
            if(listIdx > listLength -1){
                listIdx = 0;
            }
            noticeSlide.style.left = `-${listWidth * listIdx}px`;
            pagerActive(listIdx);
        },4000);
    })
}

function pagerActive(idx){ // 페이지 버튼 클래스 ACTIVE 추가 함수
    for(let i = 0; i < listLength; i++){
        noticeSliderPager[i].classList.remove("active");
    }
    noticeSliderPager[idx].classList.add("active");
}



      
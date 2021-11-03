const colletSlider = document.querySelector(".collect-slider > ul"),
      colletList = colletSlider.querySelectorAll("li"),
      prevBtn = document.querySelector(".prev"),
      nextBtn = document.querySelector(".next"),
      collectLength = colletList.length,
      listGap = 29,
      collectWidth = 299 + listGap;
      
let collectIdx = 0;

colletSlider.style.width = listWidth * collectLength +"px";

prevBtn.style.opacity = "20%";

prevBtn.addEventListener("click", function(){
    if(collectIdx > 0){
        collectIdx--;
        moveSlide();
        if(collectIdx == 0){
            prevBtn.style.opacity = "20%";
        }
    }
});
nextBtn.addEventListener("click", function(){
    if(collectIdx < collectLength - 3){
        collectIdx++;
        moveSlide();
        if(collectIdx == collectLength - 3){
            nextBtn.style.opacity = "20%";
        }
    }
});

function moveSlide(){
    colletSlider.style.left = `-${collectWidth * collectIdx}px`;
    prevBtn.style.opacity = "100%";
    nextBtn.style.opacity = "100%";
};


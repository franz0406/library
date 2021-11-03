// 공지사항 및 행사 인재채용 탭메뉴

const noticeTapMenu = document.querySelector(".notice"), 
      noticeTapList = noticeTapMenu.querySelectorAll(".notice-tap-list > li"),
      noticeLength = noticeTapList.length;
      noticeTaps = noticeTapMenu.querySelectorAll(".taps");

for(let i = 0; i < noticeLength; i++){
    noticeTapList[i].addEventListener("click", function(e){
        e.preventDefault();
        for(let z = 0; z < noticeLength; z++){
            noticeTapList[z].classList.remove("active");
            noticeTaps[z].classList.remove("active");
        }
        noticeTapList[i].classList.add("active");
        noticeTaps[i].classList.add("active");
    })
}


// 뉴스 탭메뉴

const newsTapMenu = document.querySelector(".news"), 
      newsTapList = newsTapMenu.querySelectorAll(".news-tap-list > li"),
      newsLength = newsTapList.length;
      newsTaps = newsTapMenu.querySelectorAll(".taps");

for(let i = 0; i < newsLength; i++){
    newsTapList[i].addEventListener("click", function(e){
        e.preventDefault();
        for(let z = 0; z < newsLength; z++){
            newsTapList[z].classList.remove("active");
            newsTaps[z].classList.remove("active");
        }
        newsTapList[i].classList.add("active");
        newsTaps[i].classList.add("active");
    })
}

// 도서안내 텝 메뉴

const bookTapMenu = document.querySelector(".books-tap-menu"), 
      bookTapList = bookTapMenu.querySelectorAll(".books-tap-list > li"),
      bookLength = bookTapList.length;
      bookTaps = bookTapMenu.querySelectorAll(".books-taps");

for(let i = 0; i < bookLength; i++){
    bookTapList[i].addEventListener("click", function(e){
        e.preventDefault();
        for(let z = 0; z < bookLength; z++){
            bookTapList[z].classList.remove("active");
            bookTaps[z].classList.remove("active");
        }
        bookTapList[i].classList.add("active");
        bookTaps[i].classList.add("active");
    })
}
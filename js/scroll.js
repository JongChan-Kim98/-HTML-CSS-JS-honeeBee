//더보기 누르면 스크롤 이동
const seeMore = document.querySelector('.btnMore')
seeMore.onclick = () => {
    window.scrollTo({ top: 1350, behavior: 'smooth' });
}

// 메인 스크롤 이벤트
var lastScrollTop = 0;

document.querySelector("body").onscroll = function(){ 
    // console.log(document.documentElement.scrollTop)
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop){
      // downscroll code
      headerwrap.classList.add("scroll-up")
      
   }
   else if(window.pageYOffset == 0){
    headerwrap.style.background="transparent" 
    
   } 
   else {
      // upscroll code
      headerwrap.classList.remove("scroll-up")
      headerwrap.style.background="#fff" 
      headerwrap.style.borderBottom = "1px solid #ffbb2e"
   }
   lastScrollTop = st <= 0 ? 0 : st;
}

//top 버튼
const topBtn = document.querySelector('#moveTopBtn');
topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

//팀원 소개 스크롤이벤트
(function () {
    // window.addEventListener('scroll', function() {
    //     info.innerHTML = window.pageYOffset;
    // });
    let scrollEl = document.querySelector(".bbb")
    let scrollEl1 = document.querySelectorAll(".dodo")[0];
    let scrollEl2 = document.querySelectorAll(".dodo")[1];
    let scrollEl3 = document.querySelectorAll(".dodo")[2];
    let scrollEl4 = document.querySelectorAll(".dodo")[3];
    let scrollElTop1 = scrollEl1.getBoundingClientRect().top + window.pageYOffset;
    let scrollElTop2 = scrollEl2.getBoundingClientRect().top + window.pageYOffset;
    let scrollElTop3 = scrollEl3.getBoundingClientRect().top + window.pageYOffset;
    let scrollElTop4 = scrollEl4.getBoundingClientRect().top + window.pageYOffset;
    let scrollElBottom =scrollEl4.getBoundingClientRect().bottom + window.pageYOffset;
    // console.log(window.scrollY-scrollElBottom)
    window.addEventListener('scroll', function () {
        // console.log(document.querySelectorAll(".dodo")[0].getBoundingClientRect().top + window.pageYOffset)
        // console.log(window.scrollY)
        // console.log(window.scrollY-scrollElTop2)
        // console.log(window.scrollY-scrollElTop3)
        // console.log(window.scrollY-scrollElTop4)
        // console.log(window.scrollY-scrollElTop4)
        // if(window.scrollY > 1226){
        //     document.querySelector(".bbb").classList.add("img_move")
        // }
        // else if(window.scrollY > 3000){
        //     document.querySelector(".bbb").classList.remove("img_move")
        // }
        // console.log((window.scrollY+800)-scrollElTop1)
        if((window.scrollY+800)-scrollElTop1 > 0){
            document.querySelectorAll(".img_size")[0].style.width = (window.scrollY+600)-scrollElTop1+"px"
            document.querySelectorAll(".img_size")[0].style.height = (window.scrollY+600)-scrollElTop1+"px"
        }
        if((window.scrollY+800)-scrollElTop2 > 0){
            document.querySelectorAll(".img_size")[1].style.width = (window.scrollY+600)-scrollElTop2+"px"
            document.querySelectorAll(".img_size")[1].style.height = (window.scrollY+600)-scrollElTop2+"px"
        }
        if((window.scrollY+800)-scrollElTop3 > 0){
            document.querySelectorAll(".img_size")[2].style.width = (window.scrollY+600)-scrollElTop3+"px"
            document.querySelectorAll(".img_size")[2].style.height = (window.scrollY+600)-scrollElTop3+"px"
        }
        if((window.scrollY+800)-scrollElTop4 > 0){
            document.querySelectorAll(".img_size")[3].style.width = (window.scrollY+600)-scrollElTop4+"px"
            document.querySelectorAll(".img_size")[3].style.height = (window.scrollY+600)-scrollElTop4+"px"
        }

        // if (window.scrollY > 2022){
        //     document.querySelectorAll(".dodo")[0].classList.add("img_move")
        // }
        // if (window.scrollY > 2800){
        //     document.querySelectorAll(".dodo")[1].classList.add("img_move")
        // }
        // if (window.scrollY > 3800){
        //     document.querySelectorAll(".dodo")[2].classList.add("img_move")
        // }
        // if (window.scrollY > 4800){
        //     document.querySelectorAll(".dodo")[3].classList.add("img_move")
        // }
        if (window.scrollY > 1224) {
            scrollEl.classList.add('fixed');
            if ((window.scrollY-scrollElTop4)-560 >0) {
                scrollEl.classList.add('end');
                // console.log(window.scrollY)
            }
            else {
                scrollEl.classList.remove('end');
            }
        }
        else {
            scrollEl.classList.remove('fixed');
        }
    })
})();

//달력 카운터
const calNum = new Date();
const nowDate = calNum.getDate()
const nowMonth = calNum.getMonth()+1

document.querySelector('.bg_date').innerHTML = nowDate
document.querySelector('.bg_month').innerHTML = nowMonth
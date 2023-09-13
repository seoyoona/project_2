// popup
document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.querySelector('.menu_btn.gnb');
    var nav = document.querySelector('.nav');

    menuButton.addEventListener('click', function() {
        nav.classList.toggle('active');
        document.querySelector('.header .header_wrap').style.display = 
            (nav.classList.contains('active')) ? 'block' : 'none';});
    });
const closeBtn = document.querySelector('.close_btn');
  const popup = document.querySelector('.popup');
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });
// bg
$(document).ready(function(){

  $('#background-video').fitVids();
});

// business_slider

let ticking = false;
let horizontalScrollAmount = 0;

function doSomething(scroll_pos) {
  const bContent = document.querySelector('.b_content');
  const bContentTop = bContent.offsetTop;
  const bContentBottom = bContentTop + bContent.offsetHeight;

  // .b_content 요소의 전체 너비 계산
  let totalWidth = Array.from(bContent.children).reduce((acc, child) => acc + child.offsetWidth, 0);

  // 현재 스크롤 위치가 .b_content 요소의 범위 내에 있는지 확인
  if (scroll_pos >= bContentTop && scroll_pos <= (totalWidth + bContentTop)) {
    // .b_content 요소 내에서는 가로로 움직임
    horizontalScrollAmount += scroll_pos - (horizontalScrollAmount + bContentTop);
    document.querySelector('.b_content').style.transform = `translateX(-${horizontalScrollAmount*5}px)`;
    
    window.scrollTo(0, scroll_pos);
    
   } else if (scroll_pos > (totalWidth + bContentTop)) {
     // 마지막 아이템이 완전히 보일 때까지 수직 스크롤 막기
     window.scrollTo(0, totalWidth + bContentTop);
   } else {
     // .b_content 요소 밖에서는 transform 속성 초기화 및 수직 스크롤 허용
     document.querySelector('.b_content').style.transform = 'translateX(0)';
   }
}

window.addEventListener('scroll', function(e) {
   let last_known_scroll_position = window.scrollY;

   if (!ticking && window.innerWidth >= 1024) { 
      window.requestAnimationFrame(function() {
        doSomething(last_known_scroll_position);
        ticking = false;
      });

      ticking = true;
   }
});

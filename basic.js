// nav
document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.querySelector('.menu_btn.gnb');
    var nav = document.querySelector('.nav');
    var overlay = document.querySelector('.overlay');

    menuButton.addEventListener('click', function() {
        nav.classList.toggle('active');

    })});

  // popup
const closeBtn = document.querySelector('.close_btn');
  const popup = document.querySelector('.popup');
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

// topBtn

// document.querySelectorAll('a.smooth-scroll').forEach((link) => {
//   link.addEventListener('click', function(e) {
//       e.preventDefault();

//       let anchor = this.getAttribute('href');

//       document.querySelector(anchor).scrollIntoView({
//           behavior: 'smooth'
//       });
//   });
// });


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
    document.querySelector('.b_content').style.transform = `translateX(-${horizontalScrollAmount*10}px)`;
    
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


// const contents = $('.b_box');
// let secArr = [];
// contents.each((index) => {
// 	secArr.push(index);
// });
// let w;
// let h;
// $(window).resize(function () {
// 	w = $(window).width();
// 	h = $(window).height();
// 	contents.height(h);
// 	contents.width(w);
// 	$('.b_content').height(h);
// });
// $(window).trigger('resize');
// // 초기 위치 설정
// $('html,body')
// 	.stop()
// 	.animate({ scrollLeft: contents.eq(1).offset().left }, 1300);
// contents.on('wheel', function (event) {
// 	let currentIndex = $(this).index();

// 	if (event.originalEvent.deltaY > 0) {
// 		// 마우스 휠 아래로 스크롤
// 		currentIndex++;
// 		if (currentIndex >= secArr.length) {
// 			// 마지막 요소를 넘어가면 처음 요소로 돌아감
// 			currentIndex = secArr[0];
// 		}
// 		$('html,body')
// 			.stop()
// 			.animate({ scrollLeft: contents.eq(currentIndex).offset().left }, 'easeOutSine');

// 		event.preventDefault();
// 	} else if (event.originalEvent.deltaY < 0) {
// 		// 마우스 휠 위로 스크롤
// 		currentIndex--;
// 		if (currentIndex < secArr[0]) {
// 			// 첫번째 요소를 넘어가면 마지막 요소로 돌아감
// 			currentIndex = secArr[secArr.length - 1];
// 		}
// 		$('html,body')
// 			.stop()
// 			.animate({ scrollLeft: contents.eq(currentIndex).offset().left }, 'easeOutSine');
// 		event.preventDefault();
// 	}
// });

// creators

$(window).on('scroll', () => {
	let winSCT;
	const sections = $('section.creators');
	winSCT = $(window).scrollTop();
	sections.each(function (idx, o) {
		$(o).addClass(`bg${idx + 1}`);
		const tg = $(this);
		const tgtop = tg.offset().top;
		if (winSCT > tgtop) {
			tg.find('.c_box::before').css('transform', 'translateY(0%)');
		} else if (winSCT > tgtop) {
			tg.find('.c_box::before').css('transform', 'translateY(0%)');
		} else if (winSCT > tgtop) {
			tg.find('.c_box::before').css('transform', 'translateY(0%)');
		}
	});
});
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


// go-top
$(function () {
	// Show/hide the footer button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			$('.go-top').fadeIn(200);
		} else {
			$('.go-top').fadeOut(200);
		}
	});

	// Animate scrolling
	$('.go-top').click(function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 500, 'easeOutQuart');
	});
});


// bg
$(document).ready(function(){

  $('#background-video').fitVids();
});

// business_slider


// let ticking = false;
// let horizontalScrollAmount = 0;
// function doSomething(scroll_pos) {
//   const bContent = document.querySelector('.b_content');
//   const bContentTop = bContent.offsetTop;
//   const bContentBottom = bContentTop + bContent.offsetHeight;
//   // .b_content 요소의 전체 너비 계산
//   let totalWidth = Array.from(bContent.children).reduce((acc, child) => acc + child.offsetWidth, 0);
//   // 현재 스크롤 위치가 .b_content 요소의 범위 내에 있는지 확인
//   if (scroll_pos >= bContentTop && scroll_pos <= (totalWidth + bContentTop)) {
//     // .b_content 요소 내에서는 가로로 움직임
//     horizontalScrollAmount += scroll_pos - (horizontalScrollAmount + bContentTop);
//     document.querySelector('.b_content').style.transform = `translateX(-${horizontalScrollAmount*10}px)`;
    
//     window.scrollTo(0, scroll_pos);
    
//    } else if (scroll_pos > (totalWidth + bContentTop)) {
//      // 마지막 아이템이 완전히 보일 때까지 수직 스크롤 막기
//      window.scrollTo(0, totalWidth + bContentTop);
//    } else {
//      // .b_content 요소 밖에서는 transform 속성 초기화 및 수직 스크롤 허용
//      document.querySelector('.b_content').style.transform = 'translateX(0)';
//    }
// }
// window.addEventListener('scroll', function(e) {
//    let last_known_scroll_position = window.scrollY;
//    if (!ticking && window.innerWidth >= 1024) { 
//       window.requestAnimationFrame(function() {
//         doSomething(last_known_scroll_position);
//         ticking = false;
//       });
//       ticking = true;
//    }

   
// });

$(document).ready(function(){
  let d_width = 0; // 브라우저 가로
  let d_height = 0; // 문서 전체의 높이

  function tmp() {
      if($(window).width() >= 1024) {
          // container의 가로사이즈(화면가로 * box 개수)
          let con_width = $(window).outerWidth() * $('.b_box').length;

          $('.b_content').css({
              width: con_width,
              height: '100vh',
              position: 'absolute',
              overflow : 'hidden',
              left : 3,
          });

          $('.b_box').css({
              width: 7000 /$('.b_box').length,
              height: '100vh',
              float: 'left'
          });

          $('body').css({
              height: '100vh'
          });

          let w_width = $(window).width(); // 화면의 가로값
          let w_height = $(window).height(); // 화면의 세로값

          d_width = con_width - w_width; 
      }
      else{
        $('.b_content').css({
          position: 'static',
          overflow : 'hidden',
          left : 3,
      });
      }
  }

  tmp();

  let array = [];
  for(let i=0; i<$('.b_box').length; i++) {
      array[i] = $('.b_box').eq(i).offset().left;
  }

  let chk = true;
  
  $('.b_box').on('mousewheel DOMMouseScroll', function(event){
      if($(window).width() >= 1024) {
          
        if(chk) {

            chk = false;
            setTimeout(function(){
                chk = true;
            },500);

            var delta=event.originalEvent.wheelDelta || -event.originalEvent.detail;

            if(delta < 0 && $(this).next().length > 0) {
                $('.b_content').animate({
                    left: -array[$(this).index()+1]
                },500);
            } else if(delta > 0 && $(this).prev().length > 0) {
                $('.b_content').animate({
                    left:-array[$(this).index()-1]
                },500);
           }
        }
    }
  });

  $(window).resize(function(){
      for(let i=0; i<$('.b_box').length; i++) {
          array[i] = $('.b_box').eq(i).offset().left;
      }

      tmp();
      
      if($(window).width() < 1024) { 
          $('.b_content').css('position', 'static');
          $('.b_content').css('flex-direction', 'column');
      }
  });
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

// creators:hover cursor
// window.onload 화면이 전부 로딩된 후 실행
const cursor = document.querySelector('.c_title'); 

cursor.addEventListener('mousemove',(e) => { 
  cursor.style.left = `${e.clientX}px`; 
  cursor.style.top = `${e.clientY}px`; 
});

// c_box::before
// $(document).ready(function() {
//   var creatorsTop = $('.creators').offset().top;
//   var creatorsBottom = creatorsTop + $('.creators').height();

//   $(window).scroll(function() {
//       var scrollPos = $(window).scrollTop();

//       if (scrollPos >= creatorsTop && scrollPos <= creatorsBottom) {
//           // 스크롤 위치가 .creators 섹션 내부일 경우
//           $('.c_box:before').css('transform', 'translateY(-100%)');
//       } else {
//           // 그 외의 경우
//           $('.c_box:before').css('transform', 'translateY(0)%');
//       }
//   });
// });
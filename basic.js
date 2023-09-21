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

$('.b_content').bxSlider({
    mode: 'horizontal',
    slideWidth: 800,
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 1,
    speed:500,
    pager:false,
    controls:false,
    auto:true,
    
  });

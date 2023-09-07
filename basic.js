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
$('#background-video').fitVids();

// business_slider


$(document).ready(function(){

     $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
    $(document).ready(function() {
        let expanded = false;
    
        $('#aboutButton').mouseenter(function() {
            if (!expanded) {
                $('#aboutText').slideDown('fast');
                expanded = true;
            }
        });
    
        $('#aboutButton').mouseleave(function() {
            if (expanded) {
                $('#aboutText').slideUp('fast');
                expanded = false;
            }
        });
    });
    
    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop()>35)
        {
            $('.header').css({'background':'#002e5f','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
        }
        else
        {
            $('.header').css({'background':'none','box-shadow':'none'});
        }
    });

    const counters = document.querySelectorAll('.counter');
    const speed = 120;
    counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const inc = target / speed;
		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};
	  updateCount();
   });

   (function ($) {
    "use strict";
    
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} }
    });

    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 1}, 576: {items: 2}, 768: {items: 3}, 992: {items: 4} }
    });
    
})(jQuery);

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});

$('.accordion-header').click(function(){
    $('.accordion .accordion-body').slideUp(500);
    $(this).next('.accordion-body').slideDown(500);
    $('.accordion .accordion-header span').text('+');
    $(this).children('span').text('-');
});


        // Function to update and display the view count
        function updateViewCount() {
            // Check if the viewCount key exists in local storage
            if (localStorage.getItem('viewCount') === null) {
                // If not, set it to 1
                localStorage.setItem('viewCount', 1);
            } else {
                // If yes, increment it by 1
                var currentCount = parseInt(localStorage.getItem('viewCount'));
                localStorage.setItem('viewCount', currentCount + 1);
            }

            // Display the updated count
            document.getElementById('viewCount').textContent = localStorage.getItem('viewCount');
        }

        // Call the updateViewCount function when the page loads
        updateViewCount();


});


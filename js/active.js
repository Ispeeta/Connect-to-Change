(function ($) {
    'use strict';

    var $window = $(window);

    // Fullscreen Active Code
    $window.on('resizeEnd', function () {
        $(".full_height").height($window.height());
    });

    $window.on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");

    // Newsticker Active Code
    $.simpleTicker($("#breakingNewsTicker"), {
        speed: 1000,
        delay: 3500,
        easing: 'swing',
        effectType: 'roll'
    });

    // Newsticker Active Code
    $.simpleTicker($("#stockNewsTicker"), {
        speed: 1200,
        delay: 3500,
        easing: 'swing',
        effectType: 'roll'
    });

    var welcomeSlide = $('.welcome-blog-post-slide');

    // Welcome Slider Active Code
    if ($.fn.owlCarousel) {
        welcomeSlide.owlCarousel({
            items: 3,
            margin: 0,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
    
    welcomeSlide.on('translate.owl.carousel', function () {
        var slideLayer = $("[data-animation]");
        slideLayer.each(function () {
            var anim_name = $(this).data('animation');
            $(this).removeClass('animated ' + anim_name).css('opacity', '0');
        });
    });

    welcomeSlide.on('translated.owl.carousel', function () {
        var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
        slideLayer.each(function () {
            var anim_name = $(this).data('animation');
            $(this).addClass('animated ' + anim_name).css('opacity', '1');
        });
    });

    $("[data-delay]").each(function () {
        var anim_del = $(this).data('delay');
        $(this).css('animation-delay', anim_del);
    });

    $("[data-duration]").each(function () {
        var anim_dur = $(this).data('duration');
        $(this).css('animation-duration', anim_dur);
    });
    
    // Marquee Active Code
    if ($.fn.SimpleMarquee) {
        $('.simple-marquee-container').SimpleMarquee({
            duration: 60000,
            padding: 0,
            marquee_class: '.marquee',
            container_class: '.simple-marquee-container',
            sibling_class: 0,
            hover: true
        });
    }
    
    // Editorial Post Slides
    if ($.fn.owlCarousel) {
        $('.editorial-post-slides').owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000
        });
    }

    // Search Btn Active Code
    $('#searchbtn').on('click', function () {
        $('body').toggleClass('search-form-on');
    })

    // Video Active Code
    if ($.fn.magnificPopup) {
        $('.videobtn').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
    }

    // ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>'
        });
    }

    // PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }

 
// function to set the active dot
function check(){
    var currentImg = $('.slider-img .active');
          var imgNum = currentImg.index();
          var dotNum = $('.dot').eq(imgNum);
          dotNum.addClass('active').siblings().removeClass('active');
  
  }
  
  //  function to set the silde show automatic
  var slideIndex = 0;
  
  function mySlider() {
    var imgs = document.getElementsByClassName("item");
        for(var i = 0; i< imgs.length; i++){
          imgs[i].classList.remove('active');
        }
        slideIndex ++;
        if(slideIndex > imgs.length){slideIndex = 1}
        imgs[slideIndex- 1].classList.add("active");
        
        check()
  }
  
  
  let coursel = setInterval(mySlider, 1000);
  let imgHover = document.querySelector('.slider-img') 
  imgHover.addEventListener("mouseover", function(){
    clearInterval(coursel);
  });
  imgHover.addEventListener("mouseleave", function(){
    coursel = setInterval(mySlider, 1000);
  });
  
  
  $(document).ready(function(){
    
    
  //slide to right
      $('.next').on('click', function(){
        clearInterval(coursel);
          var currentImg = $('.slider-img .active');
          var nextImg = currentImg.next();
  
          if(currentImg.is(':last-child')){
            
              currentImg.delay(1000).removeClass('active');
              $('.slider-img div').eq(0).addClass('active');
          }else{
              currentImg.delay(1000).removeClass('active');
              nextImg.addClass('active');
  
          }  
        check()
  
      });
    
  //Slide to left
      $('.prev').on('click', function(){
        clearInterval(coursel);
          var currentImg = $('.slider-img .active');
          var prevImg = currentImg.prev();
  
          if(currentImg.is(':first-child')){
              currentImg.delay(1000).removeClass('active');
              $('.slider-img div:last-child').addClass('active');
          }else{
              currentImg.delay(1000).removeClass('active');
              prevImg.addClass('active');
          }
        check()
  
      });
    
    
       $('.dot').on('click', function(){
         clearInterval(coursel);
         var index = $(this).index();
         var currentSlide = $('.slider-img div').eq(index);
           currentSlide.addClass('active');
           $('.slider-img div').not(currentSlide).removeClass('active');
           $(this).addClass('active').siblings().removeClass('active');
     });
  
  });

})(jQuery);
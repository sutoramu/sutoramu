


$(function () {

  // note-iconのmodal挙動
  $('.note-icon').click(function () {
    $('.modal-note-wrapper').fadeIn(400);
  })
  $('.modal-note-wrapper').click(function () {
    $('.modal-note-wrapper').fadeOut(400);
  })

  // twi-iconのmodal挙動
  $('.twi-icon').click(function () {
    $('.modal-twi-wrapper').fadeIn(400);
  })
  $('.modal-twi-wrapper').click(function () {
    $('.modal-twi-wrapper').fadeOut(400);
  })

  // スクロールアニメーション

  $('.home-go').click(function () {
    $("html,body").animate({ scrollTop: 0 });
  })
  $('.about-go').click(function () {
    $("html,body").animate({ scrollTop: $('#about').offset().top });
  })
  $('.skill-go').click(function () {
    $("html,body").animate({ scrollTop: $('#skill').offset().top });
  })
  $('.work-go').click(function () {
    $("html,body").animate({ scrollTop: $('#work').offset().top });
  })
  $('.blog-go').click(function () {
    $("html,body").animate({ scrollTop: $('#blog').offset().top });
  })
  $('.contact-go').click(function () {
    $("html,body").animate({ scrollTop: $('#contact').offset().top });
  })

  
  
  // 以下scrollspy
  var aboutPos = $('#about').offset().top
  var skillPos = $('#skill').offset().top
  var workPos = $('#work').offset().top
  var blogPos = $('#blog').offset().top
  var contactPos = $('#contact').offset().top
  
  $(window).on('scroll', function () {
    var currentPos = $(this).scrollTop()
    
    $('.header-item a').removeClass('scrollspy')
    
    if (currentPos < aboutPos) {
      $('.home-go').addClass('scrollspy')
    } else if (aboutPos <= currentPos && currentPos < skillPos) {
      $('.about-go').addClass('scrollspy')
    } else if (skillPos <= currentPos && currentPos < workPos) {
      $('.skill-go').addClass('scrollspy')
    } else if (workPos <= currentPos && currentPos < blogPos) {
      $('.work-go').addClass('scrollspy')
    } else if (blogPos <= currentPos && currentPos < contactPos) {
      $('.blog-go').addClass('scrollspy')
    } else if (contactPos <= currentPos) {
      $('.contact-go').addClass('scrollspy')
    }
    
  })
  
  // メディアクエリ時のヘッダートグル
  if (window.matchMedia('(max-width: 767px)').matches) {
    $('.header-items-media').click(function(){
      if($('.header-item-media').hasClass('open')){
        $('.header-item-media').fadeOut('400')
        $('.header-item-media').removeClass('open')
      } else {
        $('.header-item-media').fadeIn('400')
        $('.header-item-media').addClass('open')
      }
    })
    $('.header-item-media').click(function(){
      $('.header-item-media').fadeOut('400')
      $('.header-item-media').removeClass('open')
    })
    
    // headerの挙動 PC版では不要かと思い、一旦コメントアウト
    var hdSize = $('header').innerHeight();
    var pos = 0
    $(window).on('scroll',function(){
      var currentPos = $(this).scrollTop()
      if(currentPos < pos || currentPos == 0 ){
        $('header').css({'top':0})
      } else {
        $('header').css({'top':'-'+hdSize+'px'})
      }
      pos = currentPos
    })
    
  }
  
})
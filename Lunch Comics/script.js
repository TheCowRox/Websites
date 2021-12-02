$(document).ready(()=>{

  $('.nav').hide()
  $('.main-text').hide()
  $('.menu').hide()

  if ($(window).width() > 350) {
    $('.main-blur').hide().show(1000);
    $('.about *').hide()
    $('.about2 *').hide()
  }

  setTimeout(()=>{
    $('.main-text').fadeIn(1000);
  }, 500)

  setTimeout(()=>{
    $('.nav').slideDown(1000)
  }, 1000)

  window.onscroll = () => {  
    if ($(window).width() > 750) {
      $('.main-blur').css({'top': scrollY+100})
      $('.nav').css({'top': scrollY*2+300})
      $('.main-text').css({'top': scrollY*2+180, 'font-size': scrollY+100})
      if (scrollY > 100) $('.about *').fadeIn(500);
      if (scrollY > 500) $('.about2 *').fadeIn(500);
      console.log(scrollY)
    } else if ($(window).width() < 750 && $(window).width() > 350) {
      $('.main-blur').css({'top': scrollY+100})
      $('.nav').css({'top': scrollY*2+10})
      $('.main-text').css({'top': scrollY*2+180, 'font-size': scrollY+100})
      if (scrollY > 100) $('.about *').fadeIn(500);
      if (scrollY > 500) $('.about2 *').fadeIn(500);
      console.log(scrollY)
    } else if (scrollY > 399) {
      $('.nav').css({'background-color': '#454545'})
    } else if (scrollY < 400) {
      $('.nav').css({'background-color': 'hsl(0 0% 100% / 0.1)'})
    }
  }

  let open = false;
  $('.menu-btn').click(() => {
    $('.menu').slideToggle();
    $('.parallax-cont .main-blur, .parallax-cont .main-text').fadeToggle();
    setTimeout(()=>{
      $('section, footer').fadeToggle();
     }, 200)
    if (open) {
      $('.menu-2').css('width', '100%')
      $('.menu-3').css('width', '100%')
      toggle(open)
    } else {
      $('.menu-2').css('width', '75%')
      $('.menu-3').css('width', '50%')
      toggle(open)
    }
  })

  let lightMode = false;
  $('.brightness-mode-toggle').click(() => {
    if (!lightMode) {
      $('.about, .menu').css({'background-color': '#fff'})
      $('.about2, footer').css({'background-color': '#ddd'})
      $('*').css({'color': '#252525'})
      $('.brightness-mode-toggle').css({'background-color': '#252525'})
      $('.brightness-mode-toggle:hover').css({'background-color': '#222'})
      $('.brightness-mode-toggle p').css({'color': '#fff'})
      $('.brightness-mode-toggle p').html('Dark Mode')
    } else if (lightMode) {
      $('.about, .menu').css({'background-color': '#222'})
      $('.about2, footer').css({'background-color': '#252525'})
    }
  })
})

let toggle = (x) => {
  if (x) {
    x = false;
  } else {
    x = true;
  }
}

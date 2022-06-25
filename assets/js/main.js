window.onload = function() { 
  loadTopMessage();
  fadeEffect();

  $(window).scroll(() => {
    fadeEffect();
  });

  $('.button-hamburger-menu').on('click', () => {
    $('.button-hamburger-menu').toggleClass('open');
    $('.header-nav').toggleClass('open');
  });

  $('.header-sp-menu__link').on('click', () => {
    if ($('.button-hamburger-menu').hasClass('open')) {
      $('.button-hamburger-menu').removeClass('open');
    }
    if ($('.header-nav').hasClass('open')) {
      $('.header-nav').removeClass('open');
    }
  });
}

async function sleep(delay) {
  await new Promise(resolve => setTimeout(resolve, delay));
};

async function loadTopMessage() {
  $('.fade-symbol').addClass('view');
  await sleep(300);
  $('.fade-title').addClass('view');
  await sleep(300);
  $('.fade-introduction').addClass('view');
  
}

function fadeEffect() {
  $('.fade').each(function() {
    const elementPosition = $(this).offset().top;
    const scrollPosition = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scrollPosition > elementPosition - windowHeight) {
      $(this).addClass('view');
    }
  });
}

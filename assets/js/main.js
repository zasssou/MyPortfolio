window.onload = function() { 
  loadTopMessage();
  fadeEffect();

  $(window).scroll(() => {
    fadeEffect();
  });

  $('.button-menu').on('click', () => {
    $('.button-menu').toggleClass('button-menu--open');
    $('#header').toggleClass('header--expand');
  });

  $('.header-menu__link').on('click', () => {
    console.log('aaaa')
    if ($('.button-menu').hasClass('button-menu--open')) {
      $('.button-menu').removeClass('button-menu--open');
    }
    if ($('#header').hasClass('header--expand')) {
      $('#header').removeClass('header--expand');
    }
  });
}

async function sleep(delay) {
  await new Promise(resolve => setTimeout(resolve, delay));
};

async function loadTopMessage() {
  $('.fade-symbol').addClass('view');
  await sleep(500);
  $('.fade-title').addClass('view');
  await sleep(500);
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

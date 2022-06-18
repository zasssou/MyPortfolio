$(function() {

  $('.button-menu').on('click', () => {
    $('.button-menu').toggleClass('button-menu--open');
    $('#header').toggleClass('header--expand');
  });

});

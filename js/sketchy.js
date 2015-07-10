var num = prompt("how many?", 100);

$(document).ready(function() {
  for(j=0;j < num; j++){
    $('#container').append('<div />');
    for(i=0;i < num; i++) {
      $('#container').append('<div class="square" />');
    };
  };
  $('.square').on('click', function() {
    $(this).toggleClass('blacked');
  });
  $('.square').on('mouseenter',function() {
    $(this).addClass('highlight');

  });
  $('.square').on('mouseleave', function() {
    $(this).removeClass('highlight');
  });
});

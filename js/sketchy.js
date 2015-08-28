$(document).ready(function() {
  console.log("Ready!") //test if ready
  var num = prompt("how many rows/columns? Between 1 and 64.", 64);
  console.log(num);//test if num set

  if (num > 1 && num < 65) {
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
  } else {
    alert("Sorry that won't work.");
  };
});

$(document).ready(function() {

  function getNum() {
    var numbers = prompt("how many rows/columns? Between 1 and 64.", 64);
    return numbers;
  };
  function createSketch() {
    var num = getNum();
    if (num > 1 && num < 65) {
      for(j=0;j < num; j++){
        $('#container').append('<div />');
        for(i=0;i < num; i++) {
          $('#container').append('<div class="square" />');
        }
      }
    }
  };

  $('.btn').on('click', function() {
    $(this).toggleClass("checked");
    $(this).siblings('.checked').removeClass('checked');
    var switchSketch = $(this).attr('id');

    console.log(switchSketch);

    switch (switchSketch) {
      case 'btn1':
          createSketch();

          $('.square').on('click', function() {
            $(this).toggleClass('blacked');
          });
          $('.square').on('mouseenter',function() {
            $(this).addClass('highlight');
          });
          $('.square').on('mouseleave', function() {
            $(this).removeClass('highlight');
          });

        console.log("howdy");
        break;
      case 'btn2':
        console.log("hi");
        break;

      case 'btn3':
        console.log("bye");
        break;

      default:
        console.log("didnt work");
    }
  });
});

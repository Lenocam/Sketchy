$(document).ready(function() {
  function getNum() {
    var numbers = prompt("how many rows/columns? Between 1 and 64.", 64);
    return numbers;
  };
  function createSketch() {
    $('#container').empty();
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
  function highLight() {
    $('.square').on('mouseenter',function() {
      $(this).addClass('highlight');
    });
    $('.square').on('mouseleave', function() {
      $(this).removeClass('highlight');
    });
  };

  $('.btn').on('click', function() {
    $(this).toggleClass("checked");
    $(this).siblings('.checked').removeClass('checked');
    var switchSketch = $(this).attr('id');
    createSketch();
    switch (switchSketch) {
      case 'btn1': //One at a time
          $('.square').on('click', function() {
            $(this).toggleClass('blacked');
          });
          highLight();
        break;
      case 'btn2': //Trippy Tracey
        highLight();
        //click blacked, mouseenter blacked, click not blacked, mouseenter not blacked
        $('.square').on('click', function() {
          $(this).toggleClass('blacked');
          $('.square').on('mouseenter',function() {
            $(this).toggleClass('blacked');
          });
        });

        break;
      case 'btn3': //I don't know yet
        //$('.square').on('click', function() {
        //  $(this).toggleClass('blacked');
        //});

        $('.square').hover(
          function() {
            $(this).animate({'backgroundColor': '#FF99FF'}, 'fast',
              $(this).css({'backgroundColor': '#FF99FF'}));
          },
          function() {
            $(this).animate({'backgroundColor': '#D4CBCB'}, 3000000,
              $(this).css({'backgroundColor': '#D4CBCB'}));
          }
        );

        break;

      default:
        console.log("didnt work");
    }
  });
});

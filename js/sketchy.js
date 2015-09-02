$(document).ready(function() {
  function getNum() {
    var numbers = prompt("how many rows/columns? Between 1 and 64.", 64);
    return numbers;
  };
  function createSketch() { //size of squares locked in
    $('#container').empty();
    var num = getNum();
    if(num >= 1 && num < 65) {
      for(j=0;j < num; j++){
        $('#container').append('<div />');
        for(i=0;i < num; i++) {
          $('#container').append('<div class="square" />');
        }
      }
    } else {
      alert("Sorry, Try a number smaller than 65 or larger than 0.")
    }
  };
  function sketchCreate() { //size of squares changes/user choice
    $('#container').empty();
    var num = getNum();
    if(num >= 1 && num < 65) {
      var squareSize = ($('#container').width() + $('#container').height())/(num*2) - 2;
      for (var i = 1; i <= num; i++) {
        $('#container').append('<div />');
        for(var j = 1; j <= num; j++) {
          $('#container').append('<div class=squareSquare />');
        }
      }
      $('.squareSquare').css('width', squareSize);
      $('.squareSquare').css('height', squareSize);
    } else {
      alert("Sorry, Try a number smaller than 65 or larger than 0.")
    }
  }; //end of sketchCreate
  function highLight() {
    $('.square').on('mouseenter',function() {
      $(this).addClass('highlight');
    });
    $('.square').on('mouseleave', function() {
      $(this).removeClass('highlight');
    });
  };
  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
  $('.btn').on('click', function() {
    $(this).toggleClass("checked");
    $(this).siblings('.checked').removeClass('checked');
    var switchSketch = $(this).attr('id');
    switch (switchSketch) {
      case 'btn1': //One at a time
        createSketch();
        $('.square').on('click', function() {
          $(this).toggleClass('blacked');
        });
        highLight();
        break;
      case 'btn2': //Drawn On/Off
        createSketch();
        highLight();
        //click blacked, mouseenter blacked, click not blacked, mouseenter not blacked
        $('.square').on('click', function() {
          $(this).toggleClass('blacked');
          $('.square').on('mouseenter',function() {
            $(this).toggleClass('blacked');
          });
        });
        break;
      case 'btn3': //Random Colors
        createSketch();
        $('.square').on("mouseenter", function() {
          $(this).css({
            backgroundColor: function(index, value) {
              return getRandomColor();
            }
          })
        })
        break;
      case 'btn4': //Opacity
        sketchCreate();
        $('.squareSquare').on('dblclick', function() {
          $(this).toggleClass('whited');
        });

        $('.squareSquare').on('mouseenter', function() {
            $(this).animate({opacity: '-=0.1'}, 100);
        });
        break;
      case 'btn5': //Random Colors again
        sketchCreate();
        $('.squareSquare').on("mouseenter", function() {
          $(this).css({
            backgroundColor: function(index, value) {
              return getRandomColor();
            }
          })
        });
        break;
      case 'btn6': //Trail
        sketchCreate();
        $('.squareSquare').on('mouseenter', function() {
        $(this).fadeTo(100,0);
  				$(this).mouseleave(function(){
  					$(this).fadeTo(800,1);
  				});
        });
        break;
      default:
        console.log("didnt work");
    }
  });
});

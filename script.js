
var player = 'P1';
var turn = 0;

var scoreP1 = 0;
var scoreP2 = 0;

var fadeIn = function(){

  $(".tic-square").hide();

  $("h1").hide().fadeIn('slow', function(){

    $(".tic-square").fadeIn('slow', function(){

      $('.player-name').text("Player One's Turn")
      .hide().fadeIn();

    });
  });

};

var xo = function(){

  if ( player === 'P1'
    && $(event.target).text() === '') {

    $(event.target).html('<h2>X</h2>').addClass('clicked');
    $('.player-name').text("Player Two's Turn")
    .hide().fadeIn();
    player = 'P2';
    turn += 1;
  }

  if (player === 'P2'
    && $(event.target).text() === '') {

    $(event.target).html('<h2>O</h2>').addClass('clicked');
    $('.player-name').text("Player One's Turn")
    .hide().fadeIn();
    player = 'P1';
    turn += 1;
  }

};
var checkWinner = function(){

  var combinations = [
    [$('#s1').text(), $('#s2').text(), $('#s3').text()],
    [$('#s4').text(), $('#s5').text(), $('#s6').text()],
    [$('#s7').text(), $('#s8').text(), $('#s9').text()],
    [$('#s1').text(), $('#s4').text(), $('#s7').text()],
    [$('#s2').text(), $('#s5').text(), $('#s8').text()],
    [$('#s3').text(), $('#s6').text(), $('#s9').text()],
    [$('#s1').text(), $('#s5').text(), $('#s9').text()],
    [$('#s3').text(), $('#s5').text(), $('#s7').text()],
  ];

  for (var i = 0; i < combinations.length; i++) {

    if (combinations[i].join('') === 'XXX') {
      $('.player-name').text("Player One Wins!");
      $('.tic-square').addClass('clicked');
      player = null;
      return 'P1';
    }

    if (combinations[i].join('') === 'OOO') {
      $('.player-name').text("Player Two Wins!");
      $('.tic-square').addClass('clicked');
      player = null;
      return 'P2';
    }
  };

};
var checkDraw = function(){

  if (checkWinner() != 'P1'
    && checkWinner() != 'P2'
    && turn === 9) {

    player = null;
    $('.player-name').text("Draw!").hide().fadeIn();
  }

};
var checkEnd = function(){

  if (player === null) {
    setTimeout(playAgain, 2000);
  }
};

var playAgain = function(){

  $('.player-name').text("Play again?")
      .addClass('play-again')
      .hide().fadeIn();
};
var reset = function(){

  if (checkWinner() === 'P1') {
    scoreP1 += 1;
  }
  if (checkWinner() === 'P2') {
    scoreP2 += 1;
  }

  $('.p1').text('Player One: ' + scoreP1);
  $('.p2').text('Player Two: ' + scoreP2);

  $('.tic-square').html('').removeClass('clicked');
  $('.player-name').removeClass('play-again');

  turn = 0;
  player = 'P1';
  $(".tic-square").hide().fadeIn();
  $('.player-name').text("Player One's Turn")
  .hide().fadeIn();

}

$( ".tic-square" ).on( "click", function(event) {

  xo();
  checkWinner();
  checkDraw();
  checkEnd();

});
$( ".game" ).on( "click", '.play-again', function() {

  reset();

});

fadeIn();

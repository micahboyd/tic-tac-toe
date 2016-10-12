
var playerName = 'P1'
var draw = 0;

var scoreP1 = 0;
var scoreP2 = 0;

var xo = function(){ // Fuction Adds 'X' or 'O' to grid

  if ( playerName === 'P1'
    && $(event.target).text() != 'X'
    && $(event.target).text() != 'O') {

    $(event.target).html('<h2>X</h2>');
    playerName = 'P2';
    draw += 1;
  }

  else if (playerName === 'P2'
    && $(event.target).text() != 'X'
    && $(event.target).text() != 'O') {
    $(event.target).html('<h2>O</h2>');
    playerName = 'P1';
    draw += 1;

  }

};

var playerNameChange = function(){ // Changes player turn

  if (playerName === 'P1') {
    $('.player-name').text("Player One's Turn");
  }
  else {
    $('.player-name').text("Player Two's Turn");
  }
};

var checkWinner = function(){ // Checks if 'X' or '0' are     placed in 3 a row, declares winner

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

    if (combinations[i].join('').replace(/<h2>/g, '')
      .replace('/', '') === 'XXX') {
      $('.player-name').text("Player One Wins!");
      playerName = null;
      // console.log('Player 1 wins');
      // scoreP1 += 1
      return true;
    }

    if (combinations[i].join('').replace(/<h2>/g, '')
      .replace('/', '') === 'OOO') {
      $('.player-name').text("Player Two Wins!");
      playerName = null;
      // console.log('Player 2 wins');
      // scoreP2 += 1
      return true;
    }

    if (draw === 9) {
      return false;
    }

  };


};

var checkDraw = function(){

  if (checkWinner() === false && draw === 9) {
    $('.player-name').text("Draw!");
    playerName = null;
    return true;
  }
}

var playAgain = function(){
   if ( playerName === null && $('.player-name .play-again') === false ) {
     $('.player-name').text("Play Again?").addClass('play-again');
   }
}


$( ".tic-square" ).on( "click", function() { // Runs above funtions when clicking a grid box

  xo();
  playerNameChange();
  checkWinner();
  checkDraw();
  setTimeout(playAgain, 3500);

});

$( ".game" ).on( "click", '.play-again', function() {
  $('.player-name').removeClass('play-again');
  console.log('play again clicked');
});


playerNameChange(); // Ensures it's Player One's turn at the beggining of the game.

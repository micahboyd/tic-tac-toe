
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

var checkWinner = function(){ // Checks if 'X' or '0' are placed in 3 a row, declares winner

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
      return 'P1';
    }

    if (combinations[i].join('').replace(/<h2>/g, '')
      .replace('/', '') === 'OOO') {
      $('.player-name').text("Player Two Wins!");
      playerName = null;
      return 'P2';
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
} // // Ends game with Draw

var playAgain = function(){
   if ( playerName === null) {
     $('.player-name').text("Play Again?").addClass('play-again');
   }
} // NEED TO FIX FIRE CONDITION //  // Game ends, ask reset

var reset = function(){

  if (checkWinner() === 'P1') {
    scoreP1 += 1;
    // console.log('P1 = ' + scoreP1);
  }
  if (checkWinner() === 'P2') {
    scoreP2 += 1;
    // console.log('P2 = ' + scoreP2);
  }

  $('.tic-square').text('');
  draw = 0;
  playerName = 'P1';

  // var playerOneScore = $('<div>').getClass('p1')
  // .text('Player One' + scoreP1);
  //
  // var playerTwoScore$('<div>').getClass('p2')
  // .text('Player Two' + scoreP2);


  playerNameChange();


} // Reset game, update score

$( ".tic-square" ).on( "click", function() {

  xo();
  playerNameChange();
  checkWinner();
  checkDraw();
  setTimeout(playAgain, 3500);

}); // Click tile

$( ".game" ).on( "click", '.play-again', function() {
  $('.player-name').removeClass('play-again');
  reset();
});

playerNameChange(); // Ensures it's Player One's turn at the beggining of the game.

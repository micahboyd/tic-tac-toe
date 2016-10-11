
var playerName = 'P1'

var xo = function(){ // Fuction Adds 'X' or 'O' to grid

  if ( playerName === 'P1'
    && $(event.target).text() != 'X'
    && $(event.target).text() != 'O') {

    $(event.target).text('X');
    playerName = 'P2'
  }

  else if (playerName === 'P2'
    && $(event.target).text() != 'X'
    && $(event.target).text() != 'O') {
    $(event.target).text('O');
    playerName = 'P1'
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
    [$('#1').text(), $('#2').text(), $('#3').text()],
    [$('#4').text(), $('#5').text(), $('#6').text()],
    [$('#7').text(), $('#8').text(), $('#9').text()],
    [$('#1').text(), $('#4').text(), $('#7').text()],
    [$('#2').text(), $('#5').text(), $('#8').text()],
    [$('#3').text(), $('#6').text(), $('#9').text()],
    [$('#1').text(), $('#5').text(), $('#9').text()],
    [$('#3').text(), $('#5').text(), $('#7').text()],
  ];

  for (var i = 0; i < combinations.length; i++) {

    if (combinations[i].join('') === 'XXX') {
      $('.player-name').text("Player One Wins!");
      playerName = null;
    }

    if (combinations[i].join('') === 'OOO') {
      $('.player-name').text("Player Two Wins!");
      playerName = null;
    }

  };

};


$( ".tic-square" ).on( "click", function() { // Runs above funtions when clicking a grid box

  xo();
  playerNameChange();
  checkWinner();

});

playerNameChange(); // Ensures it's Player One's turn at the beggining of the game.

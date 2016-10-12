
var playerName = 'P1'

var xo = function(){ // Fuction Adds 'X' or 'O' to grid

  if ( playerName === 'P1'
    && $(event.target).text() != 'X'
    && $(event.target).text() != 'O') {

    $(event.target).html('<h2>X</h2>');
    playerName = 'P2'
  }

  else if (playerName === 'P2'
    && $(event.target).text() != 'X'
    && $(event.target).text() != 'O') {
    $(event.target).html('<h2>O</h2>');
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
    }

    if (combinations[i].join('').replace(/<h2>/g, '')
      .replace('/', '') === 'OOO') {
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

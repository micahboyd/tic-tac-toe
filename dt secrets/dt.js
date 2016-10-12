var board = 'e e e e e e e e e'.split(' ');

$('.board').on('click', function(){

  // update move
  board[2] = 'd'

  // redraw
  $('.board').empty();

  for (var i = 0; i < board.length; i++) {
    $('.board').append( $('<div>').text(board[i]))
  }
})

// draw board for the first time
for (var i = 0; i < board.length; i++) {
  $('.board').append( $('<div>').text(board[i]))
}

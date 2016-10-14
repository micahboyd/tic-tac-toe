
##Tic-tac-toe Project
  14.10.16

  [Game link](https://www.micahhope.github.io/tic-tac-toe "tic-tac-toe")

###Intro

  This is a simple tic-tac-toe game created using HTML, CSS, JavaScript, and jQuery. This is my first project with General Assembly and also my first interactive web app. For these reasons I chose to keep it simple and using hardcoded solutions. This has obvious limitations such as scalability, however I chose to go this way so that I could implement  the concepts I learned so far with relative ease.

###Game Approach

  The approach I took was to have a changing global variable that would determine the result of a number of functions, such as displaying who's turn it is, whether to display an X or an O, and if the game has ended. To check who won I had a function that checked the possible winning combinations for either X or O. And to determine if the game ended in a draw I used another global variable to count the number of turns that have taken placed. If neither player have won and the counter is set to the maximum number of turns, then the game is a draw.

  When the game has ended a function is invoked and displays a message if the user would like to play again. If the user clicks the message a reset function is invoked, clearing the board and and displaying a score counter which is updated every round.

###Animation

  I used a combination of CSS and jQuery to create the animations and transitions. For CSS I mainly used hover on class attributes to change the appearance of elements. With jQuery, I searched for objets and made them fade in as I display them. I also removed CSS elements such after click events by removing classes with jQuery.

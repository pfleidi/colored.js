#!/usr/bin/env node

require('exemplor');
require('./lib/colored');

eg('colorises text', function(Check) {
  var black = "black".black(),
        red = "red".red(),
      green = "green".green(),
     yellow = "yellow".yellow(),
       blue = "blue".blue(),
    magenta = "magenta".magenta(),
       cyan = "cyan".cyan(),
      white = "white".white();

  Check(black);
  Check(red);
  Check(green);
  Check(yellow);
  Check(blue);
  Check(magenta);
  Check(cyan);
  Check(white);
});

eg('adds extras', function(Check) {
  var reset = "reset".reset(),
       bold = "bold".bold(),
  underline = "underline".underline(),
   reversed = "reversed".reversed();

  Check(reset);
  Check(bold);
  Check(underline);
  Check(reversed);
});

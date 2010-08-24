#!/usr/bin/env node

var sys = require('sys'),
  style = require('./lib/colored');

sys.puts("Colored.js is totally " + style.extras.underline(style.foreground.red("rockin'")));
sys.puts("Colored.js is totally " + style.foreground.black(style.background.yellow("rockin'")));

// Extra credit
for(var f in style.foreground) {
  String.prototype[f] = style.foreground[f];
}

sys.puts("greener grass!".green());

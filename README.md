# Colored.js

Brighten up your Node.js/Narwhal scripts, add some color to them!

    var sys = require('sys'),
      style = require('./lib/colored');

    sys.puts("Colored.js is totally " + style.extras.underline(style.foreground.red("rockin'")));
    sys.puts("Colored.js is totally " + style.foreground.black(style.background.yellow("rockin'")));

    // Extra credit
    for(var f in style.foreground) {
      String.prototype[f] = style.foreground[f];
    }

    sys.puts("greener grass!".green());


Colored doesn't output any color if the process is run in a non-TTY environment (i.e. running specs from Textmate). This however uses a [proposed addition to Node](http://github.com/chrislloyd/node/commit/d5a439c4d99a904ac9bf52c458682891cce5ccc6).

## License

Copyright (c) 2009 Chris Lloyd, Sven 'pfleidi' Pfleiderer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

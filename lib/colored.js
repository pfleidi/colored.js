(function(){

  function esc(str) {
    return "\x1B["+str;
  }

  var colors = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'];

  for (var i=0; i<colors.length; i++){
    var color = colors[i];
    (function(i) {
      String.prototype[color] = function(){
        return esc(30+i+'m') + this + esc('0m');
      }
    })(i);
  };

});

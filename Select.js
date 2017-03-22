exports.Select = function() {
  //Private
  function Select() {
    if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(this);
      range.select();
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(this);
      window.getSelection().addRange(range);
    }
  }
  //Global
  var query = document.querySelectorAll('pre, :not(pre) > code');
  Each(query, function(index, element) {
    if (document.addEventListener) {
      element.addEventListener("click", Select);
    } else if (document.attachEvent) {
      element.attachEvent("onclick", Select);
    }
  });
};

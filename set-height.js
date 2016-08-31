(function () {
  function size () {
    var section = document.getElementsByClassName('content-section');
    var content = document.getElementsByClassName('content');

    [].forEach.call(section, function (el) {
      el.style.height = window.innerHeight + 'px';
    });

    [].forEach.call(content, function (el) {
      el.style.marginTop = Math.floor(window.innerHeight / 4) + 'px';
    });
  }

  size();

  window.onresize = size;
})();

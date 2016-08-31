(function () {
  window.addEventListener('scroll', _.throttle(scroll, 50));

  function scroll () {
    var body = document.body;
    var scrollableHeight = body.scrollHeight - window.innerHeight;
    var scrolledHeight = body.scrollTop;
    var percentageScrolled = Math.floor(1000 * scrolledHeight / scrollableHeight) / 10;

    console.log('percentageScrolled: ', percentageScrolled);

    function rgb (red, green, blue) {
      return 'rgb(' + red + ',' + green + ',' + blue + ')'
    };

    function setBackground (red, green, blue) {
      console.log('red: ', red, 'green: ', green, 'blue: ', blue);
      body.style.backgroundColor = rgb(red, green, blue);
    };

    // to choose colors go to: http://www.rapidtables.com/web/color/RGB_Color.htm
    // And match them to the numbers in the setBackground function

    // 4 new colours: rgb(249, 192, 12), rgb(0, 185, 241), rgb(114, 0, 218), rgb(249, 50, 12);

    // rgb(193, 139, 0) rgb(0, 133, 208) rgb(40, 68, 200) rgb(88, 0, 191)

// rgb(54, 32, 104)  rgb(32, 24, 75);
    if (percentageScrolled < 100 / 4) {
      setBackground(
        32 - Math.floor(249 * percentageScrolled / (100 / 4)),
        24 - Math.floor(7 * percentageScrolled / (100 / 4)),
        75 + Math.floor(229 * percentageScrolled / (100 / 4))
      );
    } else if (percentageScrolled < 2 * 100 / 4) {
      setBackground(
        0 + Math.floor(114 * (percentageScrolled - 100 / 4) / (100 / 4)),
        133 - Math.floor(185 * (percentageScrolled - 100 / 4) / (100 / 4)),
        208 - Math.floor(23 * (percentageScrolled - 100 / 4) / (100 / 4))
      );
    } else if (percentageScrolled < 3 * 100 / 4) {
      setBackground(
        40 + Math.floor(135 * (percentageScrolled - 2 * 100 / 4) / (100 / 4)),
        68 + Math.floor(50 * (percentageScrolled - 2 * 100 / 4) / (100 / 4)),
        200 - Math.floor(206 * (percentageScrolled - 2 * 100 / 4) / (100 / 4))
      );
    } else {
      setBackground(
        88,
        0,
        191
      );
    }
  };
  scroll();
})();

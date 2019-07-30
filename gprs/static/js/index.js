$(document).ready(() => {
  // Redraw table every second
  setInterval( function () {
      $("#device-data").load(location.href+"#device-data");
  }, 20000 );
};


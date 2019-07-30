$(document).ready(() => {
  // Redraw table every second
  setInterval( function () {
      console.log("refresh data\n");
      $("#device-data").load(location.href+"#device-data");
  }, 20000 );
};


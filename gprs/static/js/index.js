$(document).ready(() => {
  // Redraw table every second
  $("#device-manage-table").bootstrapTable("refresh", {
    silent: true //静态刷新
  });
});




function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {  
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

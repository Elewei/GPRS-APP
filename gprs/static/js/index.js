$(document).ready(() => {
  $('#open').on('click', ()=>{
    if($('#open').is('.button-operation-on')) {
      /* device is Shutdown, Startup */
      $('#open').addClass('button-operation-off');
      $('#open').removeClass('button-operation-on');
      $('#open').text('开启');
      console.log('Send turn-off to Device\n');

    $.getJSON($SCRIPT_ROOT + '/off', {
      status: 0,
    }, function(data) {
      console.log(data.result);
    });

    } else {
      /* device is On, shutdown */
      $('#open').addClass('button-operation-on');
      $('#open').removeClass('button-operation-off');
      $('#open').text('关闭');
      console.log('Send turn-on to Device\n');
      $.getJSON($SCRIPT_ROOT + '/on', {
        status: 0,
      }, function(data) {
        console.log(data.result);
      });      
    }
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

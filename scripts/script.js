
/* Panel & Toggle Toggles
---------------------------------------------------------------------------------------------------- */

$(document).ready(function() {

  // Panel Open

  $('.open').click(function(){
    var myelement = $(this).attr('href');

    $(myelement).removeClass('closed closing');
    $(myelement).addClass('opening');

    return false;
  });

  // Panel Close

  $('.close').click(function(){
    var myelement = $(this).attr('href');

    $(myelement).removeClass('opening');
    $(myelement).addClass('closing');

    setTimeout(function() {
      $(myelement).addClass('closed');
    }, 500);

    return false;
  });

  // Toggle Toggle

  $('.toggle').click(function(){
    var myelement = $(this).attr('href');

    $('.toggle.active').removeClass('active').addClass('inactive');
    $(this).addClass('active').removeClass('inactive');
    $('.paytype.active').removeClass('active').addClass('inactive');
    $(myelement).addClass('active').removeClass('inactive');

    return false;
  });
});
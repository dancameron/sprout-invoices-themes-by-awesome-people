
/* Panel & Toggle Toggles
---------------------------------------------------------------------------------------------------- */

$(document).ready(function() {

  // Panel Open

  $('.open').click(function(){
    var myelement = $(this).attr('href');

    $(myelement).removeClass('inactive');
    $(myelement).addClass('active');

    return false;
  });

  // Panel Close

  $('.close').click(function(){
    var myelement = $(this).attr('href');

    $(myelement).removeClass('active');
    $(myelement).addClass('inactive');

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
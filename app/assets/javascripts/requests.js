$( document ).ready(function() {

  $('.make_call').on('click', function(){
    console.log(',....')
    var url = $(this).data('url');

    $.ajax({
      method: 'GET',
      url: url,
      dataType: 'script'
    }).done(function() {
      $('#ringing').show()
    });

  });

});

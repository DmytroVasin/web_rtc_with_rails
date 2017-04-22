$( document ).ready(function() {

  $('.make_call').on('click', function(){
    var caller = $(this).data('caller');
    var callee = $(this).data('callee');

    var make_call_url = '/dashboards/call?caller=' + caller + '&callee=' + callee;
    var stop_call_url = '/dashboards/stop?caller=' + caller + '&callee=' + callee;

    $.ajax({
      method: 'GET',
      url: make_call_url,
      dataType: 'script'
    }).done(function() {
      $('#ringing').show()
      $('#ringing .stop_call').data('url', stop_call_url)
    });

  });

  $('.stop_call').on('click', function(){
    var url = $(this).data('url');

    $.ajax({
      method: 'GET',
      url: url,
      dataType: 'script'
    }).done(function() {
      $('#ringing').hide()
    });

  });

  $('#answerIgnore .answer').on('click', function(){
    var caller = $(this).data('caller')
    var callee = $(this).data('callee')
    var url = "/dashboards/answer?caller=" + caller + '&callee=' + callee

    $.ajax({
      method: 'GET',
      url: url,
      dataType: 'script'
    }).done(function() {
      $('#answerIgnore').hide()
    });

  });

  $('#answerIgnore .ignore').on('click', function(){
    var caller = $(this).data('caller')
    var callee = $(this).data('callee')
    var url = "/dashboards/ignore?caller=" + caller + '&callee=' + callee

    $.ajax({
      method: 'GET',
      url: url,
      dataType: 'script'
    }).done(function() {
      $('#answerIgnore').hide()
    });

  });

});

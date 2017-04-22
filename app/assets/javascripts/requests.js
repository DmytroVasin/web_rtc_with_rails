$( document ).ready(function() {

  $('.make_call').on('click', function(){
    var callModal = $('#call_modal');
    var calleName = $(this).data('callee-name')
    var calleId = $(this).data('callee-id')

    callModal.modal({ backdrop: 'static', keyboard: false })
    callModal.find('.modal-title').text("Call to: '" + calleName + "'")

    var make_call_url = '/dashboards/call?to=' + calleId;

    $.ajax({
      method: 'GET',
      url: make_call_url,
      dataType: 'script'
    }).done(function() {
      callModal.find('#ringing').show()
      callModal.find('#stop_call').data('callee-id', calleId)
      callModal.find('#stop_call').show()
    });
  });

  $('#stop_call').on('click', function () {
    var callModal = $('#call_modal');
    var calleId = $(this).data('callee-id')

    var stop_call_url = '/dashboards/stop?to=' + calleId;

    $.ajax({
      method: 'GET',
      url: stop_call_url,
      dataType: 'script'
    }).done(function() {
      callModal.modal('hide');
      callModal.find('.modal-title').text("");
      callModal.find('#ringing').hide();
      callModal.find('#stop_call').hide();
    });
  })

  $('#call_modal #ignore').on('click', function(){
    var callModal = $('#call_modal');
    var calleId = $(this).data('caller-id');
    var ignore_url = '/dashboards/ignore?to=' + calleId;

    $.ajax({
      method: 'GET',
      url: ignore_url,
      dataType: 'script'
    }).done(function() {
      callModal.modal('hide');
      callModal.find('.modal-title').text('');
      callModal.find('#connect').hide()
      callModal.find('#ignore').hide()
    });
  });

  $('#call_modal #connect').on('click', function(){
    var calleId = $(this).data('caller-id');
    var connect_url = '/dashboards/connect?to=' + calleId;

    $.ajax({
      method: 'GET',
      url: connect_url,
      dataType: 'script'
    })
  });

  $('#call_modal #disconnect').on('click', function(){
    var userIds = $(this).data('user_ids');
    var disconnect_url = '/dashboards/disconnect?user_ids=' + userIds;

    $.ajax({
      method: 'GET',
      url: disconnect_url,
      dataType: 'script'
    });
  });

});

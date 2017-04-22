$( document ).ready(function() {

  function nulifyModal() {
    var callModal = $('#call_modal');

    callModal.modal('hide')
    callModal.find('#ringing').hide()
    callModal.find('.modal-title').text('')
    callModal.find('#ignore').hide()
    callModal.find('#connect').hide()
    callModal.find('#stop_call').hide()
    callModal.find('#disconnect').hide()
    callModal.find('#connect-block').hide()
  };

  App.cable.subscriptions.create({channel: 'ApplicationCable::UsersCallToChannel', user_id: userId }, {
    received: function(data) {
      this.startIncomingCall(data);
    },
    startIncomingCall: function(data) {
      var callModal = $('#call_modal');

      callModal.find('.modal-title').text("Incoming call from: '" + data.name + "'")

      callModal.modal('show')
      callModal.find('#ringing').show()
      callModal.find('#ignore').data('caller-id', data.caller_id).show()
      callModal.find('#connect').data('caller-id', data.caller_id).show()
    }
  });

  App.cable.subscriptions.create({channel: 'ApplicationCable::UsersStopCallToChannel', user_id: userId }, {
    received: function(data) {
      this.stopIncomingCall(data);
    },
    stopIncomingCall: function(data) {
      nulifyModal()
    }
  })

  App.cable.subscriptions.create({channel: 'ApplicationCable::ConnectChannel', user_id: userId }, {
    received: function(data) {
      $('#connect-block').show()
      $('#disconnect').data('user_ids', data.user_ids).show()

      $('#ringing').hide()
      $('#ignore').hide()
      $('#connect').hide()
      $('#stop_call').hide()

      Room.initialize(data.room)
    }
  })

  App.cable.subscriptions.create({channel: 'ApplicationCable::UsersIgnoreToChannel', user_id: userId }, {
    received: function(data) {
      nulifyModal()

      $('.container').prepend('<div class="alert alert-danger"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>User busy</div>')
    }
  })

  App.cable.subscriptions.create({channel: 'ApplicationCable::DisconnectChannel', user_id: userId }, {
    received: function(data) {
      nulifyModal()

      $('.container').prepend('<div class="alert alert-success"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>Call ended</div>')

      Room.leaveRoom()
    }
  })

});

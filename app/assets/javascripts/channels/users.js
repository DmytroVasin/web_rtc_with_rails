App.messages = App.cable.subscriptions.create('UsersChannel', {
  received: function(data) {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log(data);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  }
});

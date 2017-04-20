// app/assets/javascripts/cable.js

//= require action_cable
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require_tree ./channels


(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);

//= require jquery
//= require jquery_ujs
//= require_tree .
//= require_self

$( document ).ready(function() {

if (!$("#dashboard").length && App.task) {
  App.task.unsubscribe()
  App.task = null
}

});

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require semantic_ui/semantic_ui
//= require marked
//= require vue
//= require_tree .
$(document).ready(function() {
  semanticInitializers();
});

$( document ).on('page:load',function() {
  semanticInitializers();
});

function semanticInitializers() {
	new Vue({
		el: "#editor",
		data: {
		  input: ''
		},
		filters: {
		  marked: marked
		}
	})

	$('.popup')
	  .popup({
    hoverable: true, 
    position: 'top left'
})
	;

	$('.small.modal')
	  .modal('attach events', '.addbrick', 'show')
	;
}
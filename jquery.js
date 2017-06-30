$(document).ready(function() {
	$('form').submit(function() {
		var firstname = $('#first_name').val();
		var lastname = $('#last_name').val();
		var email = $('#email').val();
		var contact =$('#phone').val();
		var addval = '<tr><td>' + firstname + '</td><td>' + lastname + '</td><td>' + email + '</td><td>' + contact + '</td></tr>';
		$('#tableinfo').append(addval);
		console.log($(this).serialize());
		return false
	});
});
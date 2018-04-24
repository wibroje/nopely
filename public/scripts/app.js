$(document).ready(function(){

	$('#signup-form').on('submit', function(e){
		e.preventDefault();

			let data = {
				username: $('#username-input').val(),
				email: $('#email-input').val(),
				password: $('#password-input').val()
			}

			$.ajax({
			url  : "/signup",
			method : "POST",
			data : data,
			success : function(response){
				$('.form-control').val('');

				$("#welcome").append("<h2>" + "welcome to nopely, " + response.username + "!" + "</h2>").fadeIn();
			}
		})

	})

});
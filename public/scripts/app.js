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
				$("#welcome").append("<h2>" + "welcome to nopely, " + response.username + "!" + "</h2>").hide().fadeIn(2000).fadeOut(2000);

					setTimeout(function(){
						window.location = "/login"
					}, 4000)

			}
		})

	})

	$('#login-form').on('submit', function(e){
		e.preventDefault();

			let data = {
				email: $('#email-input').val(),
				password: $('#password-input').val()
			}

			$.ajax({
				url : "/sessions",
				method : "POST",
				data : data,
				success : function(response){
					$('.form-control').val("");
					window.location = "/profile"
				}
			})
	})

//////////////////////////////////////////////////////////////////

var getGenre = 'https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=193da39670a2ca585a07c3b83b8d786c';

var movieImage = 'https://api.themoviedb.org/3/configuration?api_key=193da39670a2ca585a07c3b83b8d786c';

var actionGen = 'https://api.themoviedb.org/3/genre/28/movies?api_key=193da39670a2ca585a07c3b83b8d786c&page=1000'
	$('#togenre').on('click', function(e){
	
	$('#action-btn').on('click', function(){
		$.get(actionGen, function(response){
			response.results.forEach(function(movie){
				var rating = movie.popularity;
				var actionList = movie.title;
				console.log(actionList)
			})
		})
	})
});

});






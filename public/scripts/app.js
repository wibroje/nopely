$(document).ready(function(){

	$('#signup-form').on('submit', function(e){
		e.preventDefault();

			let data = {
				username: $('#username-input').val(),
				email: $('#email-input').val(),
				password: $('#password-input').val()
			}

			$.ajax({
			url  : "/users",
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

var rando = Math.floor(Math.random() * 20);

if( rando == 0){
	rando == .1;
}

var scifiGen = `https://api.themoviedb.org/3/genre/878/movies?api_key=193da39670a2ca585a07c3b83b8d786c&page=${rando}`
var horrorGen = `https://api.themoviedb.org/3/genre/27/movies?api_key=193da39670a2ca585a07c3b83b8d786c&page=${rando}`
var romanceGen = `https://api.themoviedb.org/3/genre/10749/movies?api_key=193da39670a2ca585a07c3b83b8d786c&page=${rando}`
	


	$('#fantasy-modal').on('click', function(){

		var fantasyGen = `https://api.themoviedb.org/3/genre/14/movies?api_key=193da39670a2ca585a07c3b83b8d786c&page=${rando}`;

		$.get(fantasyGen, function(response){
			response.results.forEach(function(movie){
						
					$.ajax({
						url : "/watchlist",
						method : "POST",
						data : movie,
						success : function(response){
							console.log('posted ', response)

						}
					})
			})
		})
	})
});







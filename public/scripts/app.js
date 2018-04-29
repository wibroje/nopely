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


	$('#update-form').on('submit', function(e){
		e.preventDefault();
			var id = $(this).attr('data-id')
			let data = $('#username-change').val();
				
			$.ajax({
				url : "/users/" + id,
				method : "PUT",
				data : data,
				success : function(response){
					console.log('update')
				}
			})
	})


	$('#delete-account').on('click', function(){
		var id = $(this).attr('data-id')

		$.ajax({
			url : "/users/" + id,
			method : "DELETE",
			success : function(){
				window.location ="/"
			}

		})
	})

//////////////////////////////////////////////////////////////////

var rando = Math.floor(Math.random() * 100);
	
	$('#fantasy-modal').on('click', function(){

		var fantasyGen = 'https://api.themoviedb.org/3/genre/14/movies?api_key=193da39670a2ca585a07c3b83b8d786c&page=' + '1' + rando;

		$.get(fantasyGen, function(response){
			var items = response.results;
			var item = items[Math.floor(Math.random()*items.length)];

					$.ajax({
						url : "/watchlist",
						method : "POST",
						data : item,
						success : function(response){
							console.log('fantasy sent')
								window.location ="/watchlist"
						}
					})
			})
		
	})

	$('#scifi-modal').on('click', function(){

		var scifiGen = 'https://api.themoviedb.org/3/genre/878/movies?api_key=193da39670a2ca585a07c3b83b8d786c&page=' + '1' + rando;

		$.get(scifiGen, function(response){
			var items = response.results;
			var item = items[Math.floor(Math.random()*items.length)];
						
					$.ajax({
						url : "/watchlist",
						method : "POST",
						data : item,
						success : function(response){
							console.log('scifi sent')
								window.location ="/watchlist"
						}
					})
			})
		
	})

	$('#horror-modal').on('click', function(){

		var horrorGen = 'https://api.themoviedb.org/3/genre/27/movies?api_key=193da39670a2ca585a07c3b83b8d786c&page=' + '1' + rando;

		$.get(horrorGen, function(response){
			var items = response.results;
			var item = items[Math.floor(Math.random()*items.length)];
						
					$.ajax({
						url : "/watchlist",
						method : "POST",
						data : item,
						success : function(response){
							console.log('horror sent')
								window.location ="/watchlist"
						}
					})
				
			})
		})

	$('#romance-modal').on('click', function(){

		var romanceGen = 'https://api.themoviedb.org/3/genre/10749/movies?api_key=193da39670a2ca585a07c3b83b8d786c&page=' + '1' + rando;

		$.get(romanceGen, function(response){
			var items = response.results;
			var item = items[Math.floor(Math.random()*items.length)];
						
					$.ajax({
						url : "/watchlist",
						method : "POST",
						data : item,
						success : function(response){
							console.log('romance sent')
								window.location ="/watchlist"
						}
					})
				
			})
	})

	$('.movie-box').on('click', '.deleteBtn', function(){
		var id = $(this).attr('data-id')
		$.ajax({
			url : "/watchlist/" + id,
			method : "DELETE",
			success : function(result){
    				$('body').fadeOut(1000);
            				location.reload(true);
    					setTimeout(function(){
        					$('body').fadeIn(1000);
    			}, 2000);
}
			})



		})
	

});







$(function() {

	var getInfo = function(callback) {
		Twitch.api({method: 'channel'}, function(error, channel) {
		  callback(channel);
		});
	}

	 Twitch.init({clientId: 'pugdziizvbmk12pd1qkp8svt3ptb7zp'}, function(error, status) {
	 	
	 	console.log(status);

	 	if (status.authenticated) {
	 		$('.twitch-connect').hide();

	 		getInfo(function(data) {
	 			$('strong').text(data.display_name);
	 			$('#picture').attr('src','http://static-cdn.jtvnw.net/jtv_user_pictures/soldiercorp_-profile_image-3446f50591a2e810-300x300.png');
	 			$('#visit').text('Visita mi canal').attr('href','http://www.twitch.tv/soldiercorp_');
	 		});
	 	} else {
	 		$('#login-info').hide();
	 	}   

	 });

	 var login = function()
	 {
	 	Twitch.login({
		  scope: ['user_read', 'channel_read']
		});
	 }

	 var logout = function()
	 {
	 	Twitch.logout(function(error) {
		    $('.twitch-connect').show();

		    $('strong').text('');
		    $('#picture').attr('src','');
		    $('#visit').text('').attr('href','#');
		    
		    $('#login-info').hide();
		});
	 }

	 $('.twitch-connect').click(function(e) {
	 	e.preventDefault();

	 	login();
	 })

	 $('.twitch-disconnect').click(function(e) {
	 	e.preventDefault();

	 	logout();
	 })

})
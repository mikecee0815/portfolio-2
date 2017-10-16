$(' nav a').on('click', function(e){
	e.preventDefault();
	var url = this.href;
	$('nav a.current').removeClass('current');
	$(this).addClass('current');
	$('#content-container').remove();                          // Remove old content
  	$('#content').load(url + ' #content-container').hide().fadeIn('slow'); // New content
});
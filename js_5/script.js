$(document).ready(function(){
	$(function(){
		$('#form').submit(function(event){
			$('#valid').load('validator.php',
				$(this).serialize(),
				function(data, textStatus){
					if (data == 'true') {
						$(this).text('Збс')
					}
					else if (data == 'false') {
						$(this).text('Не оч')
					}
				});
			event.preventDefault();
		});
	});
});
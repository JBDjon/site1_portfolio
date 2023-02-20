
$(document).ready(function () {
	$('.burger').click(function () {
		$('.nav__list').toggleClass('show');
		$('.nav__flex-items').toggleClass('show');
		$('.burger').toggleClass('show');
	});
});


$(function () {
	//подія на клік гамбургера
	$('.miniMenu').click(function () {
		$('.ul2').css({
			display: 'block'
		});
		$('.arrowRight').css({
			display: 'block'
		});
		$(this).css({
			display: 'none'
		});
		$('.arrowRight').animate({
			opacity: '1'
		}, 400);
	});
	//подія на клік кнопки 'сховати меню'
	$('.arrowRight').click(function () {
		$('.ul2').css({
			display: 'none'
		});
		$('.miniMenu').css({
			display: 'block'
		});
		$(this).css({
			display: 'none'
		});
	});
	//подія на клік по одному із пунктів меню
	$('.navLink2').click(function () {
		$('.miniMenu').css({
			display: 'block'
		});
		$('.ul2').css({
			display: 'none'
		});
		$('.arrowRight').css({
			display: 'none'
		});
	});
	//поява кнопки 'повернутись вгору' при скролі
	$(window).bind("scroll", function () {
		if ($(this).scrollTop() > 200) {
			$(".back-to-top").fadeIn(400);
		} else {
			$('.back-to-top').fadeOut(400);
		}
	});
	$('.back-to-top').click(function () {
		$('html, body').animate({
			scrollTop: '0px'
		}, 1000);
	});
})

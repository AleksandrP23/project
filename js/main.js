$(document).ready(function () {

	//slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a, a.mouse_scroll, a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
		highlightSelector: "nav a"
	});

	// FancyBox - галерея
	// $(".about-img__video").fancybox({

	// });

	// jQery validate
	$("#contact-form").validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			message: {
				required: true
			}
		},

		messages: {
			name: "Пожалуйста, введите свое имя",
			email: {
				required: "Пожалуйста, введите свой email",
				email: "Email адрес должен быть в формате name@domain.com. Возможно вы ввели email с ошибкой."
			},
			message: "Пожалуйста, введите текст сообщения"
		},

		submitHandler: function (form) {
			ajaxFormSubmit();
		}
	})

	// Функция AJAX запрса на сервер
	function ajaxFormSubmit() {
		var string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку. 

		// Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string

			// Функция если все прошло успешно
			success: function (html) {
				$("#contact-form").slideUp(800);
				$('#answer').html(html);
			}
		});

		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false;
	}

	// slick слайдер

	$('.slider').slick({
		dots: true
	});

	$(window).scroll(function () {
		if ($(document).scrollTop() > $(".header").height()) {
			$(".animate-container").addClass("animate");
			$(".cl").addClass("animate-logo");
		} else {
			$(".animate-container").removeClass("animate");
			$(".cl").removeClass("animate-logo");
		}
	});
});
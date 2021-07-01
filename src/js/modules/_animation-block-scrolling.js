//получаем все элементы с классом _anim-items
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {

	window.addEventListener('scroll', animOnScroll);

	function animOnScroll(argument) {
		for (var i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			//добавляем класс _active элименту с классом _anim-items при появлении 1/4 от его размера
			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
        //удалем класс _active если у блока есть класс _anim-again, что бы блок анатомировался  снова при прокрутке вверх
				if (animItem.classList.contains('_anim-again')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}

	//функция вычисляет на сколько обьект ниже верха страницы
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageXOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollTop}
	}

	//запускаем функцию animOnScroll при загрузки страницы с задержкой 0,3секунды
	setTimeout(() => {
		animOnScroll();
	}, 300);
}

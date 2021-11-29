var addAnimation = function(event) { // Функция анимации добавления товара в корзину
    var butWrap = $(event.target.closest('.button-add-cart')).parents('.card-buttons'); /* Получаем родительский элемент кнопки, по которой кликнули */
  	butWrap.append('<div class="animtocart"></div>'); /* Добавляем кружок, который будет анимирован и улетать от кнопки в корзину */
    $('.animtocart').css({ /* Присваиваем стили кружку и позицию курсора мыши */
    	'position' : 'absolute',
			'background' : '#1890ff',
			'width' :  '40px',
			'height' : '40px',
			'border-radius' : '100px',
			'z-index' : '9999999999',
			'left' : event.pageX-10,
    	'top' : event.pageY-10,
    });
	var cart = $('.button-cart').offset(); /* Получаем кнопку "Корзина" */
	$('.animtocart').animate({ top: cart.top + cart.top/2 + 'px', left: cart.left + 'px', width: 0, height: 0 }, 2000, function(){ /* Делаем анимацию полёта кружка от кнопки в корзину и по окончанию, удаляем его */
		$(this).remove();
    });
}
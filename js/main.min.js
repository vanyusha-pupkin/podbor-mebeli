'use strict';

//поддержка формата webp в css
// @include('vendor/_modernizr-webp.js');

// @include('vendor/_jquery-3.6.0.min.js');
// @include('vendor/_slick.js');

//открытие закрытие выпадающего меню
//@include('modules/_main-nav.js');

//открытие закрытие выпадающего меню
// @include('modules/_hamburger.js');

//переключение слайдов
// @include('modules/_slider.js');

//переключение слайдов
(function () {

  const modalOpenElements = document.querySelectorAll('[data-modal]');
  const body = document.querySelector('body');
  const lockPadding = document.querySelectorAll(".lock-padding");

  // console.log(modalOpenElements);
  // console.log('modalOpenElements');

  let unlock = true;

  const timeout = 400;

  if (modalOpenElements.length > 0) {
    for (let index = 0; index < modalOpenElements.length; index++) {
      const modalOpenElement = modalOpenElements[index];
      modalOpenElement.addEventListener("click", function (evt) {
        evt.preventDefault();
        const modalName = modalOpenElement.dataset.modal;
        const curentModal = document.getElementById(modalName);
        modalOpen(curentModal);
      });
    }
  }


  const modalCloseIcon = document.querySelectorAll('.close-modal');
  if (modalCloseIcon.length > 0) {
    for (let index = 0; index < modalCloseIcon.length; index++) {
      const el = modalCloseIcon[index];
      el.addEventListener('click', function (e) {
        modalClose(el.closest('.modal'));
        e.preventDefault();
      });
    }
  }


  function modalOpen(curentModal) {
    if (curentModal && unlock) {
      const modalActive = document.querySelector('.modal.open');
      if (modalActive) {
        modalClose(modalActive, false);
      } else {
        bodyLock();
      }
      curentModal.classList.add('open');
      curentModal.addEventListener("click", function (e) {
        if (!e.target.closest('.modal__content')) {
          modalClose(e.target.closest('.modal'));
        }
      });
    }
  }

  function modalClose(modalActive, doUnlock = true) {
    if (unlock) {
      modalActive.classList.remove('open');
      if (doUnlock) {
        bodyUnLock();
      }
    }
  }


  function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.page__wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
      }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('page__body--lock');

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  function bodyUnLock() {
    setTimeout(function () {
      if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
          const el = lockPadding[index];
          el.style.paddingRight = '0px';
        }
      }
      body.style.paddingRight = '0px';
      body.classList.remove('page__body--lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
      const modalActive = document.querySelector('.modal.open');
      modalClose(modalActive);
    }
  });



  (function () {
    // проверяем поддержку
    if (!Element.prototype.closest) {
      // реализуем
      Element.prototype.closest = function (css) {
        var node = this;
        while (node) {
          if (node.matches(css)) return node;
          else node = node.parentElement;
        }
        return null;
      };
    }
  })();

  (function () {
    // проверяем поддержку
    if (!Element.prototype.matches) {
      // определяем свойство
      Element.prototype.matches = Element.prototype.matchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector;
    }
  })();

})();
;

//переключение акордиона
//@include('modules/_accordion.js');

//img-to-bg
//@include('modules/_img-to-bg.js');

//анимация блоков при скроллинге
// @include('modules/_animation-block-scrolling.js');


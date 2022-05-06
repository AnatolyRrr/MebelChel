const hamburger = document.querySelector('.hamburger');
const mainMenu = document.querySelector('.header__nav');
const headerLinks = document.querySelectorAll('.header__link');
const footerLinks = document.querySelectorAll('.footer__link');
const catalogLinks = document.querySelectorAll('.catalog__link');
const catalogBtns = document.querySelectorAll('.product__btn');
const modalWindow = document.querySelector('.modal');
const modalUserName = document.getElementById('user__name');
const modalOrderTitle = document.getElementById('order__title');
const catalogItems = document.querySelectorAll('.product__name');
const modalInputs = document.querySelectorAll('.modal__input')


hamburger.addEventListener('click', () => {
  mainMenu.classList.toggle('header__nav--active');
  hamburger.classList.toggle('header__hamburger--active');
});

// настройка слайдов
$('.reviews__slider').slick({
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }, 
    }
  ]
});

//плавный скролл по ссылкам и закрытие гамбургера по клику на ссылку
for (const headerLink of headerLinks) {
  headerLink.addEventListener('click', (e) => {
    e.preventDefault();
    let scrollToElem = headerLink.getAttribute('href');
    let coordinates = document.querySelector(scrollToElem).offsetTop;
    window.scrollTo({
        top: coordinates - 100,
        behavior: 'smooth'
    });
    mainMenu.classList.remove('header__nav--active');
    hamburger.classList.remove('header__hamburger--active');
  })
};

for (const footerLink of footerLinks) {
  footerLink.addEventListener('click', (e) => {
    e.preventDefault();
    let scrollToElem = footerLink.getAttribute('href');
    let coordinates = document.querySelector(scrollToElem).offsetTop;
    window.scrollTo({
        top: coordinates - 100,
        behavior: 'smooth'
    });
  })
};

//сброс функции ссылки с меню каталога
for (const catalogLink of catalogLinks) {
  catalogLink.addEventListener('click', (e) => {
    e.preventDefault();
  });
};

// открытие и закрытие модалки
for (const catalogBtn of catalogBtns) {
  catalogBtn.addEventListener('click', () => {
    modalWindow.classList.toggle('modal--active');
    modalUserName.focus();
    modalOrderTitle.value = catalogBtn.value;
  });
  
  modalWindow.addEventListener('click', (event) => {
    if (
        event.target.matches('.btn__close') || 
        !event.target.closest('.modal__wrap')
    ) {
        modalWindow.classList.remove('modal--active');
        for (modalInput of modalInputs) {
          modalInput.value = '';
        }
    }
  });
};

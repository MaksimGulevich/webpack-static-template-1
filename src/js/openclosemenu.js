//Достаем коллекцию фидбэк
let openmenuList = document.querySelector('.navigation')
//Достаем кнопку закрытия обратной связи
let openmenu = openmenuList.querySelector('.navigation__burger')
//Достаем меню которое будем открывать
let menu = document.querySelector('.menu')
//Достаем кнопку закрытия меню
let menuButtonClose = menu.querySelector('.menu__button-close')
//Достанем blur
let background = document.querySelector('.blur')

//Пишем условие открывающее меню

openmenu.addEventListener('click', function () {
  background.classList.add('blur__z-index_before-1440px')
  menu.classList.remove('menu__close')
  menu.classList.add('menu__open')
  feedbackList.classList.add('feedback__close')
  feedbackList.classList.remove('feedback__open')
  callList.classList.add('sent__close')
  callList.classList.remove('sent__open')
})

//Пишем условие закрывающее меню
menuButtonClose.addEventListener('click', function () {
  background.classList.remove('blur__z-index_before-1440px')
  menu.classList.add('menu__close')
  menu.classList.remove('menu__open')
})

//Открытие одного окна и закрытие другого

// //Достаем коллекцию обратной связи
let callList = document.querySelector('.sent')
//Достаем кнопку закрытия обратной связи
let callButtonClose = callList.querySelector('.sent__button-close')
//Достаем кнопку открытия обратной связи
let openCall = openmenuList.querySelector('.navigation__call')
//Достаем кнопку открытия обратной связи из меню слева
let openCallFromMenu = menu.querySelector('.menu__button-call')

//Пишем условие открывающую обратную связь
openCall.addEventListener('click', function () {
  background.classList.add('blur__z-index')
  callList.classList.remove('sent__close')
  callList.classList.add('sent__open')
  menu.classList.add('menu__close')
  menu.classList.remove('menu__open')
})

//Пишем условие открывающую обратную связь из меню слева
openCallFromMenu.addEventListener('click', function () {
  background.classList.add('blur__z-index')
  callList.classList.remove('sent__close')
  callList.classList.add('sent__open')
  feedbackList.classList.add('feedback__close')
  feedbackList.classList.remove('feedback__open')
  menu.classList.add('menu__close')
  menu.classList.remove('menu__open')
})

//Пишем условие закрывающее меню call
callButtonClose.addEventListener('click', function () {
  background.classList.remove('blur__z-index')
  background.classList.remove('blur__z-index_before-1440px')
  callList.classList.add('sent__close')
  callList.classList.remove('sent__open')
})

//Достаем коллекцию фидбэк
let feedbackList = document.querySelector('.feedback')
//Достаем кнопку закрытия обратной связи
let feedbackButtonClose = feedbackList.querySelector('.feedback__button-close')
//Пишем условие закрывающее обратную связь
feedbackButtonClose.addEventListener('click', function () {
  background.classList.remove('blur__z-index')
  background.classList.remove('blur__z-index_before-1440px')
  feedbackList.classList.add('feedback__close')
})

//Достаем кнопку открытия обратной связи
let feedbackOpen = menu.querySelector('.menu__button-feedback')
//Пишем условие Открывающее feedback и закрывающее остальные окна
feedbackOpen.addEventListener('click', function () {
  background.classList.add('blur__z-index')
  callList.classList.add('sent__close')
  callList.classList.remove('sent__open')
  menu.classList.add('menu__close')
  menu.classList.remove('menu__open')
  feedbackList.classList.add('feedback__open')
  feedbackList.classList.remove('feedback__close')
})

//Достаем кнопку открытия feedback из хедера
let openfeedBackHeader = openmenuList.querySelector('.navigation__chat')

openfeedBackHeader.addEventListener('click', function () {
  background.classList.add('blur__z-index')
  callList.classList.add('sent__close')
  callList.classList.remove('sent__open')
  menu.classList.add('menu__close')
  menu.classList.remove('menu__open')
  feedbackList.classList.add('feedback__open')
  feedbackList.classList.remove('feedback__close')
})

background.addEventListener('click', function () {
  if (window.matchMedia('(min-width: 768px) and (max-width: 1440px').matches) {
    background.classList.remove('blur__z-index')
    background.classList.remove('blur__z-index_before-1440px')
    callList.classList.add('sent__close')
    callList.classList.remove('sent__open')
    menu.classList.add('menu__close')
    menu.classList.remove('menu__open')
    feedbackList.classList.add('feedback__close')
    feedbackList.classList.remove('feedback__open')
  }
})

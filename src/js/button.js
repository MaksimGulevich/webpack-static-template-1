let brandsList = document.querySelector('.brands')
let swiperWripperItem = brandsList.querySelector('.brands__swiper-wrapper')
let buttonItem = brandsList.querySelector('.brands__button')
let buttonImage = brandsList.querySelector('.brands__img')
let buttonSpan = brandsList.querySelector('.brands__span')

let buttonClickOpenClose = function () {
  buttonItem.addEventListener('click', function () {
    if (swiperWripperItem.classList.contains('brands__swiper-wrapper')) {
      swiperWripperItem.classList.add('brands__swiper-wrapper_height--auto')
      swiperWripperItem.classList.remove('brands__swiper-wrapper')
      buttonSpan.textContent = 'Скрыть'
      buttonImage.src = './img/expand1.svg'
      console.log('Кнопка открыть работает')
    } else {
      swiperWripperItem.classList.add('brands__swiper-wrapper')
      swiperWripperItem.classList.remove('brands__swiper-wrapper_height--auto')
      buttonImage.src = './img/expand.svg'
      buttonSpan.textContent = 'Показать все'
      console.log('Кнопка скрыть работает')
    }
  })
}

buttonClickOpenClose()

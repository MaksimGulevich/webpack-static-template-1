let repairList = document.querySelector('.repair')
let swiperWripperItem = repairList.querySelector('.repair__swiper-wrapper')
let buttonItem = repairList.querySelector('.repair__button')
let buttonImage = repairList.querySelector('.repair__img')
let buttonSpan = repairList.querySelector('.repair__span')

let buttonClickOpenClose = function () {
  buttonItem.addEventListener('click', function () {
    if (swiperWripperItem.classList.contains('repair__swiper-wrapper')) {
      swiperWripperItem.classList.add('repair__swiper-wrapper_height--auto')
      swiperWripperItem.classList.remove('repair__swiper-wrapper')
      buttonSpan.textContent = 'Скрыть'
      buttonImage.src = './img/expand1.svg'
      console.log('Кнопка открыть работает')
    } else {
      swiperWripperItem.classList.add('repair__swiper-wrapper')
      swiperWripperItem.classList.remove('repair__swiper-wrapper_height--auto')
      buttonImage.src = './img/expand.svg'
      buttonSpan.textContent = 'Показать все'
      console.log('Кнопка скрыть работает')
    }
  })
}

buttonClickOpenClose()

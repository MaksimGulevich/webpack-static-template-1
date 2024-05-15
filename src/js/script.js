window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper

    breakpoint = window.matchMedia(breakpoint)

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings)

      if (callback) {
        callback(swiper)
      }
    }

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings)
      } else {
        if (swiper !== undefined) swiper.destroy(true, true)
        return
      }
    }

    breakpoint.addEventListener('change', checker)
    checker()
  }

  const someFunc = (instance) => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex)
      })
    }
  }

  resizableSwiper(
    '(max-width: 767.98px)',
    '.slider-1',
    {
      direction: 'horizontal',
      loop: true,
      spaceBetween: 16,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    },
    someFunc
  )

  resizableSwiper('(max-width: 767.98px)', '.slider-2', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 767.98px)', '.slider-3', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
})

// window.addEventListener('DOMContentLoaded', () => {
//   const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
//     let swiper

//     breakpoint = window.matchMedia(breakpoint)

//     const enableSwiper = function (className, settings) {
//       swiper = new Swiper(className, settings)
//     }

//     const checker = function () {
//       if (breakpoint.matches) {
//         return enableSwiper(swiperClass, swiperSettings)
//       } else {
//         if (swiper !== undefined) swiper.destroy(true, true)
//         return
//       }
//     }

//     breakpoint.addEventListener('change', checker)
//     checker()
//   }

//   const sliders = [
//     {
//       selector: '.slider-1',
//       options: {
//         slidesPerView: 'auto',
//         loop: true,
//         pagination: { el: '.swiper-pagination' }
//       }
//     },
//     {
//       selector: '.slider-2',
//       options: {
//         slidesPerView: 'auto',
//         loop: true,
//         pagination: { el: '.swiper-pagination' }
//       }
//     },
//     {
//       selector: '.slider-3',
//       options: {
//         slidesPerView: 'auto',
//         loop: true,
//         pagination: { el: '.swiper-pagination' }
//       }
//     }
//   ]

//   sliders.forEach((slider) => {
//     resizableSwiper('(max-width: 768px)', slider.selector, slider.options)
//   })
// })

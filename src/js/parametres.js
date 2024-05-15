let pricesList = document.querySelector('.prices')
let pricesTitle = pricesList.querySelector('.prices__title')

let pricesDescription = document.createElement('div')
pricesDescription.classList.add('prices__descriptions') // добавить стили

let pricesRepair = document.createElement('h1')
pricesRepair.classList.add('prices__description')
pricesRepair.textContent = 'Ремонтные услуги'

let pricesPrice = document.createElement('h1')
pricesPrice.classList.add('prices__description')
pricesPrice.textContent = 'Цена'

let pricesDate = document.createElement('h1')
pricesDate.classList.add('prices__description')
pricesDate.textContent = 'Срок'

pricesDescription.appendChild(pricesRepair)
pricesDescription.appendChild(pricesPrice)
pricesDescription.appendChild(pricesDate)

pricesTitle.after(pricesDescription)

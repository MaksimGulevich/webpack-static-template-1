//Достаем  форму
let feedbackSentForm = document.querySelector('.feedback__form');
//Достанем инпуты
let feedbackSentInput = feedbackSentForm.querySelectorAll('.feedback__input');
//Достанем текстареа
let feedbackSentTextarea = feedbackSentForm.querySelector('.feedback__textarea');

//Пишем условие очищающее форму

    feedbackSentForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    //Обнуляем поля ввода после нажатия кнопки "Отправить"
    for (let i = 0; i < feedbackSentInput.length; i++){
        feedbackSentInput[i].value = '';
    }
    feedbackSentTextarea.value = '';
});

console.log(feedbackSentInput)
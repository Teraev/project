
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoImages = document.querySelectorAll('img');

promoImages.forEach(image => {
    image.remove();
});


let bg = document.querySelector('.promo__bg')

bg.style.background = "url(./img/bg.jpg)"

let text = document.querySelector('.promo__genre')

text.innerHTML = "Драмма"

const interactiveItems = document.querySelectorAll('.promo__interactive-item');
const deleteButtons = document.querySelectorAll('.delete');
let modal = document.querySelector('.modal')
interactiveItems.forEach((item, index) => {
        let ch = item.innerHTML = movieDB.movies[index]
    item.onclick = (open) => {

        if (open = true) {
            modal.style.display = 'flex'
        } console.log(ch);

    }
});

let close_btn = document.querySelector('.close')

close_btn.onclick = () => {
     modal.style.display = 'none'
}
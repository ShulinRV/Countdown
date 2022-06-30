// Определяем действующие элементы на странице
const year = document.querySelector('#year');
const days = document.querySelector('#days');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');
const preloader = document.querySelector('#preloader');

// Расчет года
const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Устанавливаем год на страницу
year.innerText = currentYear + 1;

function updateCountdown() {
    /* ------------------------------------->

    diff - значение в миллисекундах. 
    Diff Миллисикунды делим на 1000 и получим секунды. Секунды делим на минуты получим часы.. 
    (Метод floor у обьекта math округляем полученное значение у константы diff)

    <------------------------------------- */
    const currentTime = new Date();
    const diff = nextYear - currentTime;
    // Получение дней до НГ 
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);

    // Получание часов до нг + остаток от деление на 24
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;

    // Получение минут до нг
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;

    // Получение секунд до нг
    const secondsLeft = Math.floor(diff / 1000) % 60;

    days.innerText = daysLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
};
setInterval(updateCountdown, 1000);

//setTimeout устанавливает сколько раз будет работать прелоадер и включает с помощью флекса видимость в стилях селектора countdown

setTimeout(function() {
        preloader.remove();
        countdown.style.display = 'flex';
    },
    1000);
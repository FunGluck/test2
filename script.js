const text = "Привет! Это текст с эффектом печатания.";
const textBlock = document.getElementsByClassName(".auto-generated-text");
let i = 0;

function typeText() {
    if (i < text.length) {
        textBlock.innerHTML += text.charAt(i); // добавляем символ по очереди
        i++;
    } else {
        clearInterval(intervalId); // останавливаем интервал, когда весь текст выведен
    }
}

const intervalId = setInterval(typeText, 100); // задержка 100 мс между символами
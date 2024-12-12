// const text = "Привет! Это текст с эффектом печатания";
const textendsymbol = "|"
const textMassive = ["Привет! Это текст с эффектом печатания", "test2", "test3"]
const textBlock = document.querySelector(".auto-generated-text");
let i = 0;
maxSentences = textMassive.length;
function getRandomSentence() {
    const index = Math.floor(Math.random() * (maxSentences));
    return textMassive[index];
}
let text = getRandomSentence()
function typeText() {
    console.log(text)
    if (i < text.length) {
         textBlock.innerHTML += text.charAt(i); // добавляем символ по очереди
         i++;
     } else {
         clearInterval(intervalId); // останавливаем интервал, когда весь текст выведен
     }
 }
 const intervalId = setInterval(typeText, 70); // задержка 100 мс между символами



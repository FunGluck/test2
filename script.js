const textendsymbol = "|";
const textMassive = ["Работает - не трогай", "Центр Комфорта - город счастья", "Когда ЗП?", "#FreeQuaks", "ChatGPT, помоги...",
    "/me протянул руку", "Лишь потеряв всё, мы обретём свободу", "Когда? Завтра"];
const textBlock = document.querySelector(".auto-generated-text");
let i = 0;
let currentText = "";
let text = getRandomSentence();
let typingComplete = false;

// Функция для получения случайного предложения
function getRandomSentence() {
    const index = Math.floor(Math.random() * textMassive.length);
    return textMassive[index];
}

// Функция для эффекта печатания
function typeText() {
    if (i < text.length) {
        currentText += text.charAt(i); // добавляем символ по очереди
        i++;
        textBlock.innerHTML = currentText + textendsymbol; // добавляем "курсор"
    } else {
        typingComplete = true;
        clearInterval(typingInterval); // Останавливаем печатание
        setCursorBlinking(); // Запускаем мигание "курсора"
    }
}

// Функция для мигания символа "курсор"
function setCursorBlinking() {
    let showCursor = true;
    setInterval(() => {
        if (showCursor) {
            textBlock.innerHTML = currentText; // скрываем курсор
        } else {
            textBlock.innerHTML = currentText + textendsymbol; // показываем курсор
        }
        showCursor = !showCursor;
    }, 500); // мигание каждые 500 мс
}

const typingInterval = setInterval(typeText, 70); // задержка 70 мс между символами

// perspective dependancy
// document.addEventListener('mousemove', function(e) {
 //   let dx = e.pageX - window.innerWidth / 2
   // let dy = e.pageY - window.innerHeight / 2
    //let angleX = 20 * dx / window.innerWidth / 2
    //let angleY = 20 * dy / window.innerHeight / 2
    //block.style.transform = `rotateX(${angleY}deg) rotateY(${angleX}deg)`
//})






let maths_numbers = document.querySelectorAll('.number-questions .maths-number');
let math_questions = document.querySelectorAll('.content-questions .maths-questions');
let answers = null;
let timer_item = document.querySelector('.timer_item');
let input_answer = document.querySelectorAll('.input_answer');
let result_math1 = document.querySelector(".result_math1");
console.log(result_math1)
let check_menu_math = document.querySelector(".check_math");
let score_answer = 0;

let level = document.querySelector(".level");
console.log(level)
if (level.innerText == 'Level1 Coding') {
    first_page();
}

if (level.innerText == 'Level2 Coding') {
    second_page();
}

if (level.innerText == 'Level3 Coding') {
    third_page();
}

function first_page() {
   answers =  ["burger", "audio", "input", "b", "8", "navigator.appName"];
   return answers;
}

function second_page() {
    answers =  ["20", "1", "1", "1", "1", "1"];
    return answers;
}

function third_page() {
    answers =  ["0", "0", "0", "0", "0", "0"];
    return answers;
}

function switch_active() {
    maths_numbers.forEach(n => n.addEventListener('click', () => {
        let clas = n.dataset.id;

        // Очищение
        maths_numbers.forEach(n => n.classList.remove('active'));
        math_questions.forEach( n => n.classList.remove('active'));

        const changeClass = n.classList[2];
        n.classList.add("active");

        document.querySelector(`.content-questions .${changeClass}`).classList.add('active')
        // Добавление

    }));

}       

function add_active() {
    for (i = 0; i < maths_numbers.length; i++) {
        maths_numbers[i].addEventListener('click', (event) => {
                let target = event.target;
                target.classList.add('active');
        });
    }
}

function click() {
    switch_active();
}

function answeri() {
    for (let i = 0; i < input_answer.length; i++) {
        if (input_answer[i].value === answers[i]) {
          score_answer++;
        }

        if (input_answer[i].value == '') {
            alert('Пожалуйста ответьте на все вопросы');
          }
      }
}

function check_click() {
    check_menu_math.addEventListener("click", () => {
        answeri();
        result_math1.innerText = score_answer;
        console.log(score_answer)})
}

function timer() {
    let time = 600;
    timer = setInterval(function () {
    let seconds = time%60 // Получаем секунды
    let minutes = time/60%60 // Получаем минуты
    if (time <= 0) {
        // Таймер удаляется
        clearInterval(timer);
        // Выводит сообщение что время закончилось
        alert("Время закончилось");
    } else { // Иначе
        // Создаём строку с выводом времени
        let strTimer = `${Math.trunc(minutes)}:${seconds}`;
        // Выводим строку в блок для показа таймера
        timer_item.innerHTML = strTimer;
    }
    --time; // Уменьшаем таймер
}, 1000)
}

check_click();
click();
timer();
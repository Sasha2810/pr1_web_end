let maths_numbers = document.querySelectorAll('.number-questions .maths-number');
let math_questions = document.querySelectorAll('.content-questions .maths-questions');
let answers = null;
let timer_item = document.querySelector('.timer_item');
let input_answer = document.querySelectorAll('.input_answer');
let result_math1 = document.querySelector(".result_math1");
console.log(result_math1)
let check_menu_math = document.querySelector(".check_math");
let score_answer = 0;

// calc
let mas_vvod1 = [];
let mas_vvod2 = [];
let mas_znak = [document.querySelector(".plus"), document.querySelector(".minus"), document.querySelector(".percent"), document.querySelector(".plus-minus"), document.querySelector(".del"), document.querySelector(".umn")];
let numbers = [document.querySelector(".seven"), document.querySelector(".zap"), document.querySelector(".eight"), document.querySelector(".nine"), document.querySelector(".six"), document.querySelector(".five"), document.querySelector(".four"), document.querySelector(".three"), document.querySelector(".two"), document.querySelector(".one"), document.querySelector("zero")];
let vvod = document.querySelector(".vvod");
let chislo = "";
let chislo2 = "";
let schet = 0;
let answer = "";
let main = [];
let result = "";

// timer
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

// calc
function vvod_number() {
    if (chislo == "") {
        for (let i = 0; i < numbers.length - 1; i++)
            numbers[i].onclick = function() {
                mas_vvod1.push(chislo += this.innerText);
                vvod.innerText = mas_vvod1[mas_vvod1.length - 1];
            }
    } 
    return chislo
}

function AC() {
    let ac = document.querySelector(".ac");
    ac.onclick = function() {
        mas_vvod1 = [];
        mas_vvod2 = [];
        answer = "";
        vvod.innerText = '0';
        vvod_number();
    }
    return ac
}

function vvod2(answer) {
    let vvod = document.querySelector(".vvod");;
    let znak = document.getElementsByClassName("znak");

    for (i = 0; i < znak.length - 1; i++) {
        znak[i].onclick = function() {
            vvod.innerText = '0';
            for (let i = 0; i < numbers.length - 1; i++)
            numbers[i].onclick = function() {
                if (answer == "") {
                    mas_vvod2.push(chislo2 += this.innerText);
                    vvod.innerText = mas_vvod2[mas_vvod2.length - 1];
                    console.log(mas_vvod2[mas_vvod2.length - 1]);
                } else {
                    mas_vvod2 = [];
                    mas_vvod2.push(chislo2 += this.innerText);
                    vvod.innerText = mas_vvod2[mas_vvod2.length - 1];
                    console.log(mas_vvod2[mas_vvod2.length - 1]);
                    result = mas_vvod2[mas_vvod2.length - 1]
                }
               return result;
            }
        }
    }

}

function glav() {
    let sum = document.querySelector(".plus");
    let umn = document.querySelector(".umn");
    let plus_minus = document.querySelector(".plus-minus");
    let percent = document.querySelector(".percent");
    let minus = document.querySelector(".minus");
    
    sum.addEventListener("click", () => { 
        main.push("sum");
        // schet += 1;
        // function sumi_work() {
        //     if (schet > 1) {
        //         if (answer == "") {; 
        //             chislo2 = "";
        //             console.log(chislo2);
        //             answer = Number(mas_vvod1[mas_vvod1.length - 1]) + Number(mas_vvod2[mas_vvod2.length - 1]);
        //             console.log(answer)
        //             mas_vvod1 = [];
        //             mas_vvod2 = [];  
        //             console.log(mas_vvod2);
        //         } else {
        //             mas_vvod2 = []; 
        //             chislo2 = "";
        //             console.log(chislo2);
                    
        //             answer = Number(answer) + Number(result);
        //             console.log(answer);
        //             console.log(result);             
        //             console.log(mas_vvod2);
        //         }
                
        //     }
        // }
        return answer; // sumi_work()
    })
    umn.addEventListener("click", () => { main.push("umn") })
    percent.addEventListener("click", () => { main.push("percent") })
    minus.addEventListener("click", () => { main.push("minus") })

    return answer;
}

function mega_answer(answer, sumi_work) {
    let sum = document.querySelector(".plus");
    let button_answer = document.querySelector(".answer");
    button_answer.onclick = function(sumiy) {
        if (answer != 0 && main == "sum") {
            answer = Number(mas_vvod1[mas_vvod1.length - 1]) + Number(mas_vvod2[mas_vvod2.length - 1]);
            vvod.innerText = Number(answer);
        }
        if (answer != 0 && main == "umn") {
            answer = Number(mas_vvod1[mas_vvod1.length - 1]) * Number(mas_vvod2[mas_vvod2.length - 1]);
            vvod.innerText = Number(answer);
        }
         if (answer != 0 && main == "minus") {
            answer = Number(mas_vvod1[mas_vvod1.length - 1]) - Number(mas_vvod2[mas_vvod2.length - 1]);
            vvod.innerText = Number(answer);
        }
        if (answer != 0 && main == "percent") {
            answer = Number(mas_vvod1[mas_vvod1.length - 1]) % Number(mas_vvod2[mas_vvod2.length - 1]);
            vvod.innerText = Number(answer);
        }
        console.log(mas_vvod1[mas_vvod1.length - 1]);
        console.log(mas_vvod2[mas_vvod2.length - 1]);

        console.log(Number(answer));
    }
}
//переключение вопросов (добавление active)
function switch_active() {
    maths_numbers.forEach(n => n.addEventListener('click', () => {
        // Очищение
        maths_numbers.forEach(n => n.classList.remove('active'));
        math_questions.forEach( n => n.classList.remove('active'));

        // Добавление
        const changeClass = n.classList[2];
        n.classList.add("active");
    
        document.querySelector(`.content-questions .${changeClass}`).classList.add('active')
    
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

//answers
let level = document.querySelector(".level");
console.log(level)
if (level.innerText == 'Level1 IT') {
    first_page();
}

if (level.innerText == 'Level2 IT') {
    second_page();
}

if (level.innerText == 'Level3 IT') {
    third_page();
}

function first_page() {
   answers =  ["бит", "алгоритм", "вирус", "цикл", "7", "960"];
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
let end_answeri = true;
function answeri() {
    for (let i = 0; i < input_answer.length; i++) {
        if (input_answer[i].value === answers[i]) {
          score_answer++;
        }

        if (input_answer[i].value == '' && end_answeri) {
            alert('Пожалуйста ответьте на все вопросы');
            end_answeri = false;
          }
      }
}

function check_click() {
    check_menu_math.addEventListener("click", () => {
        answeri();
        result_math1.innerText = score_answer;
        console.log(score_answer)})
}

check_click();
click();
timer();
glav();
mega_answer();
vvod2();
vvod_number();
AC();
// sum();


console.log(location.href.match())
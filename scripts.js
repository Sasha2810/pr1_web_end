let think_text = document.querySelector('.think_text');
let how_work_ol = document.querySelector('.how_work_ol');
let img_think = document.querySelector('.img_think');

function think() {
    think_text.addEventListener("click", () => {
        how_work_ol.style.display = 'flex';
        think_text.style.display = 'none';
        img_think.style.display = 'none';
    })
}


think();
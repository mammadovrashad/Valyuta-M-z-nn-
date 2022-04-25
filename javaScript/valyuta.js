
let tableLeftBtn1 = document.querySelectorAll('.aviable-btn');
for (let i = 0; i < tableLeftBtn1.length; i++) {
    tableLeftBtn1[i].addEventListener('click', () => {
        tableLeftBtn1.forEach(element => {
            element.classList.remove('active_btn');
        })
        tableLeftBtn1[i].classList.add('active_btn');
    })
}
let tableLeftBtn2 = document.querySelectorAll('.sell-btn');
for (let j = 0; j < tableLeftBtn2.length; j++) {
    tableLeftBtn2[j].addEventListener('click', () => {
        tableLeftBtn2.forEach(element => {
            element.classList.remove('active_btn');
        })
        tableLeftBtn2[j].classList.add('active_btn');
    })
}


//  Api hissenin yazilmasi
fetch('')

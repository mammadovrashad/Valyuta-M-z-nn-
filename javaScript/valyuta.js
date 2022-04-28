let rightBtnId = 'USD';
let leftBtnId = 'RUB';

let tableLeftBtn = document.querySelectorAll('.aviable-btn');
var convertLeft = document.querySelector('.convert-left');
var convertRight = document.querySelector('.convert-right');
var textBtn = tableLeftBtn[0].textContent;
for (let i = 0; i < tableLeftBtn.length; i++) {
    tableLeftBtn[i].addEventListener('click', () => {
        tableLeftBtn.forEach(element => {
            element.classList.remove('active_btn');
        })
        tableLeftBtn[i].classList.add('active_btn');
        leftBtnId = tableLeftBtn[i].innerText;
        getData(`https://api.exchangerate.host/latest?base=${rightBtnId}&symbols=${leftBtnId}`)
    })
}
let tableRightBtn = document.querySelectorAll('.sell-btn');
for (let j = 0; j < tableRightBtn.length; j++) {
    tableRightBtn[j].addEventListener('click', () => {
        tableRightBtn.forEach(element => {
            element.classList.remove('active_btn');
        })
        tableRightBtn[j].classList.add('active_btn');
        rightBtnId = tableRightBtn[j].textContent;
        getData(`https://api.exchangerate.host/latest?base=${rightBtnId}&symbols=${leftBtnId}`);
    })
}
//  Api hissenin yazilmasi
async function getData(url) {
    let api = await fetch(url);
    let jsonData = await api.json();
    var values = Object.values(jsonData.rates);
    convertRight.innerText = `1 ${rightBtnId} = ${(values[0]).toFixed(4)} ${leftBtnId}`;
    async function getDataConvert(url) {
        let api = await fetch(url);
        let jsonData = await api.json();
        var values = Object.values(jsonData.rates);
        convertLeft.innerText = `1 ${leftBtnId} = ${((values[0])).toFixed(4)} ${rightBtnId}`;
    }
    getDataConvert(`https://api.exchangerate.host/latest?base=${leftBtnId}&symbols=${rightBtnId}`);
}
getData(`https://api.exchangerate.host/latest?base=${rightBtnId}&symbols=${leftBtnId}`);
// Api hissenin sonu
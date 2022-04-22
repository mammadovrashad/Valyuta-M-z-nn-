const getExchangeButtons = document.querySelectorAll('.aviable-btn');
getExchangeButtons.forEach(element => {
    element.addEventListener('click', () => {
        clearAviableColor();
        element.style.background = 'blueviolet';
        element.style.color = 'white';
    })
});
const getSellButtons = document.querySelectorAll('.sell-btn');
getSellButtons.forEach(element => {
    element.addEventListener('click', () => {
        clearSellColor();
        element.style.background = 'blueviolet';
        element.style.color = 'white';
    })
});
function clearAviableColor() {
    getExchangeButtons.forEach(element => {
        element.style.background = 'none';
        element.style.color = 'black';
    })
}
function clearSellColor() {
    getSellButtons.forEach(element => {
        element.style.background = 'none';
        element.style.color = 'black';
    })
}

//#region buttonlara uygun default deyerlerin Api dan getirilmesi
let rightBtnId = 'USD';
let leftBtnId = 'RUB';
//#endregion

let getAddInputValue;

let tableLeftBtn = document.querySelectorAll('.aviable-btn');
var convertLeft = document.querySelector('.convert-left');
var convertRight = document.querySelector('.convert-right');
let getMenuIcon=document.querySelector('.menu-icon');
let getCountainerClick=document.querySelector('.containerClick');
let getMenuMobile=document.querySelector('.menu-mobile');


// get inputs value
let getLeftInputValue=document.getElementById('left-input');
let getRightInputValue=document.getElementById('right-input');
// end

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



//#region Api-dan datanin cagrilmasi
async function getData(url) {
    let api = await fetch(url);
    let jsonData = await api.json();
    var values = Object.values(jsonData.rates);
    convertRight.innerText = `1 ${rightBtnId} = ${(values[0]).toFixed(4)} ${leftBtnId}`;
    
    //#region  input valuesinin sifirlanmasi button deyisdikde ona uygun valu-larin
//     if(getRightInputValue.value===''){
//         getLeftInputValue.value=" ";
//     }
//     else{
//         if(rightBtnId==leftBtnId){
//             getRightInputValue.value=getLeftInputValue.value;
//         }else{
//             getLeftInputValue.value=(Number(getRightInputValue.value)*values[0]).toFixed(4);
//             getRightInputValue=getRightInputValue;
//         }
//     }
//    //#endregion

//    //#region  inputa deyer daxil edildikde valuenin hesablanmasi
//     getRightInputValue.addEventListener('input',()=>{
//         if(getRightInputValue.value===''){
//             getLeftInputValue.value=" ";
//         }
//         else{
//             getLeftInputValue.value=(Number(getRightInputValue.value)*values[0]).toFixed(4);
//         }
       
//     })
    //#endregion


    async function getDataConvert(url) {
        let api = await fetch(url);
        let jsonData = await api.json();
        var values = Object.values(jsonData.rates);
        
        convertLeft.innerText = `1 ${leftBtnId} = ${((values[0])).toFixed(4)} ${rightBtnId}`;
        //#region  input valuesinin sifirlanmasi button deyisdikde ona uygun valu-larin
        if(getLeftInputValue.value===''){
            getRightInputValue.value=" ";
        }
        else{
            if(leftBtnId===rightBtnId){
                getRightInputValue.value=getLeftInputValue.value
            }
            else{
                 getRightInputValue.value=(Number(getLeftInputValue.value)*values[0]).toFixed(4);
         }
        }
       //#endregion

       //#region  inputa deyer daxil edildikde valuenin hesablanmasi
        getLeftInputValue.addEventListener('input',()=>{
            if(getLeftInputValue.value===''){
                getRightInputValue.value=" ";
            }
            else{
                getRightInputValue.value=(Number(getLeftInputValue.value)*values[0]).toFixed(4);
            }   
        })
        //#endregion
    }
    getDataConvert(`https://api.exchangerate.host/latest?base=${leftBtnId}&symbols=${rightBtnId}`);
}
getData(`https://api.exchangerate.host/latest?base=${rightBtnId}&symbols=${leftBtnId}`);



//#region  responsive for mobile
function myFunction(x) {
    x.classList.toggle("change");
  }
let key=0;
getCountainerClick.addEventListener('click',()=>{
   if(key===0){
    getMenuMobile.classList.add('rotateY');
    key=1;
   }
   else{
       getMenuMobile.classList.remove('rotateY');
       key=0
   }
    myFunction(getCountainerClick);
})

//#endregion
const subhanDisplay = document.getElementById('Subhan-display');
const subhanIncrement = document.getElementById('Subhan-increment');
const subhanDecrement = document.getElementById('Subhan-decrement');

const alhamdulillahDisplay = document.getElementById('Alhamdulillah-display');
const alhamdulillahIncrement = document.getElementById('Alhamdulillah-increment');
const alhamdulillahDecrement = document.getElementById('Alhamdulillah-decrement');

const allahuakbarDisplay = document.getElementById('Allahuakbar-display');
const allahuakbarIncrement = document.getElementById('Allahuakbar-increment');
const allahuakbarDecrement = document.getElementById('Allahuakbar-decrement')


let initialvalue = 0;
subhanIncrement.addEventListener('click', function(){
    if(initialvalue === 33){
        return alert("You can't increment more")
    }
    initialvalue = initialvalue+1;
    subhanDisplay.innerText = initialvalue;
})
subhanDecrement.addEventListener('click', function(){
    if(initialvalue === 0){
        return alert("You can't decrement more")
    }
    initialvalue = initialvalue-1;
    subhanDisplay.innerText = initialvalue;
})

let alhamdulillahValue = 0;
alhamdulillahIncrement.addEventListener('click', function(){
    if(alhamdulillahValue === 33){
        return alert("you can't increment more")
    }
    alhamdulillahValue+=1;
    alhamdulillahDisplay.innerText = alhamdulillahValue;
})
alhamdulillahDecrement.addEventListener('click', function(){
    if(alhamdulillahValue===0){
        return alert("you can't decrement more")
    }
    alhamdulillahValue-=1
    alhamdulillahDisplay.innerText = alhamdulillahValue;
})

let allahuakbarValue = 0;
allahuakbarIncrement.addEventListener('click',function(){
    if(allahuakbarValue===33){
        return alert("you can't increment more")
    }
    allahuakbarValue+=1;
    allahuakbarDisplay.innerText = allahuakbarValue;
})
allahuakbarDecrement.addEventListener('click', function(){
    if(allahuakbarValue===0){
        return alert("you can't decrement more")
    }
    allahuakbarValue-=1;
    allahuakbarDisplay.innerText = allahuakbarValue;
})

const resetButton = document.getElementById('reset-btn')

resetButton.addEventListener('click',function(){
    initialvalue = 0;
    subhanDisplay.innerText = 0;

    alhamdulillahValue = 0;
    alhamdulillahDisplay.innerText=0;

    allahuakbarValue = 0;
    allahuakbarDisplay.innerText=0;
})
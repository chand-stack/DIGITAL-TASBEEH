const subhanDisplay = document.getElementById('Subhan-display');
const subhanIncrement = document.getElementById('Subhan-increment');
const subhanDecrement = document.getElementById('Subhan-decrement')


const initialvalue = 0;
subhanIncrement.addEventListener('click', function(){
    initialvalue = initialvalue+1;
    subhanDisplay.innerText = initialvalue;
})
const buttonPlus = document.querySelector('.button-plus')
const buttonMinus = document.querySelector('.button-minus')
const buttonMultiply = document.querySelector('.button-multiply')
const buttonDivide = document.querySelector('.button-divide')
const buttonResult = document.querySelector('.button-result')
const resultat = document.querySelector('.result')
const firstNumber = document.getElementById('number-one')
const secondNumber = document.getElementById('number-two')
let operation = 0

function proverka(a,b, operation) {   
    
    if ((a !== '')&&(b == '')) {
        alert('Введите второе число и нажмите "Calculate"')
    } else if (a == '') {
        alert(`Введите первое чиcло и нажмите ${operation}`)
    }   
}


const functionSign = sign => {
    
    operation = sign
    proverka(firstNumber.value, secondNumber.value, operation)
}

buttonResult.onclick = () => {
    debugger
    a = firstNumber.value
    b = secondNumber.value
    let Result = 0
    if (operation === '+') {
        Result = (+a + +b)
    } else if (operation === '-') {
        Result = (+a - +b)
    } else if (operation === '*') {
        Result = (+a * +b)
    } else if (operation === '/') {
        Result = (+a / +b)
    }
    resultat.textContent = Result
}

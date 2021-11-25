const buttonPlus = document.querySelector('.button-plus')
const buttonMinus = document.querySelector('.button-minus')
const buttonMultiply = document.querySelector('.button-multiply')
const buttonDivide = document.querySelector('.button-divide')
const buttonResult = document.querySelector('.button-result')
const resultat = document.querySelector('.result')



buttonPlus.onclick = () => {
    const firstNumber = document.getElementById('number-one').value
    const secondNumber = document.getElementById('number-two').value
    if ((firstNumber !== '')&&(secondNumber == '')) {
        alert('Введите второе число и нажмите "Calculate"')
    } else if ((firstNumber !== '')&&(secondNumber !== '')) {
        alert('Нажмите "Calculate"')
    } else if (firstNumber == '') {
        alert('Введите первое чиcло и нажмите "+"')
    }
    buttonResult.onclick = () => {
        const secondNumber = document.getElementById('number-two').value
        const plusResult = (+firstNumber + +secondNumber)
        console.log(plusResult)
        resultat.textContent = plusResult
    }
}

buttonMinus.onclick = () => {
    const firstNumber = document.getElementById('number-one').value
    const secondNumber = document.getElementById('number-two').value
    if ((firstNumber !== '')&&(secondNumber == '')) {
        alert('Введите второе число и нажмите "Calculate"')
    } else if ((firstNumber !== '')&&(secondNumber !== '')) {
        alert('Нажмите "Calculate"')
    } else if (firstNumber == '') {
        alert('Введите первое чиcло и нажмите "-"')
    }
    buttonResult.onclick = () => {
        const secondNumber = document.getElementById('number-two').value
        const minusResult = (+firstNumber - +secondNumber)
        console.log(minusResult)
        resultat.textContent = minusResult
    }
}

buttonMultiply.onclick = () => {
    const firstNumber = document.getElementById('number-one').value
    const secondNumber = document.getElementById('number-two').value
    if ((firstNumber !== '')&&(secondNumber == '')) {
        alert('Введите второе число и нажмите "Calculate"')
    } else if ((firstNumber !== '')&&(secondNumber !== '')) {
        alert('Нажмите "Calculate"')
    } else if (firstNumber == '') {
        alert('Введите первое чиcло и нажмите "x"')
    }
    buttonResult.onclick = () => {
        const secondNumber = document.getElementById('number-two').value
        const multiplyResult = (+firstNumber * +secondNumber)
        console.log(multiplyResult)
        resultat.textContent = multiplyResult
    }
}

buttonDivide.onclick = () => {
    const firstNumber = document.getElementById('number-one').value
    const secondNumber = document.getElementById('number-two').value
    if ((firstNumber !== '')&&(secondNumber == '')) {
        alert('Введите второе число и нажмите "Calculate"')
    } else if ((firstNumber !== '')&&(secondNumber !== '')) {
        alert('Нажмите "Calculate"')
    } else if (firstNumber == '') {
        alert('Введите первое чиcло и нажмите "/"')
    }
    buttonResult.onclick = () => {
        const secondNumber = document.getElementById('number-two').value
        const divideResult = (+firstNumber / +secondNumber)
        console.log(divideResult)
        resultat.textContent = divideResult
    }
}

/* buttonMinus.onclick = () => {
    const firstNumber = document.getElementById('number-one').value
    const secondNumber = document.getElementById('number-two').value
    console.log(+firstNumber - +secondNumber)
}

buttonMultiply.onclick = () => {
    const firstNumber = document.getElementById('number-one').value
    const secondNumber = document.getElementById('number-two').value
    console.log(+firstNumber * +secondNumber)
}
buttonDivide.onclick = () => {
    const firstNumber = document.getElementById('number-one').value
    const secondNumber = document.getElementById('number-two').value
    console.log(+firstNumber / +secondNumber)
} */
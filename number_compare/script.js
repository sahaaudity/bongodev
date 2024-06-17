
const n1 = document.getElementById('number1');
const n2 = document.getElementById('number2');
const comparebtn = document.getElementById('compare');
const result = document.getElementById('result');

function compare() {
    const number1 = parseInt(n1.value);
    const number2 = parseInt(n2.value);
    console.log(typeof number1, typeof number2);

    if (number1 === number2) {
        result.innerHTML = "<h5>equal</h5>";
    } else if (number1 > number2) {
        result.innerHTML = "<h5>n1 greater</h5>";
    } else {
        result.innerHTML = "<h5>n2 greater</h5>";
    }
}

comparebtn.addEventListener('click', compare);

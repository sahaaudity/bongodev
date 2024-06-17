const n = document.getElementById('number1');

const evaluatebtn = document.getElementById('evaluate');
const result = document.getElementById('result');

function evaluate() {
    const number = parseInt(n.value);
    console.log(typeof number);

    if (number > 100 || number < 0) {
        result.innerHTML = "<h5>Invalid</h5>";
    } else if (number <= 100 && number >= 80) {
        result.innerHTML = "<h5>A+</h5>";
    } else if (number < 80 && number >= 70) {
        result.innerHTML = "<h5>A</h5>";
    } else if (number < 70 && number >= 60) {
        result.innerHTML = "<h5>A-</h5>";
    } else if (number < 60 && number >= 50) {
        result.innerHTML = "<h5>B</h5>";
    } else if (number < 50 && number >= 33) {
        result.innerHTML = "<h5>C</h5>";
    } else if(number<33&&number>=0){
        result.innerHTML = "<h5>F</h5>";
    }
}

evaluatebtn.addEventListener('click', evaluate);

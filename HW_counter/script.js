let count = 0;

const displayElement = document.getElementById('count');
const incrementButton = document.getElementById('button_in'); // Select by class
const decrementButton = document.getElementById('button_de'); // Select by class

function incrementCount() {
    if (count < 10) {
        count++;
        displayElement.innerText = count;
        // innerHTML: text e kono html include korle like <h1>,<p></p>
    }
}

// function decrementCount() {
//     if (count > 0) {
//         count--;
//         displayElement.innerText = count;
//     }
// }

// function decrementCount() {
//     count--;
//     if (count < 0) {
//         alert('count will be nagetive');
//     }else{
//         displayElement.innerText = count;
//     }
// }


function decrementCount() {
    if (count <= 0) {
        alert('count will be nagetive');
        return;
    }
    count--;
    displayElement.innerText = count;
}

incrementButton.addEventListener('click', incrementCount);
decrementButton.addEventListener('click', decrementCount);


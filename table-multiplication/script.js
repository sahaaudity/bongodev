const generateButton = document.getElementById('btn');
const table_container = document.getElementById('table-container_1');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
function multplier() {
    const n1 = parseInt(num1.value);
    const n2 = parseInt(num2.value);
    table_container.innerHTML = '';
    for (let i = n1; i <= n2; i++) {
        for (let j = 1; j <= 10; j++) {
            const trow = document.createElement("h2");
            trow.innerText = `${i} * ${j} = ${i * j}`;
            table_container.appendChild(trow);
        }
    }
}
generateButton.addEventListener('click', multplier);
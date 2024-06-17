const generateButton = document.getElementById("generate");
const tableContainer1 = document.getElementById("table-container_1");
const tableContainer2 = document.getElementById("table-container_2");

generateButton.addEventListener("click", function () {
    tableContainer1.innerHTML = "";
    tableContainer2.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 10; j++) {
            const tableRow = document.createElement("h2");
            tableRow.innerText = `${i} * ${j} = ${i * j}`;

            tableContainer1.appendChild(tableRow);
        }
        const tableRow = document.createElement('br');
        tableContainer1.appendChild(tableRow);
    }
    for (let i = 6; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            const tableRow = document.createElement("h2");
            tableRow.innerText = `${i} * ${j} = ${i * j}`;

            tableContainer2.appendChild(tableRow);
        }
        const tableRow = document.createElement('br');
        tableContainer2.appendChild(tableRow);
    }
});
const numberInput = document.getElementById('input-number')
const generateButton = document.getElementById("generate");
const tableContainer1 = document.getElementById("table-container_1");
// const tableContainer2 = document.getElementById("table-container_2");

function creatTable(number){
    
    const table = document.createElement('table');
    table.className = 'w-full boder-collapse text-center';

    for (let i = 1; i <= 10; i++) {

        const tablerow = document.createElement('tr');
        tablerow.className = "border";
        let j = number;

        const leftcell = document.createElement('td');
        leftcell.innerText = `${i} * ${j}`;

        const middlecell = document.createElement('td');
        middlecell.innerText = `=`;

        const rightcell = document.createElement('td');
        rightcell.innerText = i * j;

        tablerow.appendChild(leftcell);
        tablerow.appendChild(middlecell);
        tablerow.appendChild(rightcell);

        table.appendChild(tablerow);

        // tablerow.innerText = `${i} * ${j} = ${i * j}`;
        // tableContainer1.appendChild(tablerow);
    }
    return table;
}

generateButton.addEventListener('click', function () {
    const number = parseInt(numberInput.value);

    tableContainer1.innerHTML = '';//clear existing table

    const table= creatTable(number);
    // const table1 = creatTable(number+1);
    tableContainer1.appendChild(table);
    // tableContainer1.appendChild(table1);
 
})

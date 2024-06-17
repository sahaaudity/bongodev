// const numberInput = document.getElementById('input-number')
const generateButton = document.getElementById("generate");
const   = document.getElementById("table-container_1");
const tableContainer2 = document.getElementById("table-container_2");
const tablecontainerTopRow=document.getElementById("toprow");
const tablecontainerBottomRow = document.getElementById("bottomrow");

function creatTable(number) {
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

    }

    return table;
}

generateButton.addEventListener('click', function () {
    // tableContainer1.innerHTML = '';//clear existing table

    tablecontainerTopRow.innerText='';
    tablecontainerBottomRow.innerText='';

    for(number=1 ; number<=10;number++){
        if(number<=5){
            const table = creatTable(number);
            tablecontainerTopRow.appendChild(table);
        }else{
            const table = creatTable(number);
            tablecontainerBottomRow.appendChild(table);
        }
       
    }
    
})
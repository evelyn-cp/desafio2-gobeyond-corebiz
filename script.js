
function calculaSalarioTotal () {
    let salario = Number(document.getElementById("salariofixo").value);
    let vendas = Number(document.getElementById("totalvendas").value);
    let salarioTotal = salario + vendas * 0.15;
    return "R$ " + salarioTotal.toFixed(2);
}

function createTableHead (table) {
    var tableHeader = ["Nome", "Salário Fixo", "Total de vendas", "Salário Total"];
    var tableHead = document.createElement('thead');
    var rowHeader = document.createElement('tr');
    
    var headerNome = document.createElement('td');
    var headerSalario = document.createElement('td');
    var headerTotalVendas = document.createElement('td');
    var headerTotal = document.createElement('td');

    headerNome.appendChild(document.createTextNode(tableHeader[0]));
    headerSalario.appendChild(document.createTextNode(tableHeader[1]));
    headerTotalVendas.appendChild(document.createTextNode(tableHeader[2]));
    headerTotal.appendChild(document.createTextNode(tableHeader[3]));

    rowHeader.appendChild(headerNome);
    rowHeader.appendChild(headerSalario);
    rowHeader.appendChild(headerTotalVendas);
    rowHeader.appendChild(headerTotal);

    tableHead.appendChild(rowHeader);

    table.appendChild(tableHead);

    headerNome.id = "nomevendedor";
    headerSalario.id = "salariofixovendedor";
    headerTotalVendas.id = "totalvendedor";
    headerTotal.id = "salariototalvendedor";
}



function createTable() {
    var section = document.getElementById("table-section");
    var table = document.createElement('table');
    table.id = "table";

    createTableHead(table);

    
    var nome = document.getElementById("nome").value;
    var salarioFixo = document.getElementById("salariofixo").value;
    var totalVendas = document.getElementById("totalvendas").value;

    var tableBody = document.createElement('tbody');
    tableBody.id = "tableBody";

    var row = document.createElement('tr');

    var cellNome = document.createElement('td');
    var cellSalarioF = document.createElement('td');
    var cellTotalVendas = document.createElement('td');
    var cellSalarioTotal = document.createElement('td');


    cellNome.appendChild(document.createTextNode(nome));
    cellSalarioF.appendChild(document.createTextNode("R$ " + salarioFixo));
    cellTotalVendas.appendChild(document.createTextNode("R$ " + totalVendas));
    cellSalarioTotal.appendChild(document.createTextNode(calculaSalarioTotal()));

    row.appendChild(cellNome);
    row.appendChild(cellSalarioF);
    row.appendChild(cellTotalVendas);
    row.appendChild(cellSalarioTotal);


    tableBody.appendChild(row);

    
    table.appendChild(tableBody);
    section.appendChild(table);

}

function updateTable () {
    var table = document.getElementById("table");
    if (table != null) {
        addTableRow()
    } else {
        createTable();
    }
}


function addTableRow () {
    var tableBody = document.getElementById('tableBody');

    var nome = document.getElementById("nome").value;
    var salarioFixo = document.getElementById("salariofixo").value;
    var totalVendas = document.getElementById("totalvendas").value;

    var row = document.createElement('tr');

    var cellNome = document.createElement('td');
    var cellSalarioF = document.createElement('td');
    var cellTotalVendas = document.createElement('td');
    var cellSalarioTotal = document.createElement('td');

    cellNome.appendChild(document.createTextNode(nome));
    cellSalarioF.appendChild(document.createTextNode("R$ " + salarioFixo));
    cellTotalVendas.appendChild(document.createTextNode("R$ " + totalVendas));
    cellSalarioTotal.appendChild(document.createTextNode(calculaSalarioTotal()));

    row.appendChild(cellNome);
    row.appendChild(cellSalarioF);
    row.appendChild(cellTotalVendas);
    row.appendChild(cellSalarioTotal);

    tableBody.appendChild(row);

}


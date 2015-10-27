function calculate() {
    var
        cellsA = tableA.table.getElementsByClassName('cell'),
        cellsB = tableB.table.getElementsByClassName('cell'),
        cellsC = tableC.table.getElementsByClassName('cell'),
        valuesA = [],
        valuesB = [],
        valuesC = [],
        rowsA = tableA.rows,
        colsA = tableA.cols,
        rowsB = tableB.rows,
        colsB = tableB.cols;

    for (var key in cellsA) {
        if (+(key + 1) && cellsA.hasOwnProperty(key)) {
            valuesA.push(+cellsA[key].value);
        }
    }
    for (var key in cellsB) {
        if (+(key + 1) && cellsB.hasOwnProperty(key)) {
            valuesB.push(+cellsB[key].value);
        }
    }

    var valuesRowsA = [];
    var valuesColsB = [];

    for (var i = 0; i < rowsA; i++) {
        valuesRowsA.push([]);
        for (var j = 0; j < colsA; j++) {
            valuesRowsA[i].push(valuesA[i * colsA + j]);
        }
    }
    for (var i = 0; i < colsB; i++) {
        valuesColsB.push([]);
        for (var j = 0; j < rowsB; j++) {
            valuesColsB[i].push(valuesB[j * colsB + i]);
        }
    }
    var
        row = 0,
        col = 0;
    for (var i = 0; i < rowsA * colsB; i++) {
        var value = 0;
        if (i != 0 && !(i % colsB)) {
            row++;
            col = 0;
        }
        for (var k = 0; k < colsA; k++) {
            value += (+valuesRowsA[row][k]) * (+valuesColsB[col][k]);
        }
        valuesC.push(value);
        cellsC[i].value = value;
        cellsC[i].title = value;
        col++;
    }
}
function swapTablesAB() {
    var
        cellsA = tableA.table.getElementsByClassName('cell'),
        cellsB = tableB.table.getElementsByClassName('cell'),
        valuesA = [],
        valuesB = [],
        rowsA = tableA.rows,
        colsA = tableA.cols,
        rowsB = tableB.rows,
        colsB = tableB.cols;

    for (var key in cellsA) {
        if (+(key + 1) && cellsA.hasOwnProperty(key)) {
            valuesA.push(+cellsA[key].value);

        }
    }
    for (var key in cellsB) {
        if (+(key + 1) && cellsB.hasOwnProperty(key)) {
            valuesB.push(+cellsB[key].value);
        }
    }
    tableA.createA(rowsB, colsB);
    tableB.createB(rowsA, colsA);
    for (var key in cellsA) {
        if (valuesB[key]) {
            if (+(key + 1) && cellsA.hasOwnProperty(key)) {
                cellsA[key].value = valuesB[key];
            }
        }
    }
    for (var key in cellsB) {
        if (+(key + 1) && cellsB.hasOwnProperty(key)) {
            if (valuesA[key]) {
                cellsB[key].value = valuesA[key];
            }
        }
    }
    tableC.createC(rowsB, colsA);
    calculate();
}
function clearTables() {
    var cellsABC = document.getElementsByClassName('cell');
    for (var key in cellsABC) {
        if (+(key + 1) && cellsABC.hasOwnProperty(key)) {
            cellsABC[key].value = null;
        }
    }
}




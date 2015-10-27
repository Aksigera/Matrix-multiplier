function Table() {
    var that = this;
    this.createA = function (rows, cols) {
        var table = document.getElementById('tableA');
        that.table = table;
        var currentTable = 'a';
        table.cols = cols;
        table.rows = rows;
        that.cols = cols;
        that.rows = rows;
        $(table).empty();
        for (var j = 0; j < rows; j++) {
            table.appendChild(new NewRow(j, cols, currentTable));
        }
    };
    this.createB = function (rows, cols) {
        var table = document.getElementById('tableB');
        that.table = table;
        var currentTable = 'b';
        table.cols = cols;
        table.rows = rows;
        that.cols = cols;
        that.rows = rows;
        $(table).empty();
        for (var j = 0; j < rows; j++) {
            table.appendChild(new NewCol(j, cols, currentTable));
        }
    };
    this.createC = function () {
        var table = document.getElementById('tableC');
        that.table = table;
        var currentTable = 'c';
        $(table).empty();
        var rows = tableA.rows;
        var cols = tableB.cols;
        that.cols = cols;
        that.rows = rows;
        for (var j = 0; j < rows; j++) {
            table.appendChild(new NewRow(j, cols, currentTable))
        }
    };
}
function NewRow(count, cells, currentTable) {
    var nrow = document.createElement('div');
    nrow.className = 'row';
    var currentRow = count + 1;
    for (var i = 0; i < cells; i++) {
        var currentCol = i + 1;
        nrow.appendChild(new Cell(i, currentTable, currentRow, currentCol));
    }
    return nrow;
}

function NewCol(count, cells, currentTable) {
    var nrow = document.createElement('div');
    nrow.className = 'row';
    var currentRow = count + 1;
    for (var i = 0; i < cells; i++) {
        var currentCol = i + 1;
        nrow.appendChild(new Cell(i, currentTable, currentRow, currentCol));
    }
    return nrow;
}

function Cell(num, currentTable, currentRow, currentCol, val) {
    this.ncell = document.createElement('input');
    this.ncell.maxLength = 4;
    this.ncell.className = 'cell';
    this.ncell.placeholder = currentTable + currentRow + ',' + currentCol;
    this.ncell.name = num + 1;
    this.ncell.value = val || null;
    if (currentTable == 'c') {
        this.ncell.disabled = true;
    }
    this.ncell.onkeypress = function (event) {
        if (event.ctrlKey || event.altKey || event.metaKey) return;
        var chr = getChar(event);
        if (chr == null) return;
        if (chr < '0' || chr > '9') {
            return false;
        }
    };
    return this.ncell;
}

function getChar(event) {
    if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode); // IE
    }
    if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which);// остальные
    }
    return null; // специальная клавиша
}


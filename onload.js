$(document).ready(function renderTables() {
    var
        cols = 3,
        rows = 3;

    tableA = new Table();
    tableB = new Table();
    tableC = new Table();
    tableA.createA(4, 3);
    tableB.createB(3, 2);
    tableC.createC(rows, cols);
    $('.cell').focusin(function () {
        $('.leftMenu').addClass('blue');
    })
        .focusout(function () {
            $('.leftMenu').removeClass('blue');
        });
    function error() {
        this.err = function () {
            $('.leftMenu').addClass('red');
            $('.error').addClass('red');
        };
        this.ok = function () {
            $('.leftMenu').removeClass('red');
            $('.error').removeClass('red');

        }
    }

    $('.actSVG, .textWight').mouseenter(function () {
        $('.actSVG')[0].classList.add('hover');
    })
        .mouseleave(function () {
            $('.actSVG')[0].classList.remove('hover');
        });
    $('.actSVG, .textWight').click(function () {
        calculate();
    });
    $('#swapTablesAB').click(function () {
        swapTablesAB();
    });
    $('#clearTables').click(function () {
        clearTables();
    });
});
function getCSV() {
    function printSys() {
        var responseIn = this.responseText;

        console.log(responseIn);
    }
    var request = new XMLHttpRequest();
    request.onload = printSys;
    request.open('get', 'https://arukshpatel.com/Lineage_Tree/res/david_le.csv', true);
    request.send();
}

function getDavidLe() {
    function printSys() {
        var responseIn = this.responseText;

        console.log(responseIn);
    }
    var request = new XMLHttpRequest();
    request.onload = printSys;
    request.open('get', 'https://arukshpatel.com/Lineage_Tree/res/david_le.csv', true);
    request.send();
}

function getMinhLe() {
    function printSys() {
        var responseIn = this.responseText;

        console.log(responseIn);
    }
    var request = new XMLHttpRequest();
    request.onload = printSys;
    request.open('get', 'https://arukshpatel.com/Lineage_Tree/res/minh_le.csv', true);
    request.send();
}
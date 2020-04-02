function getCSV() {
    function printSys() {
        var responseIn = this.responseText;

        console.log(responseIn);
    }
    var request = new XMLHttpRequest();
    request.onload = printSys;
    request.open('get', 'https://arukshpatel.com/TaikoLineage/res/david_le.csv', true);
    request.send();
}
function getCSV() {
    function printSys() {
        var responseIn = this.responseText;

        console.log(responseIn);
        
        alert(responseIn);
    }
    var request = new XMLHttpRequest();
    request.onload = printSys;
    request.open('get', 'https://arukshpatel.com/Lineage_Tree/res/david_le.csv', true);
    request.send();
}
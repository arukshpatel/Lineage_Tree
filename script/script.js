function getCSV() {
    function printSys() {
        var responseIn = this.responseText;

        // console.log(responseIn);

        var outJSON = csvJSON(responseIn);
        var parsed = JSON.parse(outJSON);

        console.log(parsed[0].big_id);
        // alert(responseIn);
    }
    var request = new XMLHttpRequest();
    request.onload = printSys;
    request.open('get', 'https://arukshpatel.com/Lineage_Tree/res/david_le.csv', true);
    request.send();
}

function csvJSON(csv) {
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");
    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(",");
        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
}
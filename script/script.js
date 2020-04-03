var json;


function getCSV(lineage) {
    var request = new XMLHttpRequest();
    request.onload = printSys;
    request.open('get', 'https://arukshpatel.com/Lineage_Tree/res/'+ lineage + '.csv', true);
    request.send();

    function printSys() {
        var responseIn = this.responseText;

        json = csvJSON(responseIn);

        document.getElementById('tree').innerHTML = json[0].id;
    }
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

    return JSON.parse(JSON.stringify(result));
}

function print() {
    console.log(json);
}
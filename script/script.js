function getCSV() {
    function printSys() {
        var responseIn = this.responseText;

        // console.log(responseIn);

        var outJSON = csvJSON(responseIn);

        console.log(outJSON);

        for(var i = 0; i < outJSON.length; i++)
        {
            console.log("NAME: " + outJSON[i].name);
            console.log("LINE NUMBER: " + outJSON[i].id);
            console.log("BIG ID: " + outJSON[i].big_id);
            console.log("LITTLE ID: " + outJSON[i].little_id);

            // if(outJSON[i].little_id == "0\r"){
            //     console.log("LITTLE ID: 0");
            // } else {
            //     console.log("LITTLE ID: " + outJSON[i].little_id);
            // }
            console.log("–––––––––––––––––––––––––––––––––––––––––––––––––");
        }
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

    return JSON.parse(JSON.stringify(result));
    // return JSON.stringify(result); //JSON
}
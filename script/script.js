var json;
class Member {
    constructor(name, lineNum, bigLineNum) {
        this._name = name;
        this._lineNum = lineNum;
        this._bigLineNum = bigLineNum;
    }

    get mName() {
        return this._name;
    }

    set mName(x) {
        this._name = x;
    }

}


var member = {
    name: null,
    lineNum: null,
    bigLineNum: null,
    children : [],
    addChildren : function(littleLineNum) {
        this.children.push(littleLineNum);
    },
    construct : function(name, lineNum, bigLineNum) {
        this.name = name;
        this.lineNum = lineNum;
        this.bigLineNum = bigLineNum;
    }

};

function getCSV(lineage) {
    var request = new XMLHttpRequest();
    request.onload = responseHandler;
    request.open('get', 'https://arukshpatel.com/Lineage_Tree/res/' + lineage + '.csv', true);
    request.send();
    createArray();

    function responseHandler() {
        var responseIn = this.responseText;
        json = csvJSON(responseIn);
    }

    function csvJSON(csv) {
        var lines = csv.split("\r");
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
        console.log(JSON.stringify(result));
        return JSON.parse(JSON.stringify(result));
    }
}

function createArray() {
    
    for(i = 0; i < length; i++)
    {
        var mem = json[i];
        member.construct(mem.name, mem.id, mem.big_id);
    }
}

function print() {

    // var length = json.length;
    
    // for(i = 0; i < length; i++)
    // {
    //     console.log(json[i]);
    // }

    console.log(member['name']);
}
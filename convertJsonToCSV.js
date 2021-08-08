const fs = require('fs');

function dispatchObject(filename,myObject){
    var writeBuffer = "";
    for (var x in myObject){
        if(myObject.hasOwnProperty(x)){
            var val = myObject[x].replace(/\n/gi,"\\n");
            if (val.indexOf(",") != -1){
                val = "\"" + val + "\"";
            }
            if (x.indexOf(",") != -1){
                x = "\"" + x + "\"";
            }
            writeBuffer += x + "," + val + "\n";
        }
    }
    fs.writeFileSync(filename,writeBuffer);
}

var fileData = fs.readFileSync("./messageList.json").toString();
var messageList = JSON.parse(fileData);

var filenames = [];
var groups = Object.keys(messageList);

groups.forEach(
function(element){
    filenames.push("./" + element.replace(/!/gi,"") + ".csv")
}
);

for (var i = 0; i < groups.length; i++){
    dispatchObject(filenames[i],messageList[groups[i]]);
}


//craete empty ratesTable
function makeRatesTable(currenciesList) {
    var numCurr = currenciesList.length;
    var n2 = numCurr * numCurr;
    ratesTable =[];
    for (var i = 0; i < n2; i++) ratesTable.push(Rate())
}
// creates empty table on view
function makeTable(currenciesList){
    var tbl = document.createElement("table");
    tbl.id = "cTable";
    tbl.className = "currTable table table-hover";
    var numCurr = currenciesList.length;
    //table header
    caption =  document.createElement("caption"); // global variable in controller file

    caption.className = "cap";


    var str = new Date().toString();
    var gmt = str.indexOf("GMT");
    str = str.substring(0, gmt) + " (local time)";
    caption.innerText = str;
    tbl.appendChild(caption);

    // header

    var row = tbl.insertRow();
    var cell = row.insertCell();
    for (var i= 0; i<numCurr; i++) row.insertCell().innerText =
        currenciesList[i];

    // body

    for (var i=0; i<numCurr; i++){
        row = tbl.insertRow();
        cell = row.insertCell().innerText = currenciesList[i];
        for (var j= 0; j<numCurr; j++) row.insertCell();
    }

   var corner = tbl.rows[0].cells[0];
    corner.className = "corner";
    corner.innerHTML = "<button class='btn'>RFRSH</button>"
    corner.onclick =  function () {
      fillRatesArray(currenciesList);
    };

    document.body.appendChild(tbl);
}
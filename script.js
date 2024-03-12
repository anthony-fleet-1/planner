function setEndTime(startTime, duration) {
    let endTime = startTime + duration
    document.getElementById("endTime").innerHTML = endTime
}

function lockStartTime(){
    pass
}

function currentDate(){
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    return currentDate
}

function addRow(n){
    let tableRowsTotal = document.getElementById('table').rows.length
    console.log("Total Rows in table = " + tableRowsTotal)

    var table = document.getElementById("table");
    console.log(table)
    var row = table.insertRow(tableRowsTotal);
    console.log(row)
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = '<input type="text" id="task" name="task" placeholder="Your task.."> ';
    cell2.innerHTML = '<input type="text" id="startTime" name="startTime" placeholder="Start time">';
    cell3.innerHTML = '<input type="text" id="endTime" name="endTime" placeholder="End Time">';
    cell4.innerHTML = '<input type="text" id="duration" name="duration" placeholder="Duration"> ';
}

// function deleteRow(n){
//     // var tr = n.parentNode.parentNode.cloneNode(true);   
//     var divRow = n.parentNode.parentNode.cloneNode(true);   
//     document.getElementById('additional-row').parentNode.appendChild(divRow);
// }

document.getElementById("date").innerHTML = currentDate();

function setEndTime(startTime, duration) {
    console.log("setting end time")
    // console.log(startTime)
    // console.log(duration)
    console.log("Calling adding Times function...")
    addTimes(startTime, duration)
    console.log(endTime)
    document.getElementById("endTime").value = endTime
}       

let durationInput = document.getElementById("duration");
durationInput.addEventListener("click", function (){setEndTime(document.getElementById("startTime").value, document.getElementById("duration").value )})    

function addTimes(x, y){
    // console.log("Running Adding Times function")
    // console.log(x)
    // console.log(y)
    
    // Convert string to array in order to remove the ":"
    let xArray = Array.from(x)
    let yArray = Array.from(y)
    // console.log("xArray is " + xArray)
    // console.log("yArray is " + yArray)
    xArray.splice(xArray.length - 3, 1)
    yArray.splice(yArray.length - 3, 1)
    // console.log("xArray is " + xArray)
    // console.log("yArray is " + yArray)

    // Convert array back to string in order to convert to number
    xArray = xArray.join("") 
    yArray = yArray.join("") 

    // Convert string to number to do maths on it
    let xNumber = Number(xArray)
    let yNumber = Number(yArray)
    // console.log("xNumber is " + xNumber)
    // console.log("ynumber is " + yNumber)

    // Do maths
    let endTime24h = xNumber + yNumber

    // Convert back to string in order to convert to array to add ":" back in
    let endTimeString = endTime24h.toString()
    
    // console.log("Start time is " + startTime24h)
    // console.log("Duration is " + duration24h)
    // console.log("End time is " + endTime24h)
    // console.log("End time var is " + typeof(endTime24h))
    // console.log("End time string is " + endTimeString)
    // console.log("End time string var is " + typeof(endTimeString))

    // Convert calculated endTime string back to array in order to add in ":"
    let endTimeArray = Array.from(endTimeString)
    endTimeArray.splice(endTimeArray.length - 2, 0, ':')    
    endTimeArray = endTimeArray.join("")
    // console.log(endTimeArray)
    endTime = endTimeArray
    return endTime
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
    cell1.innerHTML = '<input type="text" id="task" name="task" placeholder="Your task..">';
    cell2.innerHTML = '<input type="time" id="startTime" name="startTime" value="00:00">';
    cell3.innerHTML = '<input type="time" id="duration" name="duration" value="00:00">';
    cell4.innerHTML = '<input type="time" id="endTime" name="endTime" value="00:00" readonly class="background-grey">';
}



// function deleteRow(n){
//     // var tr = n.parentNode.parentNode.cloneNode(true);   
//     var divRow = n.parentNode.parentNode.cloneNode(true);   
//     document.getElementById('additional-row').parentNode.appendChild(divRow);
// }

document.getElementById("date").innerHTML = currentDate();

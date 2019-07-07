// Display Data to the DOM
let targetDiv = document.getElementById('table-data');
// Create the new row
// let newRow = $("<tr>").append(
//     $("<td>").text(dataArr[0]['Student Name']),
//     $("<td>").text(dataArr[0]['Gender']),
//     $("<td>").text(dataArr[0]['Class Level']),
//     $("<td>").text(dataArr[0]['Home State']),
//     $("<td>").text(dataArr[0]['Major']),
//     $("<td>").text(dataArr[0]['Extracurricular Activity'])
// );

let newRow = document.createElement("<tr>");

let nameData = document.createElement('<td>');
nameData.textContent(dataArr[0]['Student Name']);
let genderData = document.createElement('<td>');
genderData.textContent(dataArr[0]['Gender']);
let classData = document.createElement('<td>');
classData.textContent(dataArr[0]['Class Level']);
let stateData = document.createElement('<td>');
stateData.textContent(dataArr[0]['Home State']);
let majorData = document.createElement('<td>');
majorData.textContent(dataArr[0]['Major']);
let activityData = document.createElement('<td>');
activityData.textContent(dataArr[0]['Extracurricular Activity']);

newRow.appendChild(nameData, genderData, classData, stateData, majorData, activityData);

// Append the new row to the table
targetDiv.append(newRow);
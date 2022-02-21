// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
// console.log (tableData);

// Loop Through `data` and console.log each UFO object and Use d3 to append one table row "tr" for each UFO entry
tableData.forEach(function(ufoEntry) {
console.log(ufoEntry);
var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO Entry value
    Object.entries(ufoEntry).forEach(function([key,value]){
     console.log(key,value);

     // Append a cell to the row for each value in the UFO report object
     var cell = row.append("td");
     cell.text(value);
    });

});

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

 // Prevent the page from refreshing
 d3.event.preventDefault();
 
 // Select the input element and get the raw HTML node
 var inputElement = d3.select("#datetime");

 // Get the value property of the input element
 var inputValue = inputElement.property("value");

 console.log(inputValue);
 console.log(tableData);

var filteredData = tableData.filter(UFO => UFO.datetime === inputValue);

console.log(filteredData);

};
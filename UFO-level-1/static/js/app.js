// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");



function createTable(ufoData){ 
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key,value]) => {
     
        row.append("td").text(value);
    })
};


data.forEach(createTable);


var button = d3.select("#filter-btn")
button.on("click", function() {
    d3.event.preventDefault();
    tbody.html("");
    var datetimeInput = d3.select("#datetime");
    var inputvalue = datetimeInput.property("value");
    var filterdata = data.filter(tbody => tbody.datetime === inputvalue);
 
    if (inputvalue === ""){
        data.forEach(createTable);  
    }
    else { 
        filterdata.forEach(createTable);
    }
  });
  
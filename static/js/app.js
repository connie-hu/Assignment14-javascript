// from data.js
var tableData = data;

//PART 1:

// Get a reference to the table body
var tbody = d3.select("tbody");

// add new rows of data for each UFO sighting
tableData.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
      console.log(key, value);
      var cell = tbody.append("td");
      cell.text(value);
    });
  });


// use a date form in HTML
// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  d3.select("h1>span").text(inputValue);

// filter by inputValue
var filteredData = tableData.filter(date => date.datetime === inputValue);

console.log(filteredData);

d3.select('tbody');
d3.select('tbody').remove();
d3.select('tbody');

filteredData.forEach(function(filteredData) {
    console.log(filteredData);
    var row = tbody.append("tr");
    Object.entries(filteredData).forEach(function([key, value]) {
      console.log(key, value);
      var cell = tbody.append("td");
      cell.text(value);
    });
  });


// for (i=0, i< true.length; i++)



});

//NOTES
//   // Declare variables 
//   var input, filter, table, tr, td, i, txtValue;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("myTable");
//   tr = table.getElementsByTagName("tr");

//   // Loop through all table rows, and hide those who don't match the search query
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     } 
//   }
// }
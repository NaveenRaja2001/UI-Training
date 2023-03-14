// function for accordion and tabs 
$(function () {
  $("#tabs").tabs();
  $("#accordion").accordion();
});

// creating the table 
$table = $("<table>");

$.getJSON('assests/json/location.json', function (element) {
  element.forEach(ele => {
    // creating number of row and column appending the details in the table
    $tableRow = $("<tr class='table-row'>");
    $tableCol1 = $(`<td><div class="img-table-container"><img src="${ele.country}"/></div></td>"+"<td>${ele.state}</td>"+"<td>${ele.city}</td>"+"<td>${ele.contact}</td>`);
    $tableRow.append($tableCol1);
    $table.append($tableRow);
  });
  $("#tabs-3").append($table);
})
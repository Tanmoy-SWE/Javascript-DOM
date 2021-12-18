
  function convertToKelvin() {
    var celsius = document.getElementById('value1').value;
    var v1 = parseFloat(celsius);
    var kelvin = (v1 + 273.14);
    var table = document.getElementById("converter");
    var totalRowCount = table.rows.length;
    var row = table.insertRow(totalRowCount);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = celsius;
    cell2.innerHTML = kelvin;
  }
"use strict";

/* ================================ Elements ================================ */
const inputButton = document.getElementById("value");
const submitButton = document.getElementsByTagName("button")[0];
const clearButton = document.getElementsByTagName("button")[1];

// 1.
let h1 = document.getElementsByTagName("h1")[0];
h1.innerHTML = "Celsius To Kelvin";

// 2.
let label = document.getElementsByTagName("label")[0];
label.innerHTML = "Tempetaure in Celsius";

// 3.
const ths1 = document.getElementsByTagName("th")[0];
ths1.innerHTML = "Celsius";
const ths2 = document.getElementsByTagName("th")[1];
ths2.innerHTML = "Kelvin";

// 4.
submitButton.onclick = (event) => {
	convertToKelvin();
	event.preventDefault();
	inputButton.value = "";
};

clearButton.onclick = (event) => {
	location.reload();
	return false;
};

let tableFull = document.getElementsByTagName("table");

function convertToKelvin() {
	let celsius = inputButton.value;
	let v1 = parseFloat(celsius);
	let kelvin = v1 + 273.14;
	let table = document.getElementsByTagName("table")[0];
	let totalRowCount = table.rows.length;
	let row = table.insertRow(totalRowCount);
	row.id = totalRowCount;
	let cell1 = row.insertCell(0);
	let cell2 = row.insertCell(1);
	cell1.innerHTML = celsius;
	cell2.innerHTML = kelvin;
	if (row.id > 1) {
		table.rows[row.id - 1].style.background = "white";
	}
	row.style.background = "yellow";
}

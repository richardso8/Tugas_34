var nomer = 3;
function clear() {
	$("#nomer").val("");
	$("#nama").val("");
	$("#alamat").val("");
}

function addRow() {
	var table = document.getElementsByTagName("table")[0];
	var newRow = table.insertRow(table.rows.length);

	newRow.setAttribute("id", "row1");

	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);
	var cell3 = newRow.insertCell(2);

	// var nomerBaru = cell1.innerHTML = nomer+1;
	// nomer = nomerBaru;
	cell2.innerHTML = `<input type="text" id="namaBaru">`;
	cell3.innerHTML = `<input type="text" id="alamatBaru">`;
}

function saveRow() {
	var nama = $("#namaBaru").val();
	var alamat = $("#alamatBaru").val();

	if (
		nama === "" ||
		(alamat === "" && nama === undefined) ||
		alamat === undefined
	) {
		// alert("masukkan nama dan alamat!!!");
		alert("Please Fill the Inputs");
	} else {
		var table = document.getElementsByTagName("table")[0];
		var newRow = table.insertRow(table.rows.length);

		var cell1 = newRow.insertCell(0);
		var cell2 = newRow.insertCell(1);
		var cell3 = newRow.insertCell(2);

		var nomerBaru = (cell1.innerHTML = nomer + 1);
		nomer = nomerBaru;
		cell2.innerHTML = nama;
		cell3.innerHTML = alamat;

		$("#row1").remove();

		// $('#namaBaru').remove();
		// $('#alamatBaru').remove();
		swal("Added", "Success!", "success");
	}
}

function reset() {
	$("#row1").remove();
}

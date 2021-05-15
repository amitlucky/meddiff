var selectedRow = null

function onFormSubmit() {
    
	var formData = readFormData();
	if (selectedRow == null)
		insertNewRecord(formData);
	else
		updateRecord(formData);
	resetForm();
    
}

function SearchFormData(data) {
	var found = false
	var count = 0
    var searchstring = document.getElementById("search").value;
	table = document.getElementById("StudentList")
	rowcount = table.rows.length
	rowcount-=1
	if (rowcount == 0)
	{
		alert("Sorry! No records are available for search operation")
	}
	else
	{
		for (var i=1;i<rowcount+1;i++)
		{
			selectedRow = table.rows[i];
			var username = selectedRow.cells[0].innerHTML;
			if (username == searchstring)
			{
				found = true;
				count=count+1;			
			}
		}
		if (found && count >1)
		{
			alert("There are multiple users with that name in the records.")
		}
		else if (found == true && count ==1)
		{
			alert("The user is present in the records")
		}
		else
		{
			alert("Sorry! The user is not present in the available records.")
		}
	}
	
	
}
function readFormData() {
    var formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["RollNo"] = document.getElementById("rollNo").value;
    formData["Age"] = document.getElementById("Age").value;
    formData["Gender"] = document.getElementById("Gender").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("StudentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.RollNo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Age;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Gender;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button onClick="onEdit(this)">Update</button>
                       <button onClick="onDelete(this)">Delete</button>`;
}

function resetForm() {
    document.getElementById("Name").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementById("Age").value = "";
    document.getElementById("Gender").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("rollNo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Age").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Gender").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.RollNo;
    selectedRow.cells[2].innerHTML = formData.Age;
    selectedRow.cells[3].innerHTML = formData.Gender;
}

function onDelete(td) {
    if (confirm('Confirm if you really want to delete ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("StudentList").deleteRow(row.rowIndex);
        resetForm();
    }
}

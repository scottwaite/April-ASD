// Scott Waite
// ASD Term 1304 
$(document).ready(function () {

    $.ajax({
        "url": '/asddirectory/_all_docs?include_docs=true&start_key="name:"&end_key="name:zzz"',
        "dataType": "json",
        "success": function(data) {
            $.each(data.rows, function(index, name){
                var name = employee.doc.name;
                var number = employee.doc.number;
                $('#employeelist').append(
                    $('<li>').append(
                        $('<a>').attr("href", "#")
                            .text(title)
                    )                
                );              
            });
            $('#employeelist').listview('refresh');
        }
    });









    $(function () {
        var operation = "A"; //"A"=Adding; "E"=Editing

        var selected_index = -1; //Index of the selected list item

        var tbEmployees = localStorage.getItem("tbEmployees"); //Retrieve the stored data

        tbEmployees = JSON.parse(tbEmployees); //Converts string to object

        if (tbEmployees === null) //If there is no data, initialize an empty array
            tbEmployees = [];

        function Add() {
            var Employee = JSON.stringify({
                ID: $("#empID").val(),
                Name: $("#empName").val(),
                Phone: $("#empPhone").val(),
                Email: $("#empEmail").val()
            });
            tbEmployees.push(Employee);
            localStorage.setItem("tbEmployees", JSON.stringify(tbEmployees));
            alert("The employee record was saved.");
            return true;
        }

        function Edit() {
            tbEmployees[selected_index] = JSON.stringify({
                ID: $("#empID").val(),
                Name: $("#empName").val(),
                Phone: $("#empPhone").val(),
                Email: $("#empEmail").val()
            }); //Alter the selected item on the table
            localStorage.setItem("tbEmployees", JSON.stringify(tbEmployees));
            alert("The employee record was edited.");
            operation = "A"; //Return to default value
            return true;
        }

        function Delete() {
            tbEmployees.splice(selected_index, 1);
            localStorage.setItem("tbEmployees", JSON.stringify(tbEmployees));
            alert("Employee Deleted.");
        }

        function List() {
            $("#tblList").html("");
            $("#tblList").html(
                "<thead>" +
                "   <tr>" +
                "   <th></th>" +
                "   <th>Employee ID</th>" +
                "   <th>Name</th>" +
                "   <th>Phone</th>" +
                "   <th>Email</th>" +
                "   </tr>" +
                "</thead>" +
                "<tbody>" +
                "</tbody>");
            for (var i in tbEmployees) {
                var emp = JSON.parse(tbEmployees[i]);
                $("#tblList tbody").append("<tr>" +
                    "   <td><img src='edit.png' alt='Edit" + i + "' class='btnEdit'/><img src='delete.png' alt='Delete" + i + "' class='btnDelete'/></td>" +
                    "   <td>" + emp.ID + "</td>" +
                    "   <td>" + emp.Name + "</td>" +
                    "   <td>" + emp.Phone + "</td>" +
                    "   <td>" + emp.Email + "</td>" +
                    "</tr>");
            }
        }

        $("#directoryForm").on("submit", function () {
            if (operation == "A") {
                return Add();
            } else {
                return Edit();
            }
        });

        List();

        $(".btnEdit").on("click", function () {

            operation = "E";
            selected_index = parseInt($(this).attr("alt").replace("Edit", ""), null);

            var emp = JSON.parse(tbEmployees[selected_index]);
            $("#empID").val(emp.ID);
            $("#empName").val(emp.Name);
            $("#empPhone").val(emp.Phone);
            $("#empEmail").val(emp.Email);
            $("#empID").attr("readonly", "readonly");
            $("#empName").focus();
        });

        $(".btnDelete").on("click", function () {
            selected_index = parseInt($(this).attr("alt").replace("Delete", ""), null);
            Delete();
            List();
        });
    });

});
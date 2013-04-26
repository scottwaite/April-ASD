$(document).ready(function() {
    $.ajax({
        "url": "_view/employees",
        "dataType": "json",
        "success": function(data) {
            $.each(data.rows, function(index, program){
                var name = employee.value.name;
                var number = employee.value.number;
                $('#employeelist').append(
                    #('<li>').append(
                        $('<a>').attr("href", "#")
                            .text(title)
                        )
                    );

            });
            $('#programlist').listview('refresh');
        }
    });


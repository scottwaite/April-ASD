$(document).ready(function() {
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
});









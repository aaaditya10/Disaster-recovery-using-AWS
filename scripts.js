// Update these endpoints to match your actual API Gateway resource paths
var API_ENDPOINT_POST = "https://vif5jgowx4.execute-api.us-east-2.amazonaws.com/prod/addStudent";
var API_ENDPOINT_GET = "https://vif5jgowx4.execute-api.us-east-2.amazonaws.com/prod";

// Handle Save Student Data (POST request)
document.getElementById("savestudent").onclick = function() {
    var inputData = {
        "studentid": $('#studentid').val(),
        "name": $('#name').val(),
        "class": $('#class').val(),
        "age": $('#age').val()
    };

    $.ajax({
        url: API_ENDPOINT_POST,
        type: 'POST',
        data: JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("studentSaved").innerHTML = "Student Data Saved!";
        },
        error: function (xhr, status, error) {
            alert("Error saving student data: " + xhr.responseText);
        }
    });
};

// Handle Get All Students (GET request)
document.getElementById("getstudents").onclick = function() {
    $.ajax({
        url: API_ENDPOINT_GET,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            // Clear existing rows except header
            $('#studentTable tr').slice(1).remove();

            // If response is a stringified array, parse it
            var dataArray = typeof response === 'string' ? JSON.parse(response) : response;

            // Append each student record to table
            jQuery.each(dataArray, function(i, data) {
                $("#studentTable").append("<tr> \
                    <td>" + data['studentid'] + "</td> \
                    <td>" + data['name'] + "</td> \
                    <td>" + data['class'] + "</td> \
                    <td>" + data['age'] + "</td> \
                </tr>");
            });
        },
        error: function (xhr, status, error) {
            alert("Error retrieving student data: " + xhr.responseText);
        }
    });
};

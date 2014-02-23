function sendData() {
    request.open("POST", "http://dabo.guru/py/notify", true);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send("HIIII");
}
function sendSuccess(data, textStatus, jqXHR) {
    var $value = $("#send-value");
    $value.show()
    $value.html("Success!")
}
function sendFail(data, textStatus, jqXHR) {
    var $value = $("#send-value");
    $value.show()
    $value.html("Failure: " + textStatus);
}

function sendData() {
    request = $.ajax({
        url: "http://dabo.guru/py/notify",
        type: "POST",
        data: $("#send-form").val(),
        complete: sendSuccess,
        contentType: "text/plain;charset=UTF-8"
    });
    request.done(sendSuccess);
    request.fail(sendFail);
    $("#send-form").hide();
    $("#send-button").hide();
    var sendValue = $("#send-value");
    sendValue.show();
}
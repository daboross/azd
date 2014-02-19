function sendData() {
    request.open("POST", "http://dabo.guru/py/notify", true);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send("HIIII");
}
function sendSuccess(data, textStatus, jqXHR) {
    alert(textStatus);
    alert(jqXHR);
}
function sendFail(data, textStatus, jqXHR) {
    alert("Fail");
    alert(textStatus);
    alert(jqXHR);
}

function sendData() {
    request = $.ajax({
        url: "http://dabo.guru/py/notify",
        type: "POST",
        data: "Hello Test",
        complete: sendSuccess,
        contentType: "text/plain;charset=UTF-8"
    });
    request.done(sendSuccess);
    request.fail(sendFail);
}
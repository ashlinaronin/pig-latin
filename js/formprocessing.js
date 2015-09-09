$(document).ready(function() {
    $('form#pig-latin').submit(function(event) {
        var message = $('input#message').val();
        var translatedMessage = translate(message);

        $('#result').text(translatedMessage);
        $('#result').show();
        event.preventDefault();
    });
});

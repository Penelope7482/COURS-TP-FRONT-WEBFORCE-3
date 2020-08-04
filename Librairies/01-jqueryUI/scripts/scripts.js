$.noConflict;

$(() => {
    const prenom =
        [
            "Sylvain",
            "Jonathan",
            "Jean",
            "Olivier",
            "Pénélope",
        ];

    $("#tags").autocomplete({
        source: function (request, response) {
            var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
            response($.grep(prenom, function (item) {
                return matcher.test(item);
            }));
     } });
});




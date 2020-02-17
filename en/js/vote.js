function checkSelected(html_link, b) {
    if (!b) {
        ModalDisplay("Invalid");
    } else if ($(":checkbox:checked").length != 1) {
        ModalDisplay("Please select pattern");
    } else {
        var selectedContestant = [];
        $('.container input[type="checkbox"]:checked').each(function() {
            var id = $(this).val();
            selectedContestant.push(id);
        });
        var args = getQueryStringArgs();
        args["id"] = selectedContestant[0];
        window.location.href = html_link + createURL(args);
    }
}

function ConfirmStart() {
    var args = getQueryStringArgs();
    id = args["id"].slice(1, args["id"].length);
    $("#front").addClass("Front" + id);
    $("#back").addClass("Back" + id);
    $("#logo").addClass("CLogo" + id);
    $("#heading").html("YOU CHOOSE PATTERN " + id);
}

function ConfirmVote(html_link, b) {
    if (!b) {
        ModalDisplay("Invalid");
    } else {
        var args = getQueryStringArgs();
        id = args["id"].slice(1, args["id"].length);
        if (id.length == 1) {
            id = "0" + id;
        }
        var person = {
            "stuID": args["studentid"],
            "projectName": "TUCUBall",
            "vote": [id]
        };
        //TODO: api
        var exp = $.post("https://asia-east2-cunex-vote-uat.cloudfunctions.net/api/vote", person);
        exp.done(function(data) {
            console.log(data);
        });
        window.location.href = html_link + createURL(args);
    }
}
function createURL(args) {
    var queryString = "";
    var keys = Object.keys(args);
    for (i = 0; i < keys.length; i++) {
        queryString += ((i == 0) ? "?" : "&") + keys[i] + "=" + args[keys[i]];
    }
    return queryString;
}

function getQueryStringArgs() {
    var qs = (location.search.length > 0 ? location.search.substring(1) : '');
    var args = {};
    var items = qs.length ? qs.split('&') : [];
    var item = null;
    var name = null;
    var value = null;
    for (i = 0; i < items.length; i++) {
        item = items[i].split('=');
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if (name.length) {
            args[name] = value;
        }
    }
    return args;
}

function printObject(o) {
    var out = "";
    for (var p in o) {
        out += p + ': ' + o[p] + '\n';
    }
    alert(out);
}

function gotoPage(html_link, b) {
    if (b) {
        window.location.href = html_link + createURL(getQueryStringArgs());
    } else {
        ModalDisplay("Invalid");
    }
}

function CheckSubmit() {
    args = getQueryStringArgs()
    if ($('#button').hasClass("submit")) {
        return 1;
    } else {
        return 0;
    }
}

function goBack() {
    window.history.back();
}

function checkid() {
    var args = getQueryStringArgs();
    var stuID = args["studentid"];
    var years = ["55", "56", "57", "58", "59", "60", "61", "62"];
    var person = {
        "stuID": args["studentid"],
        "projectName": "TUCUBall"
    };
    // TODO : api
    var exp = $.post("https://asia-east2-cunex-vote-uat.cloudfunctions.net/api/idcheck", person);
    exp.done(function(data) {
        console.log(data);
        if (years.includes(stuID.substring(0, 2))) {
            if (data["status"] == "00") {
                ModalDisplay("You are already voted");
            } else {
                $('#button').addClass("submit");
            }
        } else {
            ModalDisplay("Voting right reserved for current students only.");
        }
    });
}
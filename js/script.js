var deathTimeGooglePlus = new Date("Aug 31, 2019 00:00:00").getTime();
var deathTimeInbox = new Date("Mar 31, 2019 00:00:00").getTime();

var googlePlus = setInterval(function() {
    var now = new Date().getTime();
    var distance = deathTimeGooglePlus - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("google-plus").innerHTML = "Google+ dead in: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) //once timer ends
    {
        clearInterval(googlePlus);
        document.getElementById("google-plus").innerHTML = "R.I.P. Google+, 2011-2019";
    }

}, 1000);

var inbox = setInterval(function() {
    var now = new Date().getTime();
    var distance = deathTimeInbox - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("inbox").innerHTML = "Inbox by Gmail dead in: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) //once timer ends
    {
        clearInterval(inbox);
        document.getElementById("inbox").innerHTML = "R.I.P. Inbox by Gmail, 2014-2019";
    }

}, 1000);
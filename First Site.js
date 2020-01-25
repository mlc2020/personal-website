function opencontent(link, website) {
    var i, tcontent, tlinks;

    tcontent = document.getElementsByClassName("tcontent");
    for (i = 0; i < tcontent.length; i++) {
        tcontent[i].style.display = "none";
    }

    tlinks = document.getElementsByClassName("tlinks");
    for (i=0; i < tlinks.length; i++) {
        tlinks[i].className = tlinks[i].className.replace(" active", "");
    }

    document.getElementById(website).style.display = "block";
    link.currentTarget.className += " active";
}
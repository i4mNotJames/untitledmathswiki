function searchSomething() { // SEARCH SYSTEM
    var q = document.getElementById("search").value;
    window.location.replace("../search.html?q=" + encodeURIComponent(q));
}
var g = [];
function addName() {
    var n = document.getElementById("enterName").value;
    g.push(n);
    console.log(g);
    console.log(n);
    document.getElementById("displayName").innerHTML = n;
}
function showList() {
    var c = g.join(" <br>");
    console.log(c);
    document.getElementById("displayList").innerHTML = c;
}
function showSortedList() {
    var s = g.sort();
    console.log(s);
    document.getElementById("displayNewList").innerHTML = s;
}
function searchName() {
    var x, z;
    var l = g.length;
    var o = document.getElementById("enterSearchedName").value;
    for (var i = 0; i < l; i++) {
        z = g[i];
        if (z == o) {
            x++;
            break;
        }
    }
    if (x = 1) {
        document.getElementById("displaySearchedName").innerHTML = "Name found";
    }
    else {
        document.getElementById("displaySearchedName").innerHTML = "Name not found";
    }
}
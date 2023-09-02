window.onload=function() {
    
}

$(document).ready(function () {
    var isOpen = false;

    $("#toggle-search").click(function () {
        if (isOpen == false) {
            $("#searchArea").css("width", "60%");
            $("#searchBar").fadeIn();
            isOpen = true;
        } else if (isOpen == true) {
            $("#searchArea").css("width", "20%");
            $("#searchBar").fadeOut();
            isOpen = false;
        }
    })
})
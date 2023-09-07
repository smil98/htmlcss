window.onload=function() {
    
}

$(document).ready(function () {
    var isOpen = false;

    $("#toggle-search").click(function () {
        if (!isOpen) {
            $("#searchArea").addClass("expanded");
            isOpen = true;
        } else {
            $("#searchArea").removeClass("expanded");
            isOpen = false;
        }
    });
});

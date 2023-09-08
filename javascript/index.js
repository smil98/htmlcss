/*
$(document).ready(function () {
    var isOpen = false;
    var searchResultsDiv = $("#searchResults");
    var searchResultsArticle = $("#searchResultsArticle");
    var mainPage = $("#mainPage"); // Select the mainPage element
    var nullResults = $("#nullResults");
    var query = ""; // Declare query variable here

    // Function to toggle the search bar
    function toggleSearchBar() {
        if (!isOpen) {
            $("#searchArea").addClass("expanded");
            isOpen = true;
        } else {
            $("#searchArea").removeClass("expanded");
            isOpen = false;
        }
    }

    // Bind the toggleSearchBar function to the toggle button click event
    $("#toggle-search").click(function () {
        toggleSearchBar();
    });

    // Function to update search results
    function updateSearchResults(results) {
        searchResultsDiv.empty(); // Clear previous results

        if (results.length > 0) {
            results.forEach(function (result) {
                var listItem = $("<p>").text(result);
                searchResultsDiv.append(listItem);
            });
        } else if (query.trim() !== "" && searchResultsDiv.text().trim() === "") {
            // Display a message when there are no results
            nullResults.show();
        }
    }

    // Function to escape special characters in a string for use in a regular expression
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // Function to perform the search
    function performSearch(query) {
        var escapedQuery = escapeRegExp(query);
        var regex = new RegExp(escapedQuery, 'iu'); // 'u' flag for Unicode support

        // Simulated search results (replace with actual search logic)
        var simulatedResults = ["Result 1", "Result 2", "아이템 3", "다른 아이템"];

        var filteredResults = simulatedResults.filter(function (result) {
            return regex.test(result);
        });

        updateSearchResults(filteredResults);

        // Show or hide the searchResultsArticle and mainPage based on whether Enter is pressed and there are results
        if (filteredResults.length > 0 && query.trim() !== "") {
            searchResultsArticle.show();
            mainPage.hide();
            nullResults.hide();
        } else if (query.trim() !== "") {
            // Show the nullResults article if no results found
            nullResults.show();
            mainPage.hide();
            searchResultsArticle.hide();
        } else {
            // Show the mainPage when the query is empty
            mainPage.show();
            searchResultsArticle.hide();
            nullResults.hide();
        }
    }

    // Listen for Enter key press
    $("#searchBar").on("keypress", function (e) {
        if (e.which === 13) { // Enter key code is 13
            e.preventDefault(); // Prevent form submission
            query = $(this).val(); // Update the query variable
            performSearch(query);
        }
    });

    // Listen for changes in the input field
    $("#searchBar").on("input", function () {
        var newQuery = $(this).val().trim();
        if (newQuery === "") {
            // When the input field is emptied, show the mainPage
            mainPage.show();
            searchResultsArticle.hide();
            nullResults.hide();
        }
    });
});
*/
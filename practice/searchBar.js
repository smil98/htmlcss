// script.js
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Simulated database of items with Korean text
const database = ['Item 1', 'Item 2', '아이템 3', 'Another Item', '다른 아이템'];

// Function to perform the search
function performSearch() {
    const query = searchInput.value.toLowerCase();

    // Use the RegExp constructor with the 'u' flag for Unicode support
    const regex = new RegExp(query, 'iu');

    const filteredResults = database.filter(item => regex.test(item.toLowerCase()));

    // Clear previous results
    searchResults.innerHTML = '';

    // Display results
    if (filteredResults.length > 0) {
        filteredResults.forEach(result => {
            const listItem = document.createElement('li');
            listItem.textContent = result;
            searchResults.appendChild(listItem);
        });
        searchResults.style.display = 'block';
    } else {
        searchResults.style.display = 'none';
    }
}

// Event listener for input changes
searchInput.addEventListener('input', performSearch);

// Event listener to hide results when clicking outside
document.addEventListener('click', function (event) {
    if (event.target !== searchInput) {
        searchResults.style.display = 'none';
    }
});

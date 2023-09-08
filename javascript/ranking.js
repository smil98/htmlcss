$(document).ready(function () {
    var rankingList = $("#rankingList");

    var rankingData = [
        {
            title: "작품명 1",
            author: "작가 1",
            description: "작품 설명 1"
        },
        {
            title: "작품명 2",
            author: "작가 2",
            description: "작품 설명 2"
        },
        {
            title: "작품명 3",
            author: "작가 3",
            description: "작품 설명 3"
        },
        {
            title: "작품명 4",
            author: "작가 4",
            description: "작품 설명 4"
        },
        {
            title: "작품명 5",
            author: "작가 5",
            description: "작품 설명 5"
        },
        {
            title: "작품명 6",
            author: "작가 6",
            description: "작품 설명 6"
        },
        {
            title: "작품명 7",
            author: "작가 7",
            description: "작품 설명 7"
        },
        {
            title: "작품명 8",
            author: "작가 8",
            description: "작품 설명 8"
        },
        {
            title: "작품명 9",
            author: "작가 9",
            description: "작품 설명 9"
        },
        {
            title: "작품명 10",
            author: "작가 10",
            description: "작품 설명 10"
        }
    ];
    

    // Remove existing <li> elements
    rankingList.empty();

    // Populate the section with data from the array
    rankingData.forEach(function (data, index) {
        var li = $("<li>");

        // Create and add the index <p>
        var indexP = $("<p>").text((index + 1).toString());
        li.append(indexP);

        // Create and add the title <p>
        var titleP = $("<p>").text(data.title);
        li.append(titleP);

        // Create and add the author <p>
        var authorP = $("<p>").text(data.author);
        li.append(authorP);

        // Create and add the description <p>
        var descriptionP = $("<p>").text(data.description);
        li.append(descriptionP);

        rankingList.append(li);
    });
});






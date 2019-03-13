var APIKey = "xBQI8f2h0EzwECGopaYlE7ywDT3s61UZ";

$(document).ready(function() {

    $("#clear").on("click", function(){
        $("#results-box").empty();
    
    });

    $("button").on("click", function(event) {
        event.preventDefault();
        var numArticles = $("#num-records").val();

        for (var i = 0; i <= Math.floor((numArticles - 1) / 10); i++) {

            if ((i === Math.floor((numArticles - 1) / 10)) && (numArticles % 10 !== 0)){
                apiCall(i, numArticles % 10);
            } else {
                apiCall(i, 10);
            }
        }
    });

    function apiCall(pageNumber, numArticles){
        var searchTerm = $("#search-term").val();
        var startYear = $("#start-year").val();
        var endYear = $("#end-year").val();

        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + startYear + "0101&end_date=" + endYear + 
                    "1231&q=" + searchTerm + "&page=" + pageNumber + "&api-key=" + APIKey;

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .then(function(response){
            
            console.log(response);
            var articles = response.response.docs;
            console.log(articles);
            debugger;

            for (var i = 0; i < numArticles; i++){
                var articleDiv = $("<div>");
                var title = articles[i].headline.main;
                var author = articles[i].byline.original;
                console.log(title+author);
                articleDiv.append(
                    $("<p>").text(title)
                ).append(
                    $("<p>").text(author)
                );
                $("#results-box").append(articleDiv);
            }

        })

    }

    function displayArticles( /* Takes in Array of articles */) {
        // display articles
    }

});
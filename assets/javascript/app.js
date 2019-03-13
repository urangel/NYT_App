var APIKey = "xBQI8f2h0EzwECGopaYlE7ywDT3s61UZ";

$(document).ready(function() {

    $("button").on("click", function(event) {
        event.preventDefault();
        var numArticle = $("#num-records").val();

        while (numArticle > 0) {
            
        }
    });

    function apiCall(pageNumber){

        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + startDate + "0101&end_date=" + endDate + 
                    "1231&q=" + "something&api-key=" + APIKey;

        $.ajax({
            url = queryURL,
            method: 'GET'
        })
        .then(function(response){



        })

    }

    function displayArticles( /* Takes in Array of articles */) {
        // display articles
    }

});
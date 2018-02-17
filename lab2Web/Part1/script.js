$.ajax({
    url:'https://newsapi.org/v2/everything?' +
        'q=Apple&' +
        'from=2018-02-04&' +
        'sortBy=popularity&' +
        'apiKey=a942fc684a37481b888a46292fd682a6',
    type: 'GET',
    dataType: 'json',
    async: "true",

}).done(function(data){
    console.log(data);
    var picture = data.articles[0].urlToImage;
    var url = data.articles[0].url;
    var timeStamp = data.articles[0].publishedAt;
    var title = data.articles[0].title;
    var name = data.articles[0].source.name;

    for(i=0;i<data.articles.length;i++){
        console.log(picture = data.articles[i].urlToImage);
        console.log(url = data.articles[i].url);
        console.log(timeStamp = data.articles[i].publishedAt);
        console.log(title = data.articles[i].title );
        console.log(name = data.articles[i].source.name);
    }

    $(document).ready(function(){
        $(document).on('keyup','#searchBar',function(){
            var input = $("#searchBar").val().toLowerCase();
            if(document.getElementById("Topic").checked == true){
                $("#article").empty();
                for(i=0;i<data.articles.length;i++){
                    console.log(data.articles[i].title.search(input));
                    if(data.articles[i].title.toLowerCase().indexOf(input) != -1){
                        var x = data.articles[i].urlToImage;
                        $("#article").prepend(
                            '<div class = "roundBorder"> <h3>'+
                            data.articles[i].title +
                            '</h3> <a href = "'+
                            data.articles[i].url +
                            '"><img class = "img-responsive " src ='+
                            data.articles[i].urlToImage +
                            '> </a> <br> <p>' +
                            data.articles[0].publishedAt +
                            '</p> </div>'
                        );

                    }
                }
            }
            else if(document.getElementById("Source").checked == true){
                $("#article").empty();
                for(i=0;i<data.articles.length;i++){
                    console.log(data.articles[i].source.name.search(input));
                    if(data.articles[i].source.name.toLowerCase().indexOf(input) != -1){
                        var x = data.articles[i].urlToImage;
                        $("#article").prepend(
                            '<div> <h3>'+
                            data.articles[i].title +
                            '</h3> <a href = "'+
                            data.articles[i].url +
                            '"><img src ='+
                            data.articles[i].urlToImage +
                            '> </a> <br> <p>' +
                            data.articles[0].publishedAt +
                            '</p> <hr></div>'
                        );
                    }
                }
            }
        })
    });
});




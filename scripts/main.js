$('form').submit(function(e) {
    e.preventDefault();
    $('.load_results').remove();
    var query = $('input').val();
    $('form').trigger('reset');

    $.ajax({
        url: "https://api.edamam.com/search?q=" + query + "&app_id=a4cae087&app_key=70c08a38981a119ce0a388e38183584b",
        type: "GET",
        dataType: "json",
        success: successFn,
        error: errorFn,
        complete: function(xhr, status){
            console.log("The request is completed");
        }
    });

    function successFn(result) {
        var recipes = result.hits;
        for(var i=0; i<recipes.length; i++){
        $("#results").append("<div class='load_results'><h2>"+recipes[i].recipe.label+"</h2><p><img src="+recipes[i].recipe.image+"></p><p id='img-link'><a href="+recipes[i].recipe.url+" target='_blank'>Show me the recipe!</a></p></div>");       
        }
    }

    function errorFn(xhr, status, strErr) {
        console.log("There was an error");
    }
});
$('form').submit(function(e) {
    e.preventDefault();
    $('.shown_title').remove();
    $('.shown_image').remove();
    $('.shown_recipe').remove();
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
        $("#results").append("<div><h2 class='shown_title'>"+recipes[i].recipe.label+"</h2><p class='shown_image'><img src="+recipes[i].recipe.image+"></p><p class='shown_recipe'><a href="+recipes[i].recipe.url+" target='_blank'>Show me the recipe!</a></p></div>");       
        }
    }

    function errorFn(xhr, status, strErr) {
        console.log("There was an error");
    }
});
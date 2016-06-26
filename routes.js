// Here we define our routes to load pages by naming convention.
// e.g. #/startseite -> startseite.html
Path.map("#/:route").to(function(){
  $("#content").load(this.params["route"] + ".html");
});


// default page.
Path.root("#/startseite");

// The `Path.rescue()` method calls a function when a route is activated that you have not yet defined an action for.
function notFound(){
  $("#content").html("404 Not Found");
}
Path.rescue(notFound);

$(document).ready(function(){
    // This line is used to start the PathJS listener.
    Path.listen();
    // mark the currently selected page
    $('#navbar li').click(function() {
        $('#navbar').find('li').removeClass('active');
        $(this).addClass('active');
    });
});

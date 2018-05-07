$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newDevoured");

    var newState = {
      devoured: newDevoured
    };

    //send PUT req
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(function() {
      console.log("the burger is now" + newDevoured);
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burgerAdd")
        .val()
        .trim(),
      devoured: false
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created a new burger");
      location.reload();
    });
  });
});

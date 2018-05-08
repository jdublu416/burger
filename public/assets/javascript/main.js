$(function() {
  $(".change-devoured").on("click", function(event) {
      console.log($(this));
    var id = $(this).attr("id");
    var newDevoured = $(this).attr("data-newDevoured");

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
console.log($("#burgerAdd").val());
    var newBurger = {

      burger_name: $("#burgerAdd").val(),
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

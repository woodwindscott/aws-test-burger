// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {
    
    // Add a new burger submit button functionality
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        // Targets the new burger entry from the home page and stores the value in an object to send to controller
        if ($("#newBurger").val()) {
            var newBurger = {
            burgerName: $("#newBurger").val().trim(),
            };

            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
                }).then(
                function() {
                    console.log("created new burger");
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        }

    }); // End Create Burger Functionality

    // Functionality when someone clicks on "Devour It"
    $(".eat-burger").on("click", function(event) {

        // Grab the id of the record to be updated to true
        var id = $(this).data("id");
        var isDevoured = true;

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevoured
            }).then(
            function() {
                console.log("Update complete - ", isDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    }); // End Update Functionality of "devoured" to true

});
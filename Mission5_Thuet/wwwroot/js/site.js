// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

function calculateTotal() {
    // Add your calculation logic here
    var hours = parseFloat($("#hours").val());
    var chargePerHour = 100

    if (!isNaN(hours) && hours > 0) {
        var total = hours * chargePerHour;
        $("#total").text("Total: $" + total.toFixed(2));
    } else {
        alert("Please enter a valid number of hours.");
    }
}
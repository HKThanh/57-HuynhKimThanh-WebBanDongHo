$(document).ready(function () {
    var clickNum = $('#wishlist-table tbody tr').length;
    //remove tr from table
    $('.button-remove button').click(function () {
        $(this).closest('tr').remove();
        clickNum--;
        clickNum === 0 ? $('#wishlist-table').append("<caption>No products were added to the wishlist</caption>") : "";
    });
});
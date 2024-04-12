var cardItems = document.querySelectorAll(".card-items");
cardItems.forEach(function(cardItem) {
    cardItem.addEventListener("click", function() {
        window.location.href = "./ProductDetailPage.html";
    })
})
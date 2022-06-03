function filterCategories() {
  var select = document.getElementById("products-select");
  var filter = select.value.toLowerCase();
  var items = document.getElementsByClassName("product-category");
  for (var i = 0; i < items.length; i++) {
    var itemClass = items[i].getAttribute("data-item");
    if (filter == "all") {
      items[i].style.display = "flex";
    } else {
      if (itemClass.toLowerCase() == filter) {
        items[i].style.display = "flex";
      } else {
        items[i].style.display = "none";
      }
    }
  }
}

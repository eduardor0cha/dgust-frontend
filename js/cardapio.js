function filterCategories() {
  var select = document.getElementById("products-select");
  var filter = select.value.toLowerCase();
  var items = document.getElementsByClassName("product-category");
  for (var i = 0; i < items.length; i++) {
    var itemClass = items[i].dataset.item;
    if (filter == "all") {
      items[i].style.display = "initial";
    } else {
      if (itemClass.toLowerCase() == filter) {
        items[i].style.display = "initial";
      } else {
        items[i].style.display = "none";
      }
    }
  }
}

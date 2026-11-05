(function () {
  var key = [80, 76, 112, 156, 182, 42, 178, 107];
  var data = [32, 36, 31, 242, 223, 73, 215, 31, 56, 41, 2, 220, 209, 71, 211, 2, 60, 98, 19, 243, 219];
  function address() {
    return data.map(function (value, index) {
      return String.fromCharCode(value ^ key[index % key.length]);
    }).join("");
  }
  document.querySelectorAll("[data-contact]").forEach(function (box) {
    var button = box.querySelector("button");
    button.hidden = false;
    button.addEventListener("click", function () {
      var link = document.createElement("a");
      var value = address();
      link.href = ["mai", "lto:"].join("") + value;
      link.textContent = value;
      box.replaceChild(link, button);
      link.focus();
    });
  });
})();

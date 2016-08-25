window.onload = function() {
  var topElement = $("#top");

  //generate triangle image
  var triangles = Trianglify({
    height: topElement.outerHeight() + 20,
    width: topElement.outerWidth() + 20,
    cell_size: 40,
    x_colors: "YlGnBu"
  }).canvas();
  topElement.css("background-image", "url(" + triangles.toDataURL() + ")");
}

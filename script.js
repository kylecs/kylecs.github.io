window.onload = function() {
  var topElement = document.getElementById("top");

  //generate triangle image
  var triangles = Trianglify({
    height: topElement.offsetHeight + 20,
    width: topElement.offsetWidth + 20,
    cell_size: 40,
    x_colors: "YlGnBu"
  }).canvas();
  topElement.style.backgroundImage = "url(" + triangles.toDataURL() + ")";
}

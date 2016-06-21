var styles = [{"elementType":"geometry","stylers":[{"hue":"#ff4400"},{"saturation":-68},{"lightness":-4},{"gamma":0.72}]},{"featureType":"road","elementType":"labels.icon"},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"hue":"#0077ff"},{"gamma":3.1}]},{"featureType":"water","stylers":[{"hue":"#00ccff"},{"gamma":0.44},{"saturation":-33}]},{"featureType":"poi.park","stylers":[{"hue":"#44ff00"},{"saturation":-23}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"hue":"#007fff"},{"gamma":0.77},{"saturation":65},{"lightness":99}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"gamma":0.11},{"weight":5.6},{"saturation":99},{"hue":"#0091ff"},{"lightness":-86}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"lightness":-48},{"hue":"#ff5e00"},{"gamma":1.2},{"saturation":-23}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"saturation":-64},{"hue":"#ff9100"},{"lightness":16},{"gamma":0.47},{"weight":2.7}]}]
var content = "<div class='info-container'><h2 class='infowindow-header'>ItusOne Technologies</h2><p>707 N 11th St., Milwaukee, WI 53233</p></div>"

function initMap() {
  var map;
  map = new google.maps.Map(document.getElementById('map'), {
    center: {"lat" : 43.03898849999999, "lng" : -87.92607249999999},
    zoom: 14,
    scrollwheel: false
  });
  var infowindow = new google.maps.InfoWindow({
    content: content,
    position: {"lat" : 43.03898849999999, "lng" : -87.92607249999999},
    options: {maxWidth: 200}
  })
  infowindow.setMap(map);
  map.setOptions({styles: styles});
}
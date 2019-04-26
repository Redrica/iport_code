(function () {
  function initMap() {
    const centerLatLng = new google.maps.LatLng(59.930185, 30.340173);
    const markerLatLng = new google.maps.LatLng(59.931757, 30.359401);

    const mapOptions = {
      center: centerLatLng,
      zoom: 14
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
    const image = 'img/marker.png';

    const myMarker = new google.maps.Marker({
      position: markerLatLng,
      map: map,
      icon: image,
      animation: google.maps.Animation.DROP
    });
  }

  google.maps.event.addDomListener(window, "load", initMap);
})();

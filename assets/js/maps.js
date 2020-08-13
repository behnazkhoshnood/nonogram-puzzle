function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                    lat: 46.5200,
                    lng: 30.4050
                }
            });

            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            var locations = [
                {lat: 52.5200,lng: 13.4050},//Berlin
                {lat: 51.5074,lng: 0.1278},//London
                {lat: 59.3293,lng: 18.0686},//Stockholm
                {lat: 34.8021,lng: 38.9968},//Syria
                {lat: 29.5926,lng: 52.5836},//Shiraz
                {lat: 59.3293,lng: 18.0686},//Stockholm
                {lat: 29.5926,lng: 52.5836},//Shiraz
                {lat: 29.5926,lng: 52.5836},//Shiraz
                {lat: 29.5926,lng: 52.5836},//Shiraz
                {lat: 52.5200,lng: 13.4050},//Berlin
                {lat: 29.5926,lng: 52.5836} //Shiraz
        ];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }
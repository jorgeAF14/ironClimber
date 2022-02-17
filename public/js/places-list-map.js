let map

function initMap() {
    drawMap()
    getPlaces()
}

function drawMap() {

    const { Map, places, LatLngBounds, Size, Point, Marker, InfoWindow } = google.maps
    const latLng = { lat: 40.392499, lng: -3.698214 }
    map = new Map(
        document.getElementById('placesListMap'),
        {
            zoom: 11,
            center: latLng,
            //styles: mapStyles.yellowHumanMade
        }
    )
}

function getPlaces() {

    axios.get('/api/places')
        .then(response => printPlacesMarkers(response.data))
        .catch(err => console.log(err))
}

function printPlacesMarkers(places) {

    const { Marker } = google.maps

    let markers = [];

    places.forEach(place => {
        markers.push(
            new Marker({
                map,
                position: {
                    lat: place.location.coordinates[0],
                    lng: place.location.coordinates[1]
                },
                title: place.name,
                placeId: place._id
            })
        )
    });

    markers.forEach(marker => {
        marker.addListener("click", (mapsMouseEvent) => {
            location.href = `${location.origin}/places/${marker.placeId}`
        });
    })
}
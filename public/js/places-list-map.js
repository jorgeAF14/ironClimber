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
    console.table(places);
    const placesCardsContainerEl = document.getElementById('places-cards-container');
    const { Marker } = google.maps

    let markers = [];

    places.forEach(place => {
        const placeCardEl = document.createElement('div');
        placeCardEl.className = 'col-md-3 card';
        placeCardEl.style.setProperty('width', '18rem');
        placeCardEl.innerHTML = `
            <img src=\"${place.images[0]}\" class="card-img-top" alt="place image">
            <div class="card-body">
                <h5 class="card-title">${place.name}</h5>
                <p class="card-text">${place.description}</p>
                <a href=\"/places/${place._id}\" class="btn btn-outline-secondary">Detalle del lugar</a>
            </div>
        `;

        placesCardsContainerEl.appendChild(placeCardEl);

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
            console.log(marker.placeId);
            console.log('***********');
            console.log('lat : ', mapsMouseEvent.latLng.lat());
            console.log('lng : ', mapsMouseEvent.latLng.lng());
            console.log('***********');
            location.href = `${location.origin}/places/${marker.placeId}`
        });
    })
}
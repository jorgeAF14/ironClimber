let map

let singleLocation

function initMap() {
    drawMap()
    //getPlaces()
}

function drawMap() {

    const { Map, places, LatLngBounds, Size, Point, Marker, InfoWindow } = google.maps
    const latLng = { lat: 40.392499, lng: -3.698214 }
    map = new Map(
        document.getElementById('createPlacesMap'),
        {
            zoom: 11,
            center: latLng,
            styles: mapStyles.yellowParks
        }
    )

    // This is to show the lat & long in infoWindow in the map
    //https://developers.google.com/maps/documentation/javascript/examples/event-click-latlng

    // Create the initial InfoWindow.
    let infoWindow = new InfoWindow({
        content: "Click the map to get Lat/Lng!",
        position: latLng,
    });

    map.addListener("click", (mapsMouseEvent) => {
        const placeLatInputEl = document.getElementById('place-lat-input');
        const placeLngInputEl = document.getElementById('place-lng-input');
        console.log('mapsMouseEvent.latLng : ', mapsMouseEvent.latLng)
        // Close the current InfoWindow.
        infoWindow.close();
        // Create a new InfoWindow.
        infoWindow = new InfoWindow({
            position: mapsMouseEvent.latLng,
        });
        infoWindow.setContent(
            JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
        );
        infoWindow.open(map);
        placeLatInputEl.value = mapsMouseEvent.latLng.lat()
        placeLngInputEl.value = mapsMouseEvent.latLng.lng()
    });

    //This is for the Search box on top of the map : COPY /PASTE
    //https://developers.google.com/maps/documentation/javascript/examples/places-searchbox#maps_places_searchbox-javascript
    const input = document.getElementById("place-search-input");
    const searchBox = new places.SearchBox(input);

    let markers = [];

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
        const placesResult = searchBox.getPlaces();
        console.table(placesResult);

        if (placesResult.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach((marker) => {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        const bounds = new LatLngBounds();

        console.log('NÚMERO DE ROCOS:', placesResult.length)

        // const rocodromos = []

        
        // console.log('PLACE ==>', place)
        
        // rocodromos.push({
            //     name: place.name,
            //     location: {
                //         type: 'Point',
                //         coordinates: [lat: place., lng:]
                //     },
                //     address: place.formatted_address,
                // })
                
                
                // name: String,
                //     description: String,
            //         location: {
                //     type: {
                    //         type: String
                    //     },
                    //     coordinates: [Number]
            // },
            // address: String,
            //     image: [String],
            //         level: {
                //     type: String,
                // enum: ['5', '5+', '6a', '6a+', '6b', '6b+', '6c', '6c+', '7a', '7a+', '7b', '7b+', '7c', '7c+', '8a', '8a+', '8b', '8b+', '8c', '8c+', '9a', '9a+', '9b', '9b+', '9c']
                // },
                // material: String,
                //     access: String,
                //         parking: Boolean,
                //             type: {
                    //     type: String,
                    // enum: ['Rocodromo', 'Clasica', 'Deportiva']
                    // },  
                    
             placesResult.forEach((place) => {
                    
                    
                    
                    if (!place.geometry || !place.geometry.location) {
                        console.log("Returned place contains no geometry");
                return;
            }

            const icon = {
                url: place.icon,
                size: new Size(71, 71),
                origin: new Point(0, 0),
                anchor: new Point(17, 34),
                scaledSize: new Size(25, 25),
            };

            // Create a marker for each place.
            markers.push(
                new Marker({
                    map,
                    icon,
                    title: place.name,
                    position: place.geometry.location,
                })
            );

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });


        // 
        //Add event listener to icons in map to get latitude and longitude
        const placeLatInputEl = document.getElementById('place-lat-input');
        const placeLngInputEl = document.getElementById('place-lng-input');

        markers.forEach(marker => {
            marker.addListener("click", (mapsMouseEvent) => {
                console.log('***********');
                console.log('lat : ', mapsMouseEvent.latLng.lat());
                console.log('lng : ', mapsMouseEvent.latLng.lng());
                console.log('***********');
                placeLatInputEl.value = mapsMouseEvent.latLng.lat();
                placeLngInputEl.value = mapsMouseEvent.latLng.lng();
                // map.setZoom(10);
                // map.setCenter(marker.getPosition());
            });
        })

        map.fitBounds(bounds);
    });

}

function getPlaces() {

    axios.get('/api/places')
        .then(response => printPlacesMarkers(response.data))
        .catch(err => console.log(err))
}

function printPlacesMarkers(places) {

    const { Marker } = google.maps

    places.forEach(elm => {

        new Marker({
            map,
            position: {
                lat: elm.location.coordinates[0],
                lng: elm.location.coordinates[1]
            },
            title: elm.name
        })
    })
}
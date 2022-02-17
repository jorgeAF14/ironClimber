let map

function initMap() {
    drawMap()
    //getPlaces()
}

function drawMap(){
    const { Map, Marker } = google.maps;
    const firstCarouselItemEl = document.querySelector('.carousel-item');
    firstCarouselItemEl.classList.add('active');
    const placeName = document.getElementById('place-name').innerText;
    const lat = parseFloat(document.getElementById('place-lat').innerText);           // convert text in Float number
    const lng = parseFloat(document.getElementById('place-lng').innerText);           // convert text in Float number
    const latLng = { lat, lng };
    map = new Map(
        document.getElementById('placeDetailsMap'),
        {
            zoom: 13,
            center: latLng,
            //styles: mapStyles.yellowHumanMade
        }
    )

    new Marker({
        map,
        position: { lat, lng },
        title: placeName
    })


}
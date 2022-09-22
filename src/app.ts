import TileLayer from 'ol/layer/Tile';
import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';

const searchform = document.getElementById('search')!;
const myPlacesForm = document.getElementById('my-home')!;
const xCoord = document.getElementById('x-coord') as HTMLInputElement;
const yCoord = document.getElementById('y-coord') as HTMLInputElement;

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const x = +xCoord.value;
    const y = +yCoord.value;

    const coordinates = {lat: x, lng: y};
    drawMap(coordinates)
}

function myPlacesHandler(event: Event) {
    event.preventDefault();
    const coordinates = {lat: 50.043529763768404, lng: 19.99406263575861};
    drawMap(coordinates);
}

function drawMap(coordinates: {lng: number, lat: number}) {
    document.getElementById('map')!.innerHTML = '';
    new Map({
        target: 'map',
        layers: [
            new TileLayer({source: new OSM()})
        ],
        view: new View({
            center: fromLonLat([coordinates.lng, coordinates.lat]),
            zoom: 16
        })
    });
}

searchform.addEventListener('submit', searchAddressHandler);
myPlacesForm.addEventListener('submit', myPlacesHandler);
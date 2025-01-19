import styles from './Map.module.css';
import { useCitiesContext } from '../contexts/CitiesContext';
import { MapContainer, TileLayer, Marker, Tooltip, useMap, useMapEvents } from 'react-leaflet';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useGeoLocation from '../hooks/useGeoLocation';

export default function Map() {

    const { cities } = useCitiesContext();
    const [position, setPoistion] = useState([51.505, -0.09]);
    const [searchParams, setSearchParams] = useSearchParams();
    const { location, loading, fetchMyLocation } = useGeoLocation();
    
    useEffect(() => {
        const lat = searchParams.get('lat');
        const lng = searchParams.get('lng');
        if (lat || lng) {
            setPoistion([lat, lng]);
        }
    }, [setPoistion, searchParams]);

    useEffect(() => {
        if (location) {
            setPoistion(location);
        }
    }, [location]);

    return (
        <div className={styles.map}>
            <MapContainer center={position} zoom={7} scrollWheelZoom={true} className={styles.mapContainer}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                {cities.map((city) => (
                    <Marker key={city.id} position={[city.position.lat, city.position.lng]}>
                        <Tooltip>
                            {city.cityName}, {city.country}
                        </Tooltip>
                    </Marker>
                ))}
                <RecenterMap position={position} />
                <MapClick />
            </MapContainer>
            <button className={styles.myLocation} disabled={loading} onClick={() => fetchMyLocation()}>{loading ? 'LOADING...' : 'USE MY POSITION'}</button>
        </div>
    )
}

function RecenterMap({ position }) {
    const map = useMap();
    map.setView(position).flyTo(position, 8);
}

function MapClick() {
    const [cords, setCords] = useState(null);
    const navigate = useNavigate();
    useMapEvents({
        click(e) {
            setCords(e.latlng);
            navigate(`addcity?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
        }
    })
    return cords ? (
        <Marker position={[cords.lat, cords.lng]}>
            <Tooltip>
                You clicked here
            </Tooltip>
        </Marker>
    ) : null
}

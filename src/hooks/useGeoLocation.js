import { useState } from 'react'

export default function useGeoLocation() {

    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(false);

    function fetchMyLocation() {
        setLoading(true);
        if (!navigator.geolocation) {
            alert('Geolocation API not supported by browser');
            setLoading(false);
        }
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation([position.coords.latitude, position.coords.longitude]);
            setLoading(false);
        },
            (error) => {
                alert(error.message);
                setLoading(false);
            }

        );
    }

    return { location, loading, fetchMyLocation }
}

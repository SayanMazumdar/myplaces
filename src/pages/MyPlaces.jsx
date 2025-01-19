import SidePanel from "../components/SidePanel";
import Map from "../components/Map";
import styles from './MyPlaces.module.css'
import { useEffect } from "react";
import { useCitiesContext } from "../contexts/CitiesContext";

export default function MyPlaces() {

    const { fetchCities } = useCitiesContext();
    useEffect(() => {
        fetchCities();
    }, [])

    return (
        <div className={styles.layout}>
            <SidePanel />
            <Map />
        </div>
    )
}

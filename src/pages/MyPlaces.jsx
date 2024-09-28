import { useEffect } from "react";
import SidePanel from "../components/SidePanel";
import styles from './MyPlaces.module.css'

const BASE_URL = 'http://localhost:8000';

export default function MyPlaces({ cities, setCities }) {

    useEffect(() => {
        async function fetchCities() {
            try {
                const res = await fetch(`${BASE_URL}/cities`);
                if(!res.ok) {
                    throw new Error('Something went wrong!');
                }
                const data = await res.json();
                setCities(data);
            }
            catch (error) {
                console.error(error)
            }
        }
        fetchCities();
    }, [setCities])

    return (
        <div className={styles.layout}>
            <SidePanel />
        </div>
    )
}

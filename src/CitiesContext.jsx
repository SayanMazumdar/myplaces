import { useState, createContext, useContext, useEffect } from 'react'

const CitesContext = createContext();
const BASE_URL = 'http://localhost:8000';

function CitiesProvider({ children }) {

    const [cities, setCities] = useState([]);
    const [countries, setCountries] = useState([]);
    const [selectedCity, setSelectedCity] = useState({});
    const [loading, setLoading] = useState(false);

    async function fetchCities() {
        try {
            setLoading(true);
            const res = await fetch(`${BASE_URL}/cities`);
            if (!res.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await res.json();
            setCities(data);
        }
        catch (error) {
            console.error(error.message)
        }
        finally {
            setLoading(false);
        }
    }

    async function fetchSelectedCity(id) {
        try {
            setLoading(true);
            const res = await fetch(`${BASE_URL}/cities/${id}`);
            if (!res.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await res.json();
            setSelectedCity(data);
        }
        catch (error) {
            console.error(error.message)
        }
        finally {
            setLoading(false);
        }
    }

    async function onCityAdd(city) {
        try {
            setLoading(true);
            const res = await fetch(`${BASE_URL}/cities`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(city)
                }
            );
            if (!res.ok) {
                throw new Error('Something went wrong!');
            }
            else {
                fetchCities();
            }
        }
        catch (error) {
            console.error(error.message)
        }
        finally {
            setLoading(false);
        }
    }

    async function onCityDelete(id) {
        try {
            setLoading(true);
            const res = await fetch(`${BASE_URL}/cities/${id}`,
                {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            if (!res.ok) {
                throw new Error('Something went wrong!');
            }
            else {
                fetchCities();
            }
        }
        catch (error) {
            console.error(error.message)
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setCountries(
            cities.reduce((countries, city) => {
                if (countries.filter((country) => country.country === city.country).length === 0) {
                    countries.push({country: city.country, countryCode: city.countryCode});
                }
                return countries;
            }, [])
        );
    }, [cities]);

    return (
        <CitesContext.Provider value={{ cities, countries, loading, setLoading, fetchCities, fetchSelectedCity, selectedCity, onCityAdd, onCityDelete }}>
            {children}
        </CitesContext.Provider>
    )
}

function useCitiesContext() {
    const context = useContext(CitesContext);
    if (context === undefined) {
        console.error("Context being used outside of provider component!");
        return
    }
    return context;
}

export { CitiesProvider, useCitiesContext }

import { createContext, useContext, useEffect, useReducer } from 'react'

const CitesContext = createContext();
const BASE_URL = 'http://localhost:8000';

const initialState = { cities: [], countries: [], selectedCity: {}, loading: false };

function reducer(state, action) {
    switch (action.type) {
        case 'loading':
            return { ...state, loading: action.payload };
        case 'citiesLoaded':
            return { ...state, cities: action.payload, loading: false };
        case 'cityLoaded':
            return { ...state, selectedCity: action.payload, loading: false };
        case 'loadCountries':
            return { ...state, countries: action.payload };
        default:
            return console.error('Unknown action type!');
    }
}

function CitiesProvider({ children }) {

    const [{ cities, countries, selectedCity, loading }, dispatch] = useReducer(reducer, initialState);

    async function fetchCities() {
        try {
            dispatch({ type: 'loading', payload: true });
            const res = await fetch(`${BASE_URL}/cities`);
            if (!res.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await res.json();
            dispatch({ type: 'citiesLoaded', payload: data })
        }
        catch (error) {
            console.error(error.message)
        }
    }

    async function fetchSelectedCity(id) {
        if (selectedCity.id === id) return;
        try {
            dispatch({ type: 'loading', payload: true });
            const res = await fetch(`${BASE_URL}/cities/${id}`);
            if (!res.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await res.json();
            dispatch({ type: 'cityLoaded', payload: data });
        }
        catch (error) {
            console.error(error.message)
        }
    }

    async function onCityAdd(city) {
        try {
            dispatch({ type: 'loading', payload: true });
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
                dispatch({ type: 'loading', payload: false });
            }
        }
        catch (error) {
            console.error(error.message)
        }
    }

    async function onCityDelete(id) {
        try {
            dispatch({ type: 'loading', payload: true });
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
                dispatch({ type: 'loading', payload: false });
            }
        }
        catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        if (cities.length > 0) {
            const country = cities.reduce((countries, city) => {
                if (countries.filter((country) => country.country === city.country).length === 0) {
                    countries.push({ country: city.country, countryCode: city.countryCode });
                }
                return countries;
            }, [])
            dispatch({type: 'loadCountries', payload: country });
        }
    }, [cities]);


    return (
        <CitesContext.Provider value={{ cities, countries, loading, dispatch, fetchCities, fetchSelectedCity, selectedCity, onCityAdd, onCityDelete }}>
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

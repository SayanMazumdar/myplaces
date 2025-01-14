import Loader from './Loader';
import styles from './NewForm.module.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCitiesContext } from '../CitiesContext';


const API_KEY = '80915634e6244f1eac379622c7b5b42b';
const API_URL = 'https://api.geoapify.com/v1/geocode/reverse';
const today = new Date();
const formattedDate = `${today.toLocaleDateString('en-US', { year: 'numeric' })}-${today.toLocaleDateString('en-US', { month: '2-digit' })}-${today.toLocaleDateString('en-US', { day: '2-digit' })}`

export default function NewForm() {

    const { loading, setLoading, onCityAdd } = useCitiesContext();
    const [error, setError] = useState(false);
    const [cityName, setCityName] = useState('');
    const [data, setData] = useState({});
    const [date, setDate] = useState(formattedDate);
    const [notes, setNotes] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');

    async function handleSubmit(e) {
        e.preventDefault();
        const submittedData = { cityName, country: data.country, countryCode: data.country_code.toLowerCase(), date, notes, position: { lat, lng } };
        await onCityAdd(submittedData);
        navigate('/myplaces');
    }

    useEffect(() => {
        async function fetchLocation() {
            try {
                if (!lat && !lng) {
                    throw new Error('Please select a valid city from the map. Click okay to continue');
                }
                const res = await fetch(`${API_URL}?lat=${lat}&lon=${lng}&apiKey=${API_KEY}`);
                if (!res.ok) {
                    throw new Error('Something went wrong, please click okay and reload');
                }
                const data = await res.json();

                if (!data.features.at(0).properties.city && !data.features.at(0).properties.county) {
                    throw new Error('Please select a valid city from the map. Click okay to continue');
                }
                setCityName(data.features.at(0).properties.city || data.features.at(0).properties.county);
                setData(data.features.at(0).properties);
            }
            catch (error) {
                alert(error.message);
                setError(true);
            }
            finally {
                setLoading(false);
            }
        }
        setError(false);
        setLoading(true);
        fetchLocation();
    }, [lat, lng, setLoading])

    return (
        <>
            {
                loading ? <Loader /> : error ? null :
                    <div className={`${styles.login} ${loading ? styles.disableForm : ''}`}>
                        <form>
                            <div className={styles.formRow}>
                                <label htmlFor="name">City name</label>
                                <input type='text' name="cityName" id="name" value={cityName} onChange={(e) => setCityName(e.target.value)} />
                            </div>
                            <div className={styles.formRow}>
                                <label htmlFor="date">When did you go to {cityName}?</label>
                                <input type='date' name="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                            </div>
                            <div className={styles.formRow}>
                                <label htmlFor="notes">Notes about your trip</label>
                                <textarea name="notes" id="notes" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
                            </div>
                            <div className={styles.formBtn}>
                                <button type="submit" onClick={handleSubmit}>ADD</button>
                                <button className='btnTransparent' onClick={() => navigate('/myplaces')}>BACK</button>
                            </div>
                        </form>
                    </div>
            }
        </>
    )
}

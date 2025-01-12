import EmojiToImg from './EmojiToImg';
import styles from './CityDetails.module.css';
import Loader from './Loader';
import { useNavigate, useParams } from 'react-router-dom';
import { useCitiesContext } from "../CitiesContext";
import { useEffect } from 'react';

export default function CityDetails() {

  const navigate = useNavigate();
  const { id } = useParams();
  const { fetchSelectedCity, selectedCity, loading } = useCitiesContext();

  useEffect(() => {
    fetchSelectedCity(id);
  }, [id])

  const { countryCode, cityName, date, notes } = selectedCity;

  return (
    <>
      {loading ? <Loader /> :
        <div className={styles.layout}>
          <div className={styles.row}>
            <p className={styles.label}>CITY NAME</p>
            <div className={styles.city}>
              {EmojiToImg(countryCode)}
              <p>{cityName}</p>
            </div>
          </div>
          <div className={styles.row}>
            <p className={styles.label}>YOU WENT TO <span className={styles.cityName}>{cityName}</span> ON</p>
            <p className={styles.field}>📅 {new Date(date).toLocaleDateString('en-US', { weekday: "long", day: "2-digit", month: "long", year: "numeric" })}</p>
          </div>
          <div className={styles.row}>
            <p className={styles.label}>YOUR NOTES</p>
            <p className={styles.field}>{notes ? notes : "N/A"}</p>
          </div>
          <div className={styles.row}>
            <p className={styles.label}>LEARN MORE</p>
            <a href={`https://en.wikipedia.org/wiki/${cityName}`} target='blank' className={`${styles.field} ${styles.link}`}>Check out {cityName} on Wikipedia &rarr;</a>
          </div>
          <button className='btnTransparent' onClick={() => navigate(-1)}>&larr; BACK</button>
        </div>
      }
    </>
  )
}

import EmojiToImg from './EmojiToImg';
import styles from './CityDetails.module.css';
import { useNavigate, useParams } from 'react-router-dom';

export default function CityDetails({ cities }) {

  const { id } = useParams();
  const navigate = useNavigate();
  const selectedCity = cities.filter((city) => city.id === id).at(0);

  return (
    <div className={styles.layout}>
      <div className={styles.row}>
        <p className={styles.label}>CITY NAME</p>
        <div className={styles.city}>
          {EmojiToImg(selectedCity.emoji)}
          <p>{selectedCity.cityName}</p>
        </div>
      </div>
      <div className={styles.row}>
        <p className={styles.label}>YOU WENT TO {selectedCity.cityName.toUpperCase()} ON</p>
        <p className={styles.field}>📅 {new Date(selectedCity.date).toLocaleDateString('en-US', { weekday: "long", day: "2-digit", month: "long", year: "numeric" })}</p>
      </div>
      <div className={styles.row}>
        <p className={styles.label}>YOUR NOTES</p>
        <p className={styles.field}>{selectedCity.notes ? selectedCity.notes : "N/A"}</p>
      </div>
      <div className={styles.row}>
        <p className={styles.label}>LEARN MORE</p>
        <a href={`https://en.wikipedia.org/wiki/${selectedCity.cityName.toLowerCase()}`} target='blank' className={`${styles.field} ${styles.link}`}>Check out {selectedCity.cityName} on Wikipedia &rarr;</a>
      </div>
      <button className='btnTransparent' onClick={() => navigate(-1)}>&larr; BACK</button>
    </div>
  )
}

import { Link } from 'react-router-dom';
import styles from './City.module.css';
import EmojiToImg from './EmojiToImg';
import { useCitiesContext } from '../contexts/CitiesContext';

export default function City({ cityObj }) {

  const { selectedCity, onCityDelete } = useCitiesContext();
  const { cityName, countryCode, date, id, position } = cityObj;

  function handleDelete(e) {
    e.preventDefault();
    onCityDelete(id);
  }
  
  return (
    <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
      <div className={`${styles.city} ${selectedCity.id === id ? `${styles.selectedCity}` : ''}`}>
        <div className={styles.firstCol}>
          {EmojiToImg(countryCode)}
          {cityName}
        </div>
        <div className={styles.secCol}>
          {new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          <button className={styles.removeBtn} onClick={handleDelete}>&times;</button>
        </div>
      </div>
    </Link>
  )
}

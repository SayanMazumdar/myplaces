import City from './City';
import styles from './Cities.module.css';

export default function Cities({ cities }) {
  return (
    <div className={styles.cities}>
      {cities.map((item) => <City key={item.id} cityObj={item} />)}
    </div>
  )
}

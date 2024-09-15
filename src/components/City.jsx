import styles from './City.module.css';

export default function City({ cityObj }) {

  const { cityName, country, emoji, date } = cityObj;
  return (
    <div className={styles.city}>
      {emoji}
      {cityName}
    </div>
  )
}

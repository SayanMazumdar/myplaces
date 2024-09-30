import EmojiToImg from './EmojiToImg';
import styles from './CityDetails.module.css';

const tempData = {
  "city": "Berlin",
  "emoji": "🇩🇪",
  "date": "2027-02-12T09:24:11.863Z",
  "notes": "Amazing!"
}

export default function CityDetails() {
  return (
    <div className={styles.layout}>
      <div className={styles.row}>
        <p className={styles.label}>CITY NAME</p>
        <div className={styles.city}>
          {EmojiToImg(tempData.emoji)}
          <p>{tempData.city}</p>
        </div>
      </div>
      <div className={styles.row}>
        <p className={styles.label}>YOU WENT TO BERLIN ON</p>
        <p className={styles.field}>📅 {new Date(tempData.date).toLocaleDateString('en-US', { weekday: "long", day: "2-digit", month: "long", year: "numeric" })}</p>
      </div>
      <div className={styles.row}>
        <p className={styles.label}>YOUR NOTES</p>
        <p className={styles.field}>{tempData.notes}</p>
      </div>
      <div className={styles.row}>
        <p className={styles.label}>LEARN MORE</p>
        <a href={`https://en.wikipedia.org/wiki/${tempData.city.toLowerCase()}`} target='blank' className={`${styles.field} ${styles.link}`}>Check out Berlin on Wikipedia &rarr;</a>
      </div>
      <button className='btnTransparent'>&larr; BACK</button>
    </div>
  )
}

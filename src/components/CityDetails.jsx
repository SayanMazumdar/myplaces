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
      <div className={styles.Row}>
        <p>CITY NAME</p>
        <div className={styles.firstCol}>
          {EmojiToImg(tempData.emoji)}
          <p>{tempData.city}</p>
        </div>
      </div>
      <div className={styles.Row}>
        <p>YOU WENT TO BERLIN ON</p>
        <p>📅 {new Date(tempData.date).toLocaleDateString('en-US',{ weekday: "short", day: "2-digit", month: "long", year: "numeric"})}</p>
      </div>
      <div className={styles.Row}>
        <p>YOUR NOTES</p>
        <p>{tempData.notes}</p>
      </div>
      <div className={styles.Row}>
        <p>LEARN MORE</p>
        <a href={`https://en.wikipedia.org/wiki/${tempData.city.toLowerCase()}`} target='blank'>Check out Berlin on Wikipedia &rarr;</a>
      </div>
      <button type="submit">&larr; BACK</button>

    </div>
  )
}

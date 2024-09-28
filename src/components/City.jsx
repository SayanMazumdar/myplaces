import { Link } from 'react-router-dom';
import styles from './City.module.css';
import EmojiToImg from './EmojiToImg';

export default function City({ cityObj }) {

  const { cityName, emoji, date, id } = cityObj;
  return (
    <Link to={`${id}`}>
      <div className={styles.city}>
        <div className={styles.firstCol}>
          {EmojiToImg(emoji)}
          {cityName}
        </div>
        <div className={styles.secCol}>
          {new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          <button className={styles.removeBtn}>&times;</button>
        </div>
      </div>
    </Link>
  )
}

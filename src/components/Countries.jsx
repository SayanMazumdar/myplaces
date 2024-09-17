import EmojiToImg from './EmojiToImg';
import styles from './Countries.module.css';

export default function Countries({ cities }) {
  return (
    <div className={styles.countries}>
      {cities.map((item) => <Country cityObj={item} key={item.id} />)}
    </div>
  )
}

function Country({ cityObj }) {

  const { country, emoji } = cityObj;

  return (
    <div className={styles.country}>
      {EmojiToImg(emoji)}
      {country}
    </div>
  )
}

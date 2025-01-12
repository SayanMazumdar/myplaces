import EmojiToImg from './EmojiToImg';
import styles from './Countries.module.css';
import { useCitiesContext } from "../CitiesContext";

export default function Countries() {

  const { cities } = useCitiesContext();
  return (
    <div className={styles.countries}>
      {cities.map((item) => <Country cityObj={item} key={item.id} />)}
    </div>
  )
}

function Country({ cityObj }) {

  const { country, countryCode } = cityObj;

  return (
    <div className={styles.country}>
      {EmojiToImg(countryCode)}
      {country}
    </div>
  )
}

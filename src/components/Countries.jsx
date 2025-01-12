import EmojiToImg from './EmojiToImg';
import styles from './Countries.module.css';
import { useCitiesContext } from "../CitiesContext";

export default function Countries() {

  const { countries } = useCitiesContext();
  return (
    <div className={styles.countries}>
      {countries.map((item) => <Country countryObj={item} key={item.countryCode} />)}
    </div>
  )
}

function Country({ countryObj }) {

  const { country, countryCode } = countryObj;

  return (
    <div className={styles.country}>
      {EmojiToImg(countryCode)}
      {country}
    </div>
  )
}

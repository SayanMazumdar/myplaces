import Navigation from '../components/Navigation';
import styles from './Pricing.module.css';

export default function Pricing() {
    return (
        <div className={styles.layout}>
            <Navigation />
            <div className={styles.product}>
                <h1>Simple Pricing</h1>
                <p>Unlock the full potential of our world-tracking map with our flexible pricing options. 
                Whether you’re a globe-trotting adventurer or an armchair explorer, we’ve got a plan that suits 
                your wanderlust.</p><br />
                <p>Choose from our Basic Explorer package for casual travelers, our Wanderer Plus plan with 
                added features, or go all-in with our Globetrotter Pro subscription. No matter which path you take,
                 your memories will find a home on our map.</p>
            </div>
        </div>
    )
}

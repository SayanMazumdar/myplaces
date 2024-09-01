import Navigation from '../components/Navigation';
import styles from './Product.module.css';

export default function Product() {
    return (
        <div className={styles.layout}>
            <Navigation />
            <div className={styles.product}>
                <h1>About MyPlaces</h1>
                <p>A world map that tracks your footsteps into every city that you can think of. Never forget your wonderful
                    experiences, and show your friends how you have wondered the world.</p><br />
                <p>Embark on a digital journey with our interactive world map. It’s more than just pins on a screen;
                    it’s a canvas that captures your adventures. From bustling metropolises to hidden gems,
                    trace your path across continents. Share your travel tales, reminisce about sunsets over ancient
                    ruins, and inspire others to explore. Let the map be your storyteller, weaving memories into a
                    colorful tapestry of wanderlust</p>
            </div>
        </div>
    )
}

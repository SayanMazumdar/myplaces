import Navigation from '../components/Navigation';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className={styles.layout}>
      <Navigation />
      <div className={styles.home}>
        <h1>You travel the world.<br></br>
          MyPages keeps track of your adventures.</h1>
        <p>A world map that tracks your footsteps into every city that you can think of. Never forget your wonderful
          experiences, and show your friends <br></br> how you have wondered the world.</p>
        <Link to='/myplaces'><button>START TRACKING NOW</button></Link> 
      </div>
    </div>
  )
}

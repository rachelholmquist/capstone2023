import styles from './Accommodation.module.css'
import kingRoom from '../images/kingRoomInterior.jpg'

const Accommodation = () => {
    return (
        <div className={styles.card}>
            
            <img className={styles.image} src={kingRoom} alt="king room"/>
            <div className={styles.detailCard}>
            <h1>King Waterfront Room</h1><br/>
            <p className={styles.room_details}>blah blah blah blah blah blah 
            blah blah blah blah blah blah blah blah blah blah blah blah blah 
            blah blah blah blah blah blah blah blah blah blah blah blah blah </p>
            </div>
        </div>
    );
};

export default Accommodation
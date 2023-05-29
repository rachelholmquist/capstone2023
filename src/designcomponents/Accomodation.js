import styles from './Accomodation.module.css'
import kingRoom from '../images/kingRoomInterior.jpg'

const Accomodation = () => {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={kingRoom} alt="king room"/>
            <h1>King Waterfront Room</h1>
            <p className={styles.room_details}></p>
        </div>
    );
};

export default Accomodation
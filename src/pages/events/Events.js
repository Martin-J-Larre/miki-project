import EventsBox from "../../components/eventsBox/EventsBox";
import styles from "./events.module.css";
import event1Pic from "../../img/Event-1.png";
import event2Pic from "../../img/Event-2.png";
import event3Pic from "../../img/Event-3-posta.png";

const Events = () => {
    return (
        <section>
            <h1 className={styles.titleEvents}>Events</h1>
            <div className={styles.eventsContainer}>
                <EventsBox eventPic={event1Pic} urlDetailEvent={""} />
                <EventsBox eventPic={event2Pic} urlDetailEvent={""} />
                <EventsBox eventPic={event3Pic} urlDetailEvent={""} />
            </div>
        </section>
    );
};

export default Events;

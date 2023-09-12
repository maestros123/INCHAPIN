import styles from "./Video.module.scss";
import Modal from "@/components/modal/Modal";

const Video = ({setVideoOpen}) => {

    return (
        <Modal onCloseAction={() => setVideoOpen(false)}>
            <div className={styles.wrapper}>
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="YouTube video"
                    width="100%"
                    height="100%"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </Modal>

    );
};

export default Video;
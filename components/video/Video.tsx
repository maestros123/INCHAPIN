import styles from "./Video.module.scss";
import Modal from "@/components/modal/Modal";
import ReactPlayer from "react-player";
import React, {FC} from "react";


type VideoProps = {
    setVideoOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Video:FC<VideoProps> = ({setVideoOpen}) => {

    return (
        <Modal onCloseAction={() => setVideoOpen(false)}>
            <div className={styles.wrapper}>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                    playing={true}
                    width="100%"
                    height="100vh"
                    controls={true}
                />
            </div>
        </Modal>

    );
};

export default Video;
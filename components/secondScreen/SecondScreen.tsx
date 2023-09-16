import styles from './SecondScreen.module.scss'
import Image from 'next/image'
import Round from '../../assets/round.svg'
import Dash from '../../assets/dash.svg'
import React, {FC} from "react";

type SecondScreenProps = {
    setVideoOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SecondScreen:FC<SecondScreenProps> = ({setVideoOpen}) => {

    function openVideo() {
        setVideoOpen(prev => !prev);
    }

    return (
        <section className={styles.container}>
            <div className={styles.about}>о проекте</div>
            <div className={styles.image}>
                <Image
                    src="/house2.png"
                    alt="house"
                    width={730}
                    height={900}
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
                <div className={styles.round}>
                    <Round />
                </div>
            </div>
            <div className={styles.info}>
                <Dash/>
                <div className={styles.safeLife}>
                    <p>уютное и безопасное<br /> пространство для счастливой,<br /> <span>спокойной и размеренной жизни</span></p>
                </div>


                <div className={styles.description}>
                    <p><span>Квартиры от 75 до 300 м<sup>2</sup> с чистовой отделкой</span>,<br /> балконами, лоджиями и террасами В собственной ЗАКРЫТОЙ охраняемой территориИ.</p>
                </div>

                <div className={styles.videoWrapper} onClick={openVideo}>
                    <div className={styles.videoText}>
                        <p>ВИДЕО о ПРОЕКТЕ <br /> <span>1:25 минут</span></p>
                    </div>
                    <div className={styles.videoPlay}>
                        <Image
                            fill
                            src="/videoWrapper.png"
                            alt="video"
                            sizes="(max-width: 1769px) 186px, (max-width: 1280px) 133px, (max-width: 767px) 131px, 241px"
                        />
                        <p></p>
                    </div>

                </div>
            </div>



        </section>
    );
};

export default SecondScreen;
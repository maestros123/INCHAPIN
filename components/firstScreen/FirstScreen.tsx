import Image from 'next/image'
import Header from "@/components/header/Header";
import styles from './FirstScreen.module.scss'
import {useEffect, useState} from "react";


const FirstScreen = ({setOpen}) => {

    const [img, setImg] = useState(getImageSrc(window.innerWidth));


    useEffect(() => {

        setImg(getImageSrc(window.innerWidth));
        const handleResize = () => {
            setImg(getImageSrc(window.innerWidth));
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


// Вспомогательная функция для определения источника изображения
    function getImageSrc(width) {
        if (width <= 767) {
            return "/house767.png"
        } else if (width <= 1023) {
            return "/house1023.png"
        } else if (width <= 1280) {
            return "/house1280.png"
        } else if (width <= 1769) {
            return "/house1769.png"
        } else {
            return "/house.png"
        }
    }


    return (
        <section className={styles.screen}>
            <div className={styles.wrapper}>
                <Header setOpen={setOpen}/>

                <div className={styles.image}>
                    <Image
                        width={1760}
                        height={600}
                        src={img}
                        alt="House"
                        priority={true}
                        style={{objectFit: "cover", width: '100%', height: 'auto%', maxHeight:'60vh'}}
                    />
                </div>

                <div className={styles.container}>
                    <div className={styles.subtitle}>Дом бизнес-класса <br/>для ценителей роскоши</div>
                    <div className={styles.title}>
                        <Image
                            fill
                            src="/bigLogo.png"
                            alt="logo"
                            sizes="(max-width: 1769px) 717px, (max-width: 1280px) 553px, (max-width: 1023px) 688px, (max-width: 767px) 320px, 862px"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstScreen;
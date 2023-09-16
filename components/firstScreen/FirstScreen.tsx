import Image from 'next/image'
import Header from "@/components/header/Header";
import styles from './FirstScreen.module.scss'
import Logo from '../../assets/logo.svg';
import React, {FC} from "react";

type FirstScreenProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const FirstScreen: FC<FirstScreenProps> = ({setOpen}) => {

   return (
        <section className={styles.screen}>
            <div className={styles.wrapper}>
                <Header setOpen={setOpen}/>

                <div className={styles.image}>
                    <Image
                        width={1760}
                        height={600}
                        src='/newHouse.jpg'
                        alt="House"
                        priority={true}
                        style={{objectFit: "cover", width: '100%', height: 'auto%', maxHeight:'60vh'}}
                    />
                </div>

                <div className={styles.container}>
                    <div className={styles.subtitle}>Дом бизнес-класса <br/>для ценителей роскоши</div>
                    <div className={styles.title}>
                        <Logo/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstScreen;
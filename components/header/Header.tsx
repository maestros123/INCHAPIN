import styles from './Header.module.scss'
import Button from "@/components/ui/button/Button";
import Image from "next/image";
import SelectButton from "@/components/select/Select";


const Header = ({setOpen}) => {

    function handleClick() {
        setOpen(prev => !prev);
    }

    return (
        <header className={styles.container}>
            <div className={styles.menu}>
                <div className={styles.menuIcon}>
                    <Image
                        fill
                        src="/burger.png"
                        alt="burger icon"
                        sizes="(max-width: 1769px) 32px, (max-width: 767px) 29px, 38px"
                    />

                </div>
                <p>МЕНЮ</p>
            </div>
            <div className={styles.chooseFlat}>
                <SelectButton/>
            </div>
            <div className={styles.logo}>
                <Image
                    fill
                    src="/logo.svg"
                    alt="logo"/>
            </div>
            <div className={styles.phone}>+7 495 527 21 21</div>
            <div className={styles.callRequest} onClick={handleClick}>
                <p>ЗАКАЗАТЬ ЗВОНОК</p>
            </div>
        </header>
    )
}

export default Header
import styles from './Header.module.scss'
import SelectButton from "@/components/select/Select";
import Logo from '../../assets/logo.svg';
import Burger from '../../assets/burger.svg';
import React, {FC} from "react";

type HeaderProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: FC<HeaderProps> = ({setOpen}) => {

    function handleClick() {
        setOpen(prev => !prev);
    }

    return (
        <header className={styles.container}>
            <div className={styles.menu}>
                <div className={styles.menuIcon}>
                    <Burger />
                </div>
                <p>МЕНЮ</p>
            </div>
            <div className={styles.chooseFlat}>
                <SelectButton/>
            </div>
            <div className={styles.logo}>
                <Logo/>
            </div>
            <div className={styles.phone}>+7 495 999 99 99</div>
            <div className={styles.callRequest} onClick={handleClick}>
                <p>ЗАКАЗАТЬ ЗВОНОК</p>
            </div>
        </header>
    )
}

export default Header
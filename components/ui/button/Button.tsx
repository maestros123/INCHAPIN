import styles from './Button.module.scss'
import {FC} from "react";

type ButtonProps = {
    label: string,
    location: string,
    onClick: () => void
}

const Button:FC<ButtonProps> = ({label, location, onClick}) => {
    return (
        <div>
            <div className={`${styles.button} ${styles[location]}`} onClick={onClick}>
                <div><p>{label}</p></div>
            </div>
        </div>
    );
};

export default Button;
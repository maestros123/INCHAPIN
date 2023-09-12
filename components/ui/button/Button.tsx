import styles from './Button.module.scss'

const Button = ({label, location, onClick, selectOptions}) => {
    return (
        <div>
            <div className={`${styles.button} ${styles[location]}`} onClick={onClick}>
                <div><p>{label}</p></div>
            </div>
        </div>
    );
};

export default Button;
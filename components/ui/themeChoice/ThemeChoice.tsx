import {useTheme} from "@/context/ThemeContext";
import styled from './ThemeChoice.module.scss'


const ThemeChoice = () => {
    const {theme, setTheme} = useTheme();

    const dataColor = ['blue', 'teal', 'rose', 'purple']

    return (

        <ul className={styled.container}>
            {dataColor.map((item: string) =>
                theme !== item ? (
                    <li className={styled[item]} onClick={() => setTheme(item)} key={item}></li>
                ) : null
            )}
        </ul>

    );
};

export default ThemeChoice;
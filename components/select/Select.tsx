import {useState} from "react";
import Select from 'react-select';
import styles from './SelectButton.module.scss'
import './SelectButton.scss'

const SelectButton = () => {
    const [selectedOption, setSelectedOption] = useState({value: 'default', label: 'Выбрать квартиру'});

    const options = [
        {value: 'apartment-1', label: 'Однокомнатная'},
        {value: 'apartment-2', label: 'Двухкомнатная'},
        {value: 'apartment-3', label: 'Трехкомнатная'},
    ]


    const customStyles = {
        container: (base) => ({
            ...base,
            width: '100%',
            height: '100%',
            display: 'flex'
        }),
        control: (provided, state) => ({
            ...provided,
            border: "none",
            background: 'inherit',
            overflow: 'hidden',
            padding: '0 14px',
            width: '100%',
            boxShadow: state.isFocused ? 'none' : null,
        }),
        indicatorSeparator: (provided, state) => ({
            ...provided,
            display: 'none'
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            padding: '0'
        }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
            color: '#ffffff'
        }),
        menu: (provided, state) => ({
            ...provided,
            widths: '100%'
        }),
        singleValue: (provided, state) => {
            const transition = 'transform 300ms';
            const transform = state.isFocused ? 'translateY(-100%)' : 'translateY(0)';
            const color = '#ffffff';

            return { ...provided, transition, transform, color };
        },
        placeholder: (provided, state) => {
            const transition = 'transform 300ms';
            const transform = state.isFocused ? 'translateY(-100%)' : 'translateY(0)';
            const color = '#ffffff';

            return { ...provided, transition, transform, color };
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <p className={styles.choice}>{selectedOption.label}</p>
            </div>
            <Select
                styles={customStyles}
                classNamePrefix="select"
                value={selectedOption}
                onChange={setSelectedOption}
                name="button"
                options={options}
                placeholder={selectedOption.label}
            />
        </div>
    );
};

export default SelectButton;
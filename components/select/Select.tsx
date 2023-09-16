import {FC, useState} from "react";
import Select from 'react-select';
import styles from './SelectButton.module.scss'

type SelectButtonProps = {
    value: string;
    label: string;
};

const SelectButton:FC<SelectButtonProps> = () => {
    const [selectedOption, setSelectedOption] = useState<SelectButtonProps>({value: 'default', label: 'Выбрать квартиру'});

    const options: SelectButtonProps[] = [
        {value: 'apartment-1', label: 'Дуплекс'},
        {value: 'apartment-2', label: 'Таунхаус'},
        {value: 'apartment-3', label: 'Пентхаус'},
        {value: 'apartment-4', label: 'Атриумариум'},
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
            width: '100%'
        }),
        singleValue: (provided, state) => ({
            ...provided,
            width: '100%',
            color: '#ffffff'


        }),
        placeholder: (provided, state) => ({
            ...provided,
            color : '#ffffff'
        })
    };

    return (
        <div className={styles.container}>
            <Select
                id="my-custom-id"
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
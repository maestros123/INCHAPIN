import styles from './Form.module.scss'
import InputMask from 'react-input-mask';
import Button from "@/components/ui/button/Button";
import {FC, useState} from "react";
import Modal from "@/components/modal/Modal";

interface FormProps {
    setOpen: (open:boolean) => void;
}

const Form: FC<FormProps> = ({setOpen}) => {

    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');

      function handleFormSubmit() {
        console.log('Имя:', name);
        console.log('Телефон:', phone);
        console.log('E-mail:', email);
    }

    return (
        <Modal onCloseAction={() => setOpen(false)}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>ЗАКАЗАТЬ ЗВОНОК</h2>
                <div className={styles.inputName}>
                    <input type="text"
                           placeholder=" "
                           value={name}
                           onChange={e => setName(e.target.value)}/>
                    <label>Ваше имя</label>
                </div>
                <div className={styles.inputPhone}>
                    <InputMask
                        mask="+7 (999) 999-99-99"
                        placeholder=" "
                        type="text"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                    <label>Телефон</label>
                </div>
                <div className={styles.inputMail}>
                    <input type="text"
                           placeholder=" "
                           value={email}
                           onChange={e => setEmail(e.target.value)}
                    />
                    <label>E-mail</label>
                </div>
                <div className={styles.personal}>
                    <p>Нажимая на кнопку «Отправить», вы ознакомлены и соглашаетесь с <br/><span>политикой обработки персональных
                        данных</span></p>
                </div>
                <div className={styles.button}>
                    <Button label="Отправить" location="form" onClick={handleFormSubmit}/>
                </div>
            </div>
        </Modal>
    );
};

export default Form;
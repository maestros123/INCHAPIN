import styles from "./Modal.module.scss";
import Image from 'next/image'
import React, {FC, ReactNode} from "react";

type ModalProps = {
    onCloseAction: React.Dispatch<React.SetStateAction<boolean>>;
    children: ReactNode;
};

const Modal:FC<ModalProps> = ({ onCloseAction, children }) => {

    function closeModal() {
        onCloseAction(prev => !prev);
    }

    return (
        <div className={styles.container}>
            <div className={styles.closeButton} onClick={closeModal}>
                <Image
                    src="/close.png"
                    alt="button close"
                    width={26}
                    height={26}
                />
            </div>
            {children}
        </div>
    );
};

export default Modal;
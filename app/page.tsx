'use client'
import localFont from 'next/font/local'
import FirstScreen from "@/components/firstScreen/FirstScreen";
import SecondScreen from "@/components/secondScreen/SecondScreen";
import {useEffect, useState} from "react";
import Form from "@/components/form/Form";
import { CSSTransition } from 'react-transition-group';
import Video from "@/components/video/Video";

const ProximaNova = localFont({
    src: [
        {
            path: '../public/fonts/ProximaNova-Regular.woff',
            weight: 'normal',
            style: 'normal',
        },
        {
            path: '../public/fonts/ProximaNova-Bold.woff',
            weight: 'bold',
            style: 'normal',
        },
        {
            path: '../public/fonts/ProximaNova-Semibold.woff',
            weight: '600',
            style: 'normal',
        },
    ],
})

export default function Home() {
    const [open, setOpen] = useState(false)

    const [videoOpen, setVideoOpen] = useState(false);

    function openVideo() {
        setVideoOpen(true)
    }


    useEffect(() => {
        // Функция для обработки нажатия клавиши
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && open) {
                setOpen(false);
            }

            if (e.key === 'Escape' && videoOpen) {
                setVideoOpen(false);
            }
        };

        // Если модальное окно открыто, блокировать скролл
        if (open || videoOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [open, videoOpen]);

    return (
    <main className={ProximaNova.className}>
      <FirstScreen setOpen={setOpen} />
      <SecondScreen setVideoOpen={setVideoOpen}/>
        <CSSTransition
            in={open}
            timeout={500}
            classNames="alert"
            unmountOnExit
        >
            <Form setOpen={setOpen}/>
        </CSSTransition>
        <CSSTransition
            in={videoOpen}
            timeout={500}
            classNames="alert"
            unmountOnExit
        >
            <Video setVideoOpen={setVideoOpen}/>
        </CSSTransition>
    </main>
  )
}

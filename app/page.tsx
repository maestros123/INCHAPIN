'use client'
import {Roboto} from 'next/font/google'
import FirstScreen from "@/components/firstScreen/FirstScreen";
import SecondScreen from "@/components/secondScreen/SecondScreen";
import {useEffect, useState} from "react";
import Form from "@/components/form/Form";
import {CSSTransition} from 'react-transition-group';
import Video from "@/components/video/Video";
import {ThemeProvider} from "@/context/ThemeContext";
import ThemeChoice from "@/components/ui/themeChoice/ThemeChoice";


const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})


export default function Home() {
    const [open, setOpen] = useState(false)

    const [videoOpen, setVideoOpen] = useState(false);

    function openVideo() {
        setVideoOpen(true)
    }


    useEffect(() => {
        // Функция для обработки нажатия клавиши
        const handleKeyDown = (e: KeyboardEvent) => {
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
        <ThemeProvider>
            <main className={roboto.className}>
                <FirstScreen setOpen={setOpen}/>
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
            <ThemeChoice />
        </ThemeProvider>
    )
}

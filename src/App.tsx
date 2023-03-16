import "./styles/index.scss";
import {Route, Routes, Link} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Suspense, useState} from "react";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export const App = () => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

    const toggleTheme = () => {
        setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    }

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>{theme}</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};
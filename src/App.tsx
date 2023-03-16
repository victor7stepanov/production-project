import "./index.scss";
import {Route, Routes, Link} from "react-router-dom";
import {AboutPage} from "./pages/AboutPage/AboutPage";
import {MainPage} from "./pages/MainPage/MainPage";

export const App = () => {
    return (
        <div className='app'>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Routes>
                <Route path={'/about'} element={<AboutPage />} />
                <Route path={'/'} element={<MainPage />} />
            </Routes>
        </div>
    );
};
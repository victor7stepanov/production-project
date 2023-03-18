import "./styles/index.scss";
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/libs/classNames/classNames";
import {AppRouter} from "app/providers/router";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>{theme}</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter />
        </div>
    );
};
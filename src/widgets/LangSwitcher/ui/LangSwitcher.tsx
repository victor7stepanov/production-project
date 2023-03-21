import {classNames} from "shared/libs/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {i18n, t} = useTranslation();

    const toggleLanguage = async () => {
        await i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    }

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleLanguage}
        >
            {t('language')}
        </Button>
    );
};
import { useTranslation } from 'react-i18next'
import type { FC } from 'react'
import type { ChangeEvent } from 'react'
import '../../i18n'
import styles from './Header.module.css'

export const Header: FC = () => {

  const { t, i18n } = useTranslation()
  const handleLangChange = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value)
  }
  return (
    <header className="header">
      <span className={styles.lspan}>
        WHITEBIRD
      </span>
      <h3 className={styles.text}>Support Page</h3>
      <select value={i18n.language} onChange={handleLangChange}>
        <option value="ru">{t('header.option1')}</option>
        <option value="en">{t('header.option2')}</option>
      </select>
      <button className={styles.join}>
        {t('header.button1')}
      </button>
      <button className={styles.register}>
        {t('header.button2')}
      </button>
    </header>
  );
}

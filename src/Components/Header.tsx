import { useTranslation } from 'react-i18next'
import '../i18n'

export default function Header() {

  const {t, i18n} = useTranslation()
  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value)
  }
return (
  <header className="header">
      <span className="span1">
        WHITEBIRD
      </span>
      <h3 className="span2">Support Page</h3>
      <select  value={i18n.language} onChange={handleLangChange}>
        <option value="ru">{t('header.option1')}</option>
        <option value="en">{t('header.option2')}</option>
      </select>
      <button className="button1">
       {t('header.button1')}
      </button>
      <button className="button2">
        {t('header.button2')}
      </button>
      </header>
  );
}
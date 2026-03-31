import { FaqSection } from '../FaqSection/FaqSection'
import { SupportForm } from '../SupportForm/SupportForm'
import { useTranslation } from 'react-i18next'
import type { FC } from 'react'
import type { MainProps } from '../../types/types'
import styles from './Main.module.css'

export const Main: FC<MainProps> = ({ faq }) => {
const { t } = useTranslation()
    return (
        <main className="main">
            <h3 className={styles.intoMain}>{t('main.into')}</h3>
            <SupportForm name="" email="" message="" reason="" accept={false} />
         
            <div className={styles.faqBlock}>
            <h3 className={styles.intoFaq}>{t('main.intofaq')}</h3>
        <FaqSection faq={faq} />
            </div>
        </main>
    )
}

import type { Ifaq } from '../types/types'
import { FaqSection } from './FaqSection'
import SupportForm from './SupportForm'
import { useTranslation } from 'react-i18next'
export default function Main() {

const { t } = useTranslation()
const faq: Ifaq[] = [
    {id: 1,
     question: t('main.faq.question1'),
     answer: t('main.faq.answer1'),
    },
    {id: 2,
     question: t('main.faq.question2'),
     answer: t('main.faq.answer2'),
    },
    {id: 3,
     question: t('main.faq.question3'),
     answer: t('main.faq.answer3'),
    }
    
    ]
    return (

        <main className="main">
            <h3 style={{ marginBottom: '10px', marginTop: '10px', fontSize: '24px', fontWeight: 'bold', whiteSpace: 'pre-line' }}>{t('main.into')}</h3>
            <SupportForm />
         
            <div className="faq-block">
            <h3 style={{ marginBottom: '10px', marginTop: '10px', fontSize: '24px', fontWeight: 'bold' }}>{t('main.intofaq')}</h3>
        <FaqSection faq={faq} />
            </div>
        </main>
    )
}
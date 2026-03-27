import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

 const resources = {
    ru: {
        translation: {
            header:{
                button1: 'Регистрация',
                button2: 'Войти',
                option1: 'Ру',
                option2: 'En',

            },
            main:{
                into: 'Пожалуйста, укажите всю необходимую информацию, чтобы мы могли \n быстро и эффективно решить вашу проблему',
                intofaq: 'Часто задаваемые вопросы',
                faq:{
                    question1: 'Что такое сервис WHITEBIRD?',
                    answer1: 'WHITEBIRD — оператор криптоплатформы. Резидент Парка высоких технологий Республики Беларусь.',
                    question2: 'Чем криптообменник WHITEBIRD отличается от обычной криптобиржи?',
                    answer2: 'Мы не храним ваши средства. Вы немедленно получаете средства к себе на карту или кошелек. Сумма, которую вы видите на экране - это именно та сумма, которую вы получите, без скрытых платежей или комиссий.',
                    question3: 'С какими платежными картами вы работаете?',
                    answer3: 'На данный момент поддерживаются банковские платежные карты VISA, Белкарт (все банки Республики Беларусь), MasterCard от Альфа-Банка (Беларусь), MasterCard Crypto Статус от СтатусБанка, а также карты, эмитированные банками Российской Федерации (в том числе, платежной системы МИР). ',
                }
            },
            supportForm:{
                InputFrame:{
                    label1: 'Полное имя',
                    label2: 'Email',
                    label3: 'Сообщение',
                    label4: 'Я согласен(на) с условиями обработки данных',
                    label5: 'Причина обращения',
                },
                select:{
                    option1: 'Не работает вход',
                    option2: 'Оплата',
                    option3: 'Другое',
                },
                button: 'Отправить',
            },
            validation:{
                name: {
                    min: 'Имя слишком короткое',
                    max: 'Имя слишком длинное',
                },
                email: {
                    email: 'Неверный email',
                },
                message: {
                    min: 'Сообщение слишком короткое',
                    max: 'Сообщение слишком длинное',
                },
                accept: {
                    required: 'Вы должны согласиться с условиями',
                },
                reason: {
                    required: 'Выберите причину обращения',
                }
            }
        }
    },
        

    en: {
        translation: {
            header:{
                button1: 'Registration',
                button2: 'Login',
                option1: 'Ru',
                option2: 'En',
                 },
            main:{
                into: 'Please provide all the necessary information so that we can \n quickly and effectively solve your problem',
                intofaq: 'Frequently Asked Questions',
                faq:{
                    question1: 'What is the WHITEBIRD service?',
                    answer1: 'WHITEBIRD is a cryptocurrency platform operator. Resident of the High Technology Park of the Republic of Belarus.',
                    question2: 'What is the difference between the WHITEBIRD cryptocurrency exchange and a regular cryptocurrency exchange?',
                    answer2: 'We do not store your funds. You immediately receive funds to your card or wallet. The amount you see on the screen is exactly the amount you will receive, without hidden payments or commissions.',
                    question3: 'What payment cards do you work with?',
                    answer3: 'At the moment, we support bank payment cards VISA, Belkart (all banks of the Republic of Belarus), MasterCard from Alfa-Bank (Belarus), MasterCard Crypto Status from StatusBank, as well as cards issued by banks of the Russian Federation (including the MIR payment system).',
                }   
            },
        supportForm:{
            InputFrame:{
                label1: 'Full Name',
                label2: 'Email',
                label3: 'Message',
                label4: 'I agree to the processing of personal data',
                label5: 'Reason for appeal',
            },
            select:{
                option1: 'Not working login',
                option2: 'Payment',
                option3: 'Other',
            },
            button: 'Send',
        },
        validation:{
            name: {
                min: 'Name is too short',
                max: 'Name is too long',
            },
            email: {
                email: 'Invalid email',
            },

            message: {
                min: 'Message is too short',
                max: 'Message is too long',
            },
            accept: {
                required: 'You must agree to the processing of personal data',
            },
            reason: {
                required: 'Choose the reason for the appeal',
            }
        }}
    }
    

}
        





i18n.use(initReactI18next).init({
    resources,
    lng: 'ru',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
        
    }
})
export default i18n

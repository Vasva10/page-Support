import '../App.css'
import Form from './Form'
import InputFrame from './InputFrame'
import { SupportSchema } from '../validation/Validation'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'

export default function SupportForm() {
    
    const { t } = useTranslation()
       const { control, handleSubmit, watch, formState: { errors } } =
         useForm<any>({resolver: zodResolver(SupportSchema),
            defaultValues: {
                name: '',
                email: '',
                message: '',
                reason: '',
                accept: false,
                
            },
        })

    const onSubmit = (values: any) => {
        console.log('submit values:', values)
    }

    return (
        <div className="Form">
        
            
           <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller  name="name" control={control} render={({ field }) => ( 
            <InputFrame error={!!errors.name} label={t('supportForm.InputFrame.label1')} name="name" value={field.value} onChange={field.onChange} />
         )} />
         {errors.name && <p className="error-text"> {t(errors.name.message as string)}</p>}
        <Controller name="email" control={control} render={({ field }) => ( 
            <InputFrame error={!!errors.email} label={t('supportForm.InputFrame.label2')} name="email" value={field.value} onChange={field.onChange} />
        )} />
        {errors.email && <p className="error-text"> {t(errors.email.message as string)}</p>}
            <label htmlFor="accept">
            {t('supportForm.InputFrame.label5')}
            </label>
        <Controller name="reason" control={control} render={({ field }) => ( 
            <select className="select" value={field.value} onChange={field.onChange}>
            <option value="1">{t('supportForm.select.option1')}</option>
            <option value="2">{t('supportForm.select.option2')}</option>
            <option value="3">{t('supportForm.select.option3')}</option>
            </select>
        )} />
       <Controller name="message" control={control} render={({ field }) => ( 
            <InputFrame error={!!errors.message} label={t('supportForm.InputFrame.label3')} name="message" kind="textarea" value={field.value} onChange={field.onChange} />
        )} />
        {errors.message && <p className="error-text"> {t(errors.message.message as string)}</p>}

        <Controller name="accept" control={control} render={({ field }) => ( 
            <input id="accept" type="checkbox" checked={field.value} onChange={(e) => field.onChange(e.target.checked)} />
        
        )} />
         {errors.accept && <p className="error-text"> {t(errors.accept.message as string)}</p>}
            <label htmlFor="accept">
            {t('supportForm.InputFrame.label4')}
            </label>
        
        <button type="submit" className="SupportForm" disabled={!watch("accept")}>
            {t('supportForm.button')}
        </button>
        
        </Form>
    </div>
    )
}


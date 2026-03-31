import '../../App.css'
import { Form } from '../Form/Form'
import { InputFrame } from '../InputFrame/InputFrame'
import { SupportSchema } from '../../validation/Validation'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import type { ISupportFormProps } from '../../types/types'
import type { FC } from 'react'
import styles from './SupportForm.module.css'
export const SupportForm: FC<ISupportFormProps> = () => {

    const { t } = useTranslation()
    const { control, handleSubmit, formState: { errors, isValid } } = useForm<ISupportFormProps>({
        resolver: zodResolver(SupportSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
            reason: '',
            accept: false,
        },
    })

    const onSubmit = (values: ISupportFormProps) => {
        console.log('submit values:', values)
    }

    return (
        <div className="Form">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Controller name="name" control={control} render={({ field }) => (
                    <InputFrame error={Boolean(errors.name)} label={t('supportForm.InputFrame.label1')} name="name" value={field.value} onChange={field.onChange} />
                )} />
                {errors.name && <p className={styles.text}> {t(String(errors.name.message))}</p>}
                <Controller name="email" control={control} render={({ field }) => (
                    <InputFrame error={Boolean(errors.email)} label={t('supportForm.InputFrame.label2')} name="email" value={field.value} onChange={field.onChange} />
                )} />
                {errors.email && <p className={styles.text}> {t(String(errors.email.message))}</p>}
                <label htmlFor="accept">
                    {t('supportForm.InputFrame.label5')}
                </label>
                <Controller name="reason" control={control} render={({ field }) => (
                    <select className={styles.select} value={field.value} onChange={field.onChange}>
                        <option value="1">{t('supportForm.select.option1')}</option>
                        <option value="2">{t('supportForm.select.option2')}</option>
                        <option value="3">{t('supportForm.select.option3')}</option>
                    </select>
                )} />

                <Controller name="message" control={control} render={({ field }) => (
                    <InputFrame error={Boolean(errors.message)} label={t('supportForm.InputFrame.label3')} name="message" kind="textarea" value={field.value} onChange={field.onChange} />
                )} />
                {errors.message && <p className={styles.text}> {t(String(errors.message.message))}</p>}

                <Controller name="accept" control={control} render={({ field }) => (
                    <input id="accept" type="checkbox" checked={field.value} onChange={(e) => field.onChange(e.target.checked)} />
                )} />
                {errors.accept && <p className={styles.text}> {t(String(errors.accept.message))}</p>}
                <label htmlFor="accept">
                    {t('supportForm.InputFrame.label4')}
                </label>

                <button type="submit" className={styles.button} disabled={!isValid}>
                    {t('supportForm.button')}
                </button>

            </Form>
        </div>
    )
}


import type { InputFrameProps } from '../../types/types'
import type { FC } from 'react'
import styles from './InputFrame.module.css'

export const InputFrame: FC<InputFrameProps> = ({
    label,
    name,
    kind = 'input',
    type = 'text',
    value,
    onChange,
    placeholder,
    error
}) => {
    return (
        <label className={styles.label}>
            <span>{label}</span>

            {kind === 'textarea' ? (
                <textarea className={error ? 'InputFrame error' : 'InputFrame'}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />

            ) : (
                <input className={error ? 'InputFrame error' : 'InputFrame'}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder} 
                />

            )}
        </label>
    )
}


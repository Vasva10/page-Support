import type { InputFrameProps } from '../types/types'


export default function InputFrame({
    label,
    name,
    kind = 'input',
    type = 'text',
    value,
    onChange,
    placeholder,
    error
}: InputFrameProps)  {
    return (
       <label style={{ display: 'flex', flexDirection: 'column', gap: '6px'}}>
        <span>{label}</span>

        {kind === 'textarea' ?(
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
             placeholder={placeholder} /> 
             
        )}
    </label>
  )
}

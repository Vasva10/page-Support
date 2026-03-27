import type {FC}  from 'react'
import { useState } from 'react'
import type {IFaqSectionProps} from '../types/types'
import '../App.css'


export const FaqSection: FC<IFaqSectionProps> = ({faq}) => {
    const [isOpen, setOpenIndex] = useState<number[]>([])
    return (
   
    <div>
      {faq.map((info) => (
        <div key={info.id}>
            <button className="FaqSection" type="button" onClick={() =>
             setOpenIndex(isOpen.includes(info.id) ? isOpen.filter(id => id !== info.id) : [...isOpen, info.id])}>
          {info.question}</button>
          
          {isOpen.includes(info.id) && <p className="faq-answer">{info.answer}</p>}
        </div>
      ))}
    </div>
  )
}

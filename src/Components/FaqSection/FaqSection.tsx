import type { FC } from 'react'
import { useState } from 'react'
import type { IFaqSectionProps } from '../../types/types'
import '../../App.css'
import styles from './FaqSection.module.css'

const toggleOpen = (id: number, isOpen: number[]) => {
  return isOpen.includes(id) ? isOpen.filter((itemId) => itemId !== id) : [...isOpen, id] 
}

export const FaqSection: FC<IFaqSectionProps> = ({ faq }) => {
  const [openMap, setOpen] = useState<number[]>([])

  return (
    <div>
      {faq.map((info) => (
        <div key={info.id}>
          <button className={styles.button} type="button" onClick={() =>
            setOpen(toggleOpen(info.id, openMap))}>
            {info.question}</button>

          {openMap.includes(info.id) && <p className={styles.answer} dangerouslySetInnerHTML={{ __html: info.answer }}></p>}
        </div>
      ))}
    </div>
  )
}

import '../App.css'
import { Header } from '../Components/Header/Header.tsx'
import { Footer } from '../Components/Footer/Footer.tsx'
import { Main } from '../Components/Main/Main.tsx'
import { getFaq } from '../api/requests.ts'
import { useEffect, useState, type FC } from 'react'
import type { Ifaq } from '../types/types.tsx'

export const App: FC = () => {
  const [faq, setFaq] = useState<Ifaq[]>([])
  useEffect(() => {
    getFaq().then((data) => {
      const mappedFaq: Ifaq[] =
        data?.data?.flatMap((faqBlock) =>
          faqBlock.attributes.questions.data.map((q) => ({
            id: q.id,
            question: q.attributes.Caption,
            answer: q.attributes.Text,
          }))
        ) ?? []
      setFaq(mappedFaq)
    })
  }, [])
  return (
    <>
      <Header />
      <Main faq={faq} />
      <Footer />

    </>
  )
}

